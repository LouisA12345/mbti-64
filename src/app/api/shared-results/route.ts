import { NextResponse } from "next/server";
import { z } from "zod";
import { appendSharedResult, getSharedResults } from "@/lib/server/shared-results-store";
import { ALL_PERSONALITY_CODES } from "@/lib/data/profiles";
import { AXES } from "@/lib/types";

const scoresSchema = z.object(
  Object.fromEntries(AXES.map((axis) => [axis, z.number().min(0).max(100)])) as Record<
    (typeof AXES)[number],
    z.ZodNumber
  >,
);

const postSchema = z.object({
  ownerId: z.string().min(1).max(100),
  name: z.string().trim().min(1).max(40),
  code: z.string().refine((c) => (ALL_PERSONALITY_CODES as string[]).includes(c), "Invalid personality code"),
  scores: scoresSchema,
});

export async function GET(request: Request) {
  const ownerId = new URL(request.url).searchParams.get("ownerId");
  if (!ownerId) {
    return NextResponse.json({ error: "Missing ownerId" }, { status: 400 });
  }
  const results = await getSharedResults(ownerId);
  return NextResponse.json({ results });
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { ownerId, name, code, scores } = parsed.data;
  try {
    await appendSharedResult(ownerId, { name, code, scores, completedAt: Date.now() });
  } catch {
    // Most likely cause on a fresh serverless deploy: no KV database connected yet, so the
    // local-file fallback can't write to a read-only filesystem. Fail with a clear message
    // instead of an opaque 500.
    return NextResponse.json({ error: "Shared results storage isn't available on this deployment yet." }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}
