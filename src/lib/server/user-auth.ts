import { cookies } from "next/headers";
import { getSessionUsername } from "./session-store";

export const SESSION_COOKIE_NAME = "mbti64_session";

export function sessionCookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  };
}

/** Reads the session cookie from the current request and resolves it to a username, if any. */
export async function getCurrentUsername(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE_NAME)?.value;
  return getSessionUsername(token);
}
