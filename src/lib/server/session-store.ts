import { promises as fs } from "fs";
import path from "path";
import crypto from "crypto";
import { getRedisClient } from "./kv-client";

const SESSION_TTL_SECONDS = 60 * 60 * 24 * 30; // 30 days

interface SessionRecord {
  username: string;
  expiresAt: number;
}

function redisKey(token: string): string {
  return `mbti64:session:${token}`;
}

// Same Redis-with-file-fallback pattern as the other stores.
const DATA_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(DATA_DIR, "sessions.json");

type SessionsShape = Record<string, SessionRecord>;

async function readFileSessions(): Promise<SessionsShape> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as SessionsShape) : {};
  } catch {
    return {};
  }
}

async function writeFileSessions(sessions: SessionsShape): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(sessions), "utf-8");
}

export async function createSession(username: string): Promise<string> {
  const token = crypto.randomBytes(32).toString("hex");
  const redis = getRedisClient();
  if (redis) {
    await redis.set(redisKey(token), username, { ex: SESSION_TTL_SECONDS });
  } else {
    const sessions = await readFileSessions();
    sessions[token] = { username, expiresAt: Date.now() + SESSION_TTL_SECONDS * 1000 };
    await writeFileSessions(sessions);
  }
  return token;
}

export async function getSessionUsername(token: string | undefined): Promise<string | null> {
  if (!token) return null;
  const redis = getRedisClient();
  if (redis) {
    return (await redis.get<string>(redisKey(token))) ?? null;
  }
  const sessions = await readFileSessions();
  const record = sessions[token];
  if (!record) return null;
  if (record.expiresAt < Date.now()) return null;
  return record.username;
}

export async function deleteSession(token: string | undefined): Promise<void> {
  if (!token) return;
  const redis = getRedisClient();
  if (redis) {
    await redis.del(redisKey(token));
    return;
  }
  const sessions = await readFileSessions();
  delete sessions[token];
  await writeFileSessions(sessions);
}
