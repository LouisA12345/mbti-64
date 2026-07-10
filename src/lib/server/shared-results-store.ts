import { promises as fs } from "fs";
import path from "path";
import { getRedisClient } from "./kv-client";
import type { DimensionScores } from "../types";

export interface SharedResultEntry {
  name: string;
  code: string;
  scores: DimensionScores;
  completedAt: number;
}

const MAX_ENTRIES_PER_OWNER = 200;

function redisKey(ownerId: string): string {
  return `mbti64:shared-results:${ownerId}`;
}

// --- Local JSON-file fallback -----------------------------------------------------------
// Used automatically whenever no KV/Upstash credentials are configured — i.e. local dev and
// tunnel testing keep working exactly as before, with zero setup. On Vercel, once a KV/Upstash
// database is connected (which injects the env vars above), the Redis path takes over instead,
// since Vercel's serverless filesystem is read-only and ephemeral and can't back this file.
const DATA_DIR = path.join(process.cwd(), ".data");
const STORE_PATH = path.join(DATA_DIR, "shared-results.json");

type FileStoreShape = Record<string, SharedResultEntry[]>;

async function readFileStore(): Promise<FileStoreShape> {
  try {
    const raw = await fs.readFile(STORE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as FileStoreShape) : {};
  } catch {
    return {};
  }
}

async function writeFileStore(store: FileStoreShape): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(STORE_PATH, JSON.stringify(store), "utf-8");
}

// --- Public API --------------------------------------------------------------------------

export async function appendSharedResult(ownerId: string, entry: SharedResultEntry): Promise<void> {
  const redis = getRedisClient();
  if (redis) {
    const key = redisKey(ownerId);
    const existing = (await redis.get<SharedResultEntry[]>(key)) ?? [];
    const next = [entry, ...existing].slice(0, MAX_ENTRIES_PER_OWNER);
    await redis.set(key, next);
    return;
  }

  const store = await readFileStore();
  const existing = store[ownerId] ?? [];
  store[ownerId] = [entry, ...existing].slice(0, MAX_ENTRIES_PER_OWNER);
  await writeFileStore(store);
}

export async function getSharedResults(ownerId: string): Promise<SharedResultEntry[]> {
  const redis = getRedisClient();
  if (redis) {
    const key = redisKey(ownerId);
    return (await redis.get<SharedResultEntry[]>(key)) ?? [];
  }

  const store = await readFileStore();
  return store[ownerId] ?? [];
}
