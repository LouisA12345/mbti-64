"use client";

import Link from "next/link";
import { RefreshCw, LayoutGrid, History, Gem } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PersonalityIllustration } from "@/components/results/personality-illustration";
import { DimensionBars } from "@/components/results/dimension-bars";
import { RadarChartCard } from "@/components/results/radar-chart-card";
import { ShareBar } from "@/components/results/share-bar";
import { ProfileSections } from "@/components/results/profile-sections";
import { SharedHistoryPrompt } from "@/components/results/shared-history-prompt";
import type { DimensionScores, PersonalityProfile } from "@/lib/types";

interface ResultViewProps {
  profile: PersonalityProfile;
  scores: DimensionScores;
  isPersonal: boolean;
  forOwnerId?: string;
}

export function ResultView({ profile, scores, isPersonal, forOwnerId }: ResultViewProps) {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
      {isPersonal && forOwnerId && (
        <SharedHistoryPrompt ownerId={forOwnerId} code={profile.code} scores={scores} />
      )}

      {!isPersonal && (
        <div className="rounded-xl border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-muted-foreground">
          You&rsquo;re viewing the <span className="font-medium text-foreground">{profile.code}</span> archetype overview with
          representative scores.{" "}
          <Link href="/quiz" className="font-medium text-brand underline underline-offset-4">
            Take the assessment
          </Link>{" "}
          to get your personal result.
        </div>
      )}

      <div id="result-capture" className="grid gap-8 rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8 md:grid-cols-[minmax(0,320px)_1fr]">
        <PersonalityIllustration profile={profile} />
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-gradient-brand text-white">{isPersonal ? "Your Result" : "Archetype"}</Badge>
            <Badge variant="outline" className="font-mono">
              {profile.code}
            </Badge>
            <Badge variant="outline" className="gap-1 border-brand/40 text-brand">
              <Gem className="size-3" />
              {profile.rarity.label}
            </Badge>
          </div>
          <h1 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{profile.title}</h1>
          <p className="text-pretty text-muted-foreground">{profile.tagline}</p>
          <blockquote className="border-l-2 border-brand pl-4 italic text-foreground/90">&ldquo;{profile.quote}&rdquo;</blockquote>
          <p className="text-sm text-muted-foreground">
            Approximately <span className="font-medium text-foreground">{profile.rarity.percent}%</span> of people share this
            exact type — ranked <span className="font-medium text-foreground">#{profile.rarity.rank}</span> rarest of all{" "}
            {profile.rarity.totalTypes} types.
          </p>
          <div className="mt-2">
            <DimensionBars scores={scores} primaryColor={profile.colorPalette.primary} />
          </div>
        </div>
      </div>

      <ShareBar profile={profile} captureElementId="result-capture" />

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">Dimension Radar</CardTitle>
        </CardHeader>
        <CardContent>
          <RadarChartCard scores={scores} color={profile.colorPalette.primary} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">The Full Picture</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileSections profile={profile} />
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-10 text-center">
        <p className="text-muted-foreground">Curious how you compare, or want to see a different type?</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" nativeButton={false} render={<Link href="/quiz" />}>
            <RefreshCw className="size-4" />
            Retake the Assessment
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/types" />}>
            <LayoutGrid className="size-4" />
            Explore All 64 Types
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/history" />}>
            <History className="size-4" />
            View History
          </Button>
        </div>
      </div>
    </main>
  );
}
