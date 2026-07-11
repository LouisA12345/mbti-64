import { NextResponse } from "next/server";
import { getCurrentUsername } from "@/lib/server/user-auth";
import { clearUserResults } from "@/lib/server/user-results-store";

export async function POST() {
  const username = await getCurrentUsername();
  if (!username) {
    return NextResponse.json({ error: "Not logged in" }, { status: 401 });
  }
  await clearUserResults(username);
  return NextResponse.json({ ok: true });
}
