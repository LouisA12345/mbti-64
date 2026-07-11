import { promises as fs } from "fs";
import path from "path";
import { getRedisClient } from "./kv-client";
import type { DimensionScores } from "../types";

export interface GlobalResultEntry {
  ownerId: string;
  name: string;
  /** True when `name` is a real, logged-in account username rather than a self-typed or anonymous label. */
  verified: boolean;
  code: string;
  scores: DimensionScores;
  completedAt: number;
}

const MAX_GLOBAL_ENTRIES = 2000;
const REDIS_KEY = "mbti64:admin:all-results";

// Same Redis-with-file-fallback pattern as shared-results-store.ts, kept as its own store
// since this log is a distinct concern (every completed quiz, for the admin dashboard) from
// the per-friend shared history feature.
const DATA_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(DATA_DIR, "admin-all-results.json");

async function readFileLog(): Promise<GlobalResultEntry[]> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as GlobalResultEntry[]) : [];
  } catch {
    return [];
  }
}

async function writeFileLog(entries: GlobalResultEntry[]): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(entries), "utf-8");
}

export async function logResultGlobally(entry: GlobalResultEntry): Promise<void> {
  const redis = getRedisClient();
  if (redis) {
    const existing = (await redis.get<GlobalResultEntry[]>(REDIS_KEY)) ?? [];
    await redis.set(REDIS_KEY, [entry, ...existing].slice(0, MAX_GLOBAL_ENTRIES));
    return;
  }

  const existing = await readFileLog();
  await writeFileLog([entry, ...existing].slice(0, MAX_GLOBAL_ENTRIES));
}

export async function getAllResults(): Promise<GlobalResultEntry[]> {
  const redis = getRedisClient();
  if (redis) {
    return (await redis.get<GlobalResultEntry[]>(REDIS_KEY)) ?? [];
  }
  return readFileLog();
}
