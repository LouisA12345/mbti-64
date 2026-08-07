import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { setUserPassword } from "@/lib/server/user-store";

const resetPasswordSchema = z.object({
  username: z.string().trim().min(1).max(40),
  password: z.string().min(8, "Password must be at least 8 characters.").max(200),
});

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = resetPasswordSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.issues[0]?.message ?? "Invalid submission" }, { status: 400 });
  }

  const { username, password } = parsed.data;
  const updated = await setUserPassword(username, password);
  if (!updated) {
    return NextResponse.json({ error: "No such account" }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
