import crypto from "crypto";
import { cookies } from "next/headers";
import { createSession, deleteSession, getSessionUsername } from "./session-store";

export const ADMIN_COOKIE_NAME = "mbti64_admin_session";

// Admin sessions are deliberately much shorter-lived than regular user sessions (which persist
// for 30 days) — this is a higher-privilege account, so a stolen/leftover cookie should stop
// working well before a month goes by.
export const ADMIN_SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 hours

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
  return createSession(ADMIN_SESSION_MARKER, ADMIN_SESSION_TTL_SECONDS);
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

/** Reads the admin cookie from the current request and validates it — the one check every
 * admin-only API route (user management, etc.) should gate on before doing anything. */
export async function isAdminRequest(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE_NAME)?.value;
  return isValidAdminSessionToken(token);
}
