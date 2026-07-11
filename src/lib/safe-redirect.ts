/**
 * Validates a `next`-style redirect target so it can only ever point somewhere inside this
 * app. Without this, blindly redirecting to a user-supplied URL after login is a classic
 * open-redirect vector (e.g. `?next=https://evil.example` or `?next=//evil.example` used for
 * phishing right after a real, trusted login).
 */
export function getSafeNextPath(raw: string | null | undefined, fallback = "/profile"): string {
  if (!raw) return fallback;
  // Must be a root-relative path ("/quiz"), not protocol-relative ("//evil.com") or absolute.
  if (!raw.startsWith("/") || raw.startsWith("//")) return fallback;
  if (raw.includes("://")) return fallback;
  return raw;
}
