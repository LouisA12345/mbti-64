import { NextResponse } from "next/server";
import { z } from "zod";
import { isAdminRequest } from "@/lib/server/admin-auth";
import { deleteUser } from "@/lib/server/user-store";
import { clearUserResults } from "@/lib/server/user-results-store";

const deleteUserSchema = z.object({
  username: z.string().trim().min(1).max(40),
});

export async function POST(request: Request) {
  if (!(await isAdminRequest())) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const body = await request.json().catch(() => null);
  const parsed = deleteUserSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { username } = parsed.data;
  const deleted = await deleteUser(username);
  if (!deleted) {
    return NextResponse.json({ error: "No such account" }, { status: 404 });
  }

  await clearUserResults(username).catch(() => {});
  return NextResponse.json({ ok: true });
}
