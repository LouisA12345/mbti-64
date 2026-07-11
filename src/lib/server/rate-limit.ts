import { promises as fs } from "fs";
import path from "path";
import { getRedisClient } from "./kv-client";

const DEFAULT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const DEFAULT_MAX_ATTEMPTS = 10;

interface WindowRecord {
  count: number;
  windowStart: number;
}

function redisKey(key: string): string {
  return `mbti64:ratelimit:${key}`;
}

// Same Redis-with-file-fallback pattern as the other stores.
const DATA_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(DATA_DIR, "rate-limits.json");

type FileShape = Record<string, WindowRecord>;

async function readFileStore(): Promise<FileShape> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as FileShape) : {};
  } catch {
    return {};
  }
}

async function writeFileStore(store: FileShape): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(store), "utf-8");
}

export interface RateLimitResult {
  allowed: boolean;
  retryAfterSeconds: number;
}

/**
 * Simple fixed-window rate limiter. Records this attempt and reports whether the caller is
 * still within `maxAttempts` for the current `windowMs` window. Fails open (allows the
 * request) if the underlying store errors, since blocking legitimate logins is worse than
 * skipping a rate-limit check on rare storage hiccups.
 */
export async function consumeRateLimit(
  key: string,
  maxAttempts = DEFAULT_MAX_ATTEMPTS,
  windowMs = DEFAULT_WINDOW_MS,
): Promise<RateLimitResult> {
  const now = Date.now();

  try {
    const redis = getRedisClient();
    if (redis) {
      const rKey = redisKey(key);
      const existing = await redis.get<WindowRecord>(rKey);
      const record: WindowRecord =
        existing && now - existing.windowStart <= windowMs ? existing : { count: 0, windowStart: now };
      record.count += 1;
      const retryAfterSeconds = Math.max(1, Math.ceil((windowMs - (now - record.windowStart)) / 1000));
      await redis.set(rKey, record, { ex: retryAfterSeconds });
      return record.count > maxAttempts ? { allowed: false, retryAfterSeconds } : { allowed: true, retryAfterSeconds: 0 };
    }

    const store = await readFileStore();
    const existing = store[key];
    const record: WindowRecord =
      existing && now - existing.windowStart <= windowMs ? existing : { count: 0, windowStart: now };
    record.count += 1;
    store[key] = record;
    await writeFileStore(store);
    const retryAfterSeconds = Math.max(1, Math.ceil((windowMs - (now - record.windowStart)) / 1000));
    return record.count > maxAttempts ? { allowed: false, retryAfterSeconds } : { allowed: true, retryAfterSeconds: 0 };
  } catch {
    return { allowed: true, retryAfterSeconds: 0 };
  }
}

export function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();
  return "unknown";
}
