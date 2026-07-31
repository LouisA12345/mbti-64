"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Trash2, RefreshCw, History } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PersonalityIllustration } from "@/components/results/personality-illustration";
import { getProfile } from "@/lib/data/profiles";
import { encodeScoresToQuery } from "@/lib/scoring";
import { useT } from "@/lib/i18n/use-translations";
import { useLocale } from "@/components/locale-provider";
import type { PersonalityCode } from "@/lib/types";
import type { UserResultEntry } from "@/lib/server/user-results-store";

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

interface ProfileViewProps {
  username: string;
  results: UserResultEntry[];
}

export function ProfileView({ username, results: initialResults }: ProfileViewProps) {
  const router = useRouter();
  const t = useT();
  const { locale } = useLocale();
  const [results, setResults] = useState(initialResults);

  async function handleClear() {
    if (!window.confirm(t("profile.clearConfirm"))) return;
    await fetch("/api/profile/clear", { method: "POST" });
    setResults([]);
  }

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 font-heading text-3xl font-semibold tracking-tight">
            <User className="size-7 text-brand" />
            {username}
          </h1>
          <p className="text-muted-foreground">{t("profile.description")}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" render={<Link href="/history" />} nativeButton={false}>
            <History className="size-4" />
            {t("profile.localHistory")}
          </Button>
          <Button variant="outline" onClick={handleLogout}>
            {t("nav.logOut")}
          </Button>
        </div>
      </div>

      {results.length === 0 ? (
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-16 text-center">
          <p className="font-medium">{t("profile.emptyTitle")}</p>
          <p className="text-sm text-muted-foreground">{t("profile.emptyDescription")}</p>
          <Button render={<Link href="/quiz" />} nativeButton={false}>
            {t("history.takeAssessment")}
          </Button>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              {t("history.savedCount", { count: results.length, s: results.length === 1 ? "" : "s" })}
            </p>
            <Button variant="ghost" size="sm" onClick={handleClear}>
              <Trash2 className="size-3.5" />
              {t("history.clearMine")}
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {results.map((entry) => {
              const profile = getProfile(entry.code as PersonalityCode, locale);
              const query = encodeScoresToQuery(entry.scores);
              return (
                <div key={entry.completedAt} className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4">
                  <Link href={`/results/${profile.code}?${query.toString()}`} className="shrink-0">
                    <PersonalityIllustration profile={profile} className="size-20 rounded-xl" compact />
                  </Link>
                  <div className="flex min-w-0 flex-col justify-center gap-1.5">
                    <Badge variant="outline" className="w-fit font-mono text-[10px]">
                      {profile.code}
                    </Badge>
                    <Link href={`/results/${profile.code}?${query.toString()}`} className="truncate font-medium hover:text-brand">
                      {profile.title}
                    </Link>
                    <span className="text-xs text-muted-foreground">{formatDate(entry.completedAt)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="outline" render={<Link href="/quiz" />} nativeButton={false}>
              <RefreshCw className="size-4" />
              {t("history.takeItAgain")}
            </Button>
          </div>
        </>
      )}
    </main>
  );
}
