import { redirect } from "next/navigation";
import { getCurrentUsername } from "@/lib/server/user-auth";
import { QuizClient } from "@/components/quiz/quiz-client";

// Cookie-gated; must never be statically prerendered (same reasoning as /admin and /profile).
export const dynamic = "force-dynamic";

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function QuizPage({ searchParams }: PageProps) {
  const username = await getCurrentUsername();

  if (!username) {
    const sp = await searchParams;
    const query = new URLSearchParams();
    for (const [key, value] of Object.entries(sp)) {
      if (typeof value === "string") query.set(key, value);
    }
    const nextPath = query.toString() ? `/quiz?${query.toString()}` : "/quiz";
    redirect(`/login?next=${encodeURIComponent(nextPath)}`);
  }

  return <QuizClient />;
}
