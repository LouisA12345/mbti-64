import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { ResultView } from "@/components/results/result-view";
import { ALL_PERSONALITY_CODES, getProfile } from "@/lib/data/profiles";
import { decodeScoresFromQuery, defaultScoresForCode } from "@/lib/scoring";
import type { PersonalityCode } from "@/lib/types";

interface PageProps {
  params: Promise<{ code: string }>;
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function isValidCode(code: string): code is PersonalityCode {
  return (ALL_PERSONALITY_CODES as string[]).includes(code);
}

export function generateStaticParams() {
  return ALL_PERSONALITY_CODES.map((code) => ({ code }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { code } = await params;
  if (!isValidCode(code)) return {};
  const profile = getProfile(code);
  return {
    title: `${profile.code} — ${profile.title} | MBTI-64`,
    description: profile.description,
    openGraph: {
      title: `${profile.code} — ${profile.title}`,
      description: profile.tagline,
    },
  };
}

export default async function ResultPage({ params, searchParams }: PageProps) {
  const { code } = await params;
  if (!isValidCode(code)) notFound();

  const profile = getProfile(code);
  const sp = await searchParams;
  const decoded = decodeScoresFromQuery(sp);
  const scores = decoded ?? defaultScoresForCode(code);
  const forOwnerId = typeof sp.for === "string" ? sp.for : undefined;

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <ResultView profile={profile} scores={scores} isPersonal={decoded !== null} forOwnerId={forOwnerId} />
    </div>
  );
}
