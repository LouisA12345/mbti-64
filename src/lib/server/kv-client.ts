import { Redis } from "@upstash/redis";

// Reads either the classic Vercel KV / Vercel-Upstash-integration env var names, or Upstash's
// own native names (if you connect an Upstash database directly instead of through Vercel's
// storage marketplace). Whichever pair is present wins.
function getRedisCredentials(): { url: string; token: string } | null {
  const url = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;
  return url && token ? { url, token } : null;
}

let client: Redis | null | undefined;

/** Lazily created once per server instance; `null` means "no KV configured, callers should fall back to a file store". */
export function getRedisClient(): Redis | null {
  if (client !== undefined) return client;
  const credentials = getRedisCredentials();
  client = credentials ? new Redis(credentials) : null;
  return client;
}
