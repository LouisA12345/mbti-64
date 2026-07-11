import crypto from "crypto";

const KEY_LENGTH = 64;

/** Returns "salt:hash", both hex-encoded. No external deps — Node's built-in scrypt is a solid KDF for this. */
export function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, KEY_LENGTH).toString("hex");
  return `${salt}:${hash}`;
}

export function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;
  const hashBuffer = Buffer.from(hash, "hex");
  const suppliedHashBuffer = crypto.scryptSync(password, salt, KEY_LENGTH);
  if (hashBuffer.length !== suppliedHashBuffer.length) return false;
  return crypto.timingSafeEqual(hashBuffer, suppliedHashBuffer);
}
