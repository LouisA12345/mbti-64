import crypto from "crypto";
import { cookies } from "next/headers";
import { createSession, deleteSession, getSessionUsername } from "./session-store";

export const ADMIN_COOKIE_NAME = "mbti64_admin_session";

// Admin sessions are deliberately short-lived, unlike regular user sessions (30 days) — this is
// a higher-privilege account, so it shouldn't stay trusted for long. The cookie itself is also
// set with no maxAge (see the login route), so it's gone as soon as the browser closes; this TTL
// is the server-side backstop that still applies even if a browser's "reopen previous tabs" /
// session-restore feature resurrects a closed-but-not-actually-gone session cookie.
export const ADMIN_SESSION_TTL_SECONDS = 60 * 30; // 30 minutes

// Not a real user account — just a fixed marker stored as the "username" for admin sessions,
// reusing the same random-token, revocable session store as regular accounts.
//
// Bumping this string instantly invalidates every admin session that currently exists, anywhere
// — including ones issued before a TTL change, which a shorter TTL alone can't touch since a
// session's expiry is fixed in Redis at the moment it's created. Old tokens still resolve to the
// old marker value below, but that no longer equals the new one, so isValidAdminSessionToken
// rejects them. Bump the suffix any time you want to force every admin session to re-login.
const ADMIN_SESSION_MARKER = "__admin_v2__";

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
