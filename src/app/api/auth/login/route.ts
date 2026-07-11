import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyUserCredentials } from "@/lib/server/user-store";
import { createSession } from "@/lib/server/session-store";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@/lib/server/user-auth";
import { consumeRateLimit, getClientIp } from "@/lib/server/rate-limit";

const loginSchema = z.object({
  username: z.string().trim().min(1).max(20),
  password: z.string().min(1).max(200),
});

export async function POST(request: Request) {
  const rateLimit = await consumeRateLimit(`login:${getClientIp(request)}`, 10);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { username, password } = parsed.data;

  let account;
  try {
    account = await verifyUserCredentials(username, password);
  } catch {
    return NextResponse.json({ error: "Accounts aren't available on this deployment yet." }, { status: 503 });
  }

  if (!account) {
    return NextResponse.json({ error: "Incorrect username or password." }, { status: 401 });
  }

  const token = await createSession(account.username);
  const res = NextResponse.json({ ok: true, username: account.username });
  res.cookies.set(SESSION_COOKIE_NAME, token, sessionCookieOptions());
  return res;
}
