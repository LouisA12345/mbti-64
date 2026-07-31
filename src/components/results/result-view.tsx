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
import { useT } from "@/lib/i18n/use-translations";
import { useLocale } from "@/components/locale-provider";
import { RARITY_LABEL_KEYS } from "@/lib/i18n/dictionary";
import { getProfile } from "@/lib/data/profiles";
import type { DimensionScores, PersonalityCode } from "@/lib/types";

interface ResultViewProps {
  code: PersonalityCode;
  scores: DimensionScores;
  isPersonal: boolean;
  forOwnerId?: string;
}

export function ResultView({ code, scores, isPersonal, forOwnerId }: ResultViewProps) {
  const t = useT();
  const { locale } = useLocale();
  const profile = getProfile(code, locale);
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 py-10 sm:px-6 sm:py-14">
      {isPersonal && forOwnerId && (
        <SharedHistoryPrompt ownerId={forOwnerId} code={profile.code} scores={scores} />
      )}

      {!isPersonal && (
        <div className="rounded-xl border border-brand/30 bg-brand/5 px-4 py-3 text-sm text-muted-foreground">
          {t("results.viewingArchetype1")} <span className="font-medium text-foreground">{profile.code}</span>{" "}
          {t("results.viewingArchetype2")}{" "}
          <Link href="/quiz" className="font-medium text-brand underline underline-offset-4">
            {t("results.takeAssessment")}
          </Link>{" "}
          {t("results.toGetPersonal")}
        </div>
      )}

      <div id="result-capture" className="grid gap-8 rounded-3xl border border-border/60 bg-card/40 p-6 sm:p-8 md:grid-cols-[minmax(0,320px)_1fr]">
        <PersonalityIllustration profile={profile} />
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge className="bg-gradient-brand text-white">{isPersonal ? t("results.yourResult") : t("results.archetype")}</Badge>
            <Badge variant="outline" className="font-mono">
              {profile.code}
            </Badge>
            <Badge variant="outline" className="gap-1 border-brand/40 text-brand">
              <Gem className="size-3" />
              {t(RARITY_LABEL_KEYS[profile.rarity.label])}
            </Badge>
          </div>
          <h1 className="text-balance font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{profile.title}</h1>
          <p className="text-pretty text-muted-foreground">{profile.tagline}</p>
          <blockquote className="border-l-2 border-brand pl-4 italic text-foreground/90">&ldquo;{profile.quote}&rdquo;</blockquote>
          <p className="text-sm text-muted-foreground">
            {t("results.rarityStat1")} <span className="font-medium text-foreground">{profile.rarity.percent}%</span>{" "}
            {t("results.rarityStat2")} <span className="font-medium text-foreground">#{profile.rarity.rank}</span>{" "}
            {t("results.rarityStat3")} {profile.rarity.totalTypes} {t("results.rarityStat4")}
          </p>
          <div className="mt-2">
            <DimensionBars scores={scores} primaryColor={profile.colorPalette.primary} />
          </div>
        </div>
      </div>

      <ShareBar profile={profile} captureElementId="result-capture" />

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">{t("results.dimensionRadar")}</CardTitle>
        </CardHeader>
        <CardContent>
          <RadarChartCard scores={scores} color={profile.colorPalette.primary} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="font-heading text-xl">{t("results.fullPicture")}</CardTitle>
        </CardHeader>
        <CardContent>
          <ProfileSections profile={profile} />
        </CardContent>
      </Card>

      <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-10 text-center">
        <p className="text-muted-foreground">{t("results.compareCurious")}</p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button variant="outline" nativeButton={false} render={<Link href="/quiz" />}>
            <RefreshCw className="size-4" />
            {t("results.retakeAssessment")}
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/types" />}>
            <LayoutGrid className="size-4" />
            {t("results.exploreAll")}
          </Button>
          <Button variant="outline" nativeButton={false} render={<Link href="/history" />}>
            <History className="size-4" />
            {t("results.viewHistory")}
          </Button>
        </div>
      </div>
    </main>
  );
}
