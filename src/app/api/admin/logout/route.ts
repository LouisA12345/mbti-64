import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, revokeAdminSession } from "@/lib/server/admin-auth";

export async function POST() {
  const store = await cookies();
  const token = store.get(ADMIN_COOKIE_NAME)?.value;
  await revokeAdminSession(token).catch(() => {});

  const res = NextResponse.json({ ok: true });
  res.cookies.delete(ADMIN_COOKIE_NAME);
  return res;
}
