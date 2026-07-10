import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "mbti64_admin_session";

/**
 * Single-admin, password-gated session — no user database needed. The session cookie is a
 * deterministic HMAC of the admin password (never the password itself), so verifying a
 * request just means recomputing the same HMAC server-side and comparing — no session store
 * required, and the cookie is useless to an attacker without already knowing the password.
 */
function computeSessionToken(password: string): string {
  return crypto.createHmac("sha256", password).update("mbti64-admin-session").digest("hex");
}

export function isAdminConfigured(): boolean {
  return Boolean(process.env.ADMIN_PASSWORD);
}

export function verifyAdminPassword(password: string): boolean {
  const expected = process.env.ADMIN_PASSWORD;
  return Boolean(expected) && password === expected;
}

export function getAdminSessionToken(): string | null {
  const secret = process.env.ADMIN_PASSWORD;
  return secret ? computeSessionToken(secret) : null;
}

export function isValidAdminSessionToken(token: string | undefined | null): boolean {
  const expected = getAdminSessionToken();
  return Boolean(expected) && Boolean(token) && token === expected;
}
