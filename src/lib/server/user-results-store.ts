import { promises as fs } from "fs";
import path from "path";
import { getRedisClient } from "./kv-client";
import type { DimensionScores } from "../types";

export interface UserResultEntry {
  code: string;
  scores: DimensionScores;
  completedAt: number;
}

const MAX_PER_USER = 100;

function redisKey(username: string): string {
  return `mbti64:user-results:${username.trim().toLowerCase()}`;
}

// Same Redis-with-file-fallback pattern as the other stores.
const DATA_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(DATA_DIR, "user-results.json");

type FileShape = Record<string, UserResultEntry[]>;

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

export async function saveUserResult(username: string, entry: UserResultEntry): Promise<void> {
  const key = username.trim().toLowerCase();
  const redis = getRedisClient();
  if (redis) {
    const rKey = redisKey(username);
    const existing = (await redis.get<UserResultEntry[]>(rKey)) ?? [];
    await redis.set(rKey, [entry, ...existing].slice(0, MAX_PER_USER));
    return;
  }
  const store = await readFileStore();
  const existing = store[key] ?? [];
  store[key] = [entry, ...existing].slice(0, MAX_PER_USER);
  await writeFileStore(store);
}

export async function getUserResults(username: string): Promise<UserResultEntry[]> {
  const redis = getRedisClient();
  if (redis) {
    return (await redis.get<UserResultEntry[]>(redisKey(username))) ?? [];
  }
  const store = await readFileStore();
  return store[username.trim().toLowerCase()] ?? [];
}

export async function clearUserResults(username: string): Promise<void> {
  const redis = getRedisClient();
  if (redis) {
    await redis.del(redisKey(username));
    return;
  }
  const store = await readFileStore();
  delete store[username.trim().toLowerCase()];
  await writeFileStore(store);
}
