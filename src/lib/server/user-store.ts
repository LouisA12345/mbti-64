import { promises as fs } from "fs";
import path from "path";
import { getRedisClient } from "./kv-client";
import { hashPassword, verifyPassword } from "./password";

export interface UserAccount {
  username: string; // original casing, for display
  passwordHash: string;
  createdAt: number;
}

function normalizeUsername(username: string): string {
  return username.trim().toLowerCase();
}

const USER_KEY_PREFIX = "mbti64:user:";

function redisKey(username: string): string {
  return `${USER_KEY_PREFIX}${normalizeUsername(username)}`;
}

// Same Redis-with-file-fallback pattern as the other stores.
const DATA_DIR = path.join(process.cwd(), ".data");
const FILE_PATH = path.join(DATA_DIR, "users.json");

type UsersShape = Record<string, UserAccount>;

async function readFileUsers(): Promise<UsersShape> {
  try {
    const raw = await fs.readFile(FILE_PATH, "utf-8");
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? (parsed as UsersShape) : {};
  } catch {
    return {};
  }
}

async function writeFileUsers(users: UsersShape): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(FILE_PATH, JSON.stringify(users), "utf-8");
}

export async function getUser(username: string): Promise<UserAccount | null> {
  const redis = getRedisClient();
  if (redis) {
    return (await redis.get<UserAccount>(redisKey(username))) ?? null;
  }
  const users = await readFileUsers();
  return users[normalizeUsername(username)] ?? null;
}

export type CreateUserResult = { ok: true; account: UserAccount } | { ok: false; error: string };

export async function createUser(username: string, password: string): Promise<CreateUserResult> {
  const normalized = normalizeUsername(username);
  const existing = await getUser(normalized);
  if (existing) {
    return { ok: false, error: "That username is already taken." };
  }

  const account: UserAccount = {
    username: username.trim(),
    passwordHash: hashPassword(password),
    createdAt: Date.now(),
  };

  const redis = getRedisClient();
  if (redis) {
    await redis.set(redisKey(normalized), account);
  } else {
    const users = await readFileUsers();
    users[normalized] = account;
    await writeFileUsers(users);
  }
  return { ok: true, account };
}

/**
 * Best-effort key enumeration via SCAN. Some managed Redis providers (including Vercel's
 * marketplace-provisioned KV) restrict or no-op iteration commands, so this must never throw —
 * on any failure it just returns what it found so far and callers fall back to other sources.
 */
async function scanUserKeys(redis: NonNullable<ReturnType<typeof getRedisClient>>): Promise<string[]> {
  try {
    const keys: string[] = [];
    let cursor: string | number = 0;
    do {
      const result: [string, string[]] = await redis.scan(cursor, { match: `${USER_KEY_PREFIX}*`, count: 100 });
      keys.push(...result[1]);
      cursor = result[0];
    } while (cursor !== "0");
    return keys;
  } catch {
    return [];
  }
}

/**
 * All registered accounts, most recently created first — for the admin dashboard. Combines a
 * best-effort Redis SCAN with an explicit list of usernames known from elsewhere (e.g. the
 * completed-assessment log), since SCAN alone isn't reliable on every managed Redis provider and
 * accounts created before this feature existed were never indexed any other way.
 */
export async function getAllUsers(alsoKnownUsernames: string[] = []): Promise<UserAccount[]> {
  const redis = getRedisClient();
  let accounts: UserAccount[];
  if (redis) {
    const scannedKeys = await scanUserKeys(redis);
    const knownKeys = alsoKnownUsernames.map((u) => redisKey(u));
    const keys = Array.from(new Set([...scannedKeys, ...knownKeys]));
    if (keys.length === 0) return [];
    const results = await redis.mget<(UserAccount | null)[]>(...keys);
    accounts = results.filter((a): a is UserAccount => a !== null);
  } else {
    const users = await readFileUsers();
    accounts = Object.values(users);
  }
  return accounts.sort((a, b) => b.createdAt - a.createdAt);
}

export async function verifyUserCredentials(username: string, password: string): Promise<UserAccount | null> {
  const account = await getUser(username);
  if (!account) return null;
  return verifyPassword(password, account.passwordHash) ? account : null;
}

/** Admin-only: permanently removes an account. Returns false if no such account exists. */
export async function deleteUser(username: string): Promise<boolean> {
  const normalized = normalizeUsername(username);
  const existing = await getUser(normalized);
  if (!existing) return false;

  const redis = getRedisClient();
  if (redis) {
    await redis.del(redisKey(normalized));
  } else {
    const users = await readFileUsers();
    delete users[normalized];
    await writeFileUsers(users);
  }
  return true;
}

/** Admin-only: sets a new password for an existing account (e.g. a forced reset). Returns false
 * if no such account exists. Never reads or exposes the account's existing password — hashes are
 * one-way, so there is no "original password" to view in the first place. */
export async function setUserPassword(username: string, newPassword: string): Promise<boolean> {
  const normalized = normalizeUsername(username);
  const existing = await getUser(normalized);
  if (!existing) return false;

  const updated: UserAccount = { ...existing, passwordHash: hashPassword(newPassword) };
  const redis = getRedisClient();
  if (redis) {
    await redis.set(redisKey(normalized), updated);
  } else {
    const users = await readFileUsers();
    users[normalized] = updated;
    await writeFileUsers(users);
  }
  return true;
}
