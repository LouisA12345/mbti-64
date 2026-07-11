import { NextResponse } from "next/server";
import { ADMIN_COOKIE_NAME, createAdminSession, verifyAdminPassword } from "@/lib/server/admin-auth";
import { consumeRateLimit, getClientIp } from "@/lib/server/rate-limit";

export async function POST(request: Request) {
  const rateLimit = await consumeRateLimit(`admin-login:${getClientIp(request)}`, 8);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Too many attempts. Please try again later." },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds) } },
    );
  }

  const body = await request.json().catch(() => null);
  const password = typeof body?.password === "string" ? body.password : "";

  if (!verifyAdminPassword(password)) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }

  const token = await createAdminSession();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
