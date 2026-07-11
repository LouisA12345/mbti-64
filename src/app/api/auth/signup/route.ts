import { NextResponse } from "next/server";
import { z } from "zod";
import { createUser } from "@/lib/server/user-store";
import { createSession } from "@/lib/server/session-store";
import { SESSION_COOKIE_NAME, sessionCookieOptions } from "@/lib/server/user-auth";
import { consumeRateLimit, getClientIp } from "@/lib/server/rate-limit";

const signupSchema = z.object({
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters.")
    .max(20, "Username must be 20 characters or fewer.")
    .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores."),
  password: z.string().min(8, "Password must be at least 8 characters.").max(200),
});

export async function POST(request: Request) {
  const rateLimit = await consumeRateLimit(`signup:${getClientIp(request)}`, 5);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = signupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid submission" }, { status: 400 });
  }

  const { username, password } = parsed.data;

  let result;
  try {
    result = await createUser(username, password);
  } catch {
    return NextResponse.json({ error: "Accounts aren't available on this deployment yet." }, { status: 503 });
  }

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 409 });
  }

  const token = await createSession(result.account.username);
  const res = NextResponse.json({ ok: true, username: result.account.username });
  res.cookies.set(SESSION_COOKIE_NAME, token, sessionCookieOptions());
  return res;
}
