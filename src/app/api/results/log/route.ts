import { NextResponse } from "next/server";
import { z } from "zod";
import { logResultGlobally } from "@/lib/server/admin-log-store";
import { getCurrentUsername } from "@/lib/server/user-auth";
import { saveUserResult } from "@/lib/server/user-results-store";
import { ALL_PERSONALITY_CODES } from "@/lib/data/profiles";
import { AXES } from "@/lib/types";

const scoresSchema = z.object(
  Object.fromEntries(AXES.map((axis) => [axis, z.number().min(0).max(100)])) as Record<
    (typeof AXES)[number],
    z.ZodNumber
  >,
);

// Client-generated via crypto.randomUUID(); restricting the charset (rather than just length)
// keeps it from being used to smuggle anything unexpected into the underlying storage key.
const postSchema = z.object({
  ownerId: z
    .string()
    .min(1)
    .max(100)
    .regex(/^[a-zA-Z0-9-]+$/, "Invalid id"),
  name: z.string().trim().max(40).optional(),
  code: z.string().refine((c) => (ALL_PERSONALITY_CODES as string[]).includes(c), "Invalid personality code"),
  scores: scoresSchema,
});

/**
 * Logs every completed assessment (not just ones shared to a friend) so the admin dashboard
 * has full visibility. Called best-effort from the quiz's finish handler — failures here
 * never block a visitor from seeing their own result.
 *
 * If the visitor is logged in, the result is attributed to their real account (verified) and
 * also saved to their personal, cross-device account history — independent of the anonymous
 * localStorage/ownerId history that keeps working the same for logged-out visitors.
 */
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = postSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { ownerId, name, code, scores } = parsed.data;
  const username = await getCurrentUsername().catch(() => null);
  const completedAt = Date.now();

  try {
    await logResultGlobally({
      ownerId,
      name: username ?? (name && name.length > 0 ? name : "Anonymous"),
      verified: Boolean(username),
      code,
      scores,
      completedAt,
    });
    if (username) {
      await saveUserResult(username, { code, scores, completedAt });
    }
  } catch {
    // Most likely cause on a fresh serverless deploy: no KV database connected yet. This
    // logging call is already best-effort/fire-and-forget from the client, so just fail
    // cleanly rather than throwing an unhandled error.
    return NextResponse.json({ error: "Result logging isn't available on this deployment yet." }, { status: 503 });
  }
  return NextResponse.json({ ok: true });
}
