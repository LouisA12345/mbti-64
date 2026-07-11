import { NextResponse } from "next/server";
import { getCurrentUsername } from "@/lib/server/user-auth";

export async function GET() {
  const username = await getCurrentUsername().catch(() => null);
  return NextResponse.json({ username });
}
