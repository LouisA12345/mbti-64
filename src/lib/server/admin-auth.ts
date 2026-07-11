import crypto from "crypto";
import { createSession, deleteSession, getSessionUsername } from "./session-store";

export const ADMIN_COOKIE_NAME = "mbti64_admin_session";

// Not a real user account — just a fixed marker stored as the "username" for admin sessions,
// reusing the same random-token, revocable session store as regular accounts.
const ADMIN_SESSION_MARKER = "__admin__";

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

/** Timing-safe comparison — a plain `===` here would let an attacker infer the password
 * character-by-character from response-time differences. */
export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) return false;
  const expectedBuffer = Buffer.from(expected);
  const suppliedBuffer = Buffer.from(password);
  if (expectedBuffer.length !== suppliedBuffer.length) return false;
  return crypto.timingSafeEqual(expectedBuffer, suppliedBuffer);
}

/** Issues a random, server-tracked session token (unlike a deterministic derivation of the
 * password, this can actually be revoked on logout and carries no value once expired/deleted). */
export async function createAdminSession(): Promise<string> {
  return createSession(ADMIN_SESSION_MARKER);
}

export async function isValidAdminSessionToken(token: string | undefined | null): Promise<boolean> {
  if (!token) return false;
  const value = await getSessionUsername(token);
  return value === ADMIN_SESSION_MARKER;
}

export async function revokeAdminSession(token: string | undefined | null): Promise<void> {
  if (!token) return;
  await deleteSession(token);
}
