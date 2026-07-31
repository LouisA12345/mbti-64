"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { History, RefreshCw, Trash2, X, Check, Link2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PersonalityIllustration } from "@/components/results/personality-illustration";
import { clearHistory, getOrCreateOwnerId, loadHistory, removeFromHistory, type StoredResult } from "@/lib/storage";
import { encodeScoresToQuery } from "@/lib/scoring";
import { getProfile } from "@/lib/data/profiles";
import { useT } from "@/lib/i18n/use-translations";
import { useLocale } from "@/components/locale-provider";
import type { PersonalityCode } from "@/lib/types";
import type { SharedResultEntry } from "@/lib/server/shared-results-store";

interface MergedEntry {
  key: string;
  name: string;
  code: string;
  scores: StoredResult["scores"];
  completedAt: number;
  removable: boolean;
}

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export function HistoryList() {
  const t = useT();
  const { locale } = useLocale();
  const [localHistory, setLocalHistory] = useState<StoredResult[] | null>(null);
  const [sharedResults, setSharedResults] = useState<SharedResultEntry[]>([]);
  const [ownerId, setOwnerId] = useState("");
  const [copied, setCopied] = useState(false);

  // History lives in localStorage (and the shared results come from a server fetch), both
  // unavailable during SSR, so the first render must stay null on both server and client and
  // hydrate for real post-mount.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    setLocalHistory(loadHistory());
    const id = getOrCreateOwnerId();
    setOwnerId(id);
    if (id) {
      fetch(`/api/shared-results?ownerId=${encodeURIComponent(id)}`)
        .then((res) => (res.ok ? res.json() : { results: [] }))
        .then((data) => setSharedResults(data.results ?? []))
        .catch(() => setSharedResults([]));
    }
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  if (localHistory === null) return null;

  const merged: MergedEntry[] = [
    ...localHistory.map((r) => ({
      key: `you-${r.completedAt}`,
      name: t("history.you"),
      code: r.code,
      scores: r.scores,
      completedAt: r.completedAt,
      removable: true,
    })),
    ...sharedResults.map((r) => ({
      key: `friend-${r.completedAt}-${r.name}`,
      name: r.name,
      code: r.code,
      scores: r.scores,
      completedAt: r.completedAt,
      removable: false,
    })),
  ].sort((a, b) => b.completedAt - a.completedAt);

  const inviteUrl = ownerId && typeof window !== "undefined" ? `${window.location.origin}/quiz?for=${ownerId}` : "";

  async function handleCopyInvite() {
    try {
      await navigator.clipboard.writeText(inviteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard may be unavailable; the link is still visible to copy manually
    }
  }

  function handleRemove(completedAt: number) {
    removeFromHistory(completedAt);
    setLocalHistory((prev) => (prev ? prev.filter((r) => r.completedAt !== completedAt) : prev));
  }

  function handleClearAll() {
    if (!window.confirm(t("history.clearConfirm"))) return;
    clearHistory();
    setLocalHistory([]);
  }

  const inviteCard = ownerId && (
    <div className="flex flex-col gap-3 rounded-2xl border border-brand/30 bg-brand/5 p-4">
      <p className="flex items-center gap-2 text-sm font-medium">
        <Users className="size-4 text-brand" />
        {t("history.inviteHeading")}
      </p>
      <p className="text-sm text-muted-foreground">{t("history.inviteDescription")}</p>
      <div className="flex flex-wrap items-center gap-2">
        <code className="min-w-0 flex-1 truncate rounded-lg bg-background px-3 py-2 text-xs">{inviteUrl}</code>
        <Button size="sm" variant="outline" onClick={handleCopyInvite}>
          {copied ? <Check className="size-3.5" /> : <Link2 className="size-3.5" />}
          {copied ? t("history.copied") : t("history.copy")}
        </Button>
      </div>
    </div>
  );

  if (merged.length === 0) {
    return (
      <div className="flex flex-col gap-6">
        {inviteCard}
        <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-border py-16 text-center">
          <History className="size-8 text-muted-foreground" />
          <div>
            <p className="font-medium">{t("history.emptyTitle")}</p>
            <p className="text-sm text-muted-foreground">{t("history.emptyDescription")}</p>
          </div>
          <Button render={<Link href="/quiz" />} nativeButton={false}>
            {t("history.takeAssessment")}
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {inviteCard}

      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {t("history.savedCount", { count: merged.length, s: merged.length === 1 ? "" : "s" })}
        </p>
        <Button variant="ghost" size="sm" onClick={handleClearAll}>
          <Trash2 className="size-3.5" />
          {t("history.clearMine")}
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {merged.map((entry) => {
          const profile = getProfile(entry.code as PersonalityCode, locale);
          const query = encodeScoresToQuery(entry.scores);
          return (
            <div key={entry.key} className="group relative flex gap-4 rounded-2xl border border-border/60 bg-card p-4">
              {entry.removable && (
                <button
                  type="button"
                  onClick={() => handleRemove(entry.completedAt)}
                  aria-label="Remove from history"
                  className="absolute right-2 top-2 flex size-6 items-center justify-center rounded-full bg-background/80 text-muted-foreground opacity-0 transition-opacity hover:text-foreground group-hover:opacity-100"
                >
                  <X className="size-3.5" />
                </button>
              )}
              <Link href={`/results/${profile.code}?${query.toString()}`} className="shrink-0">
                <PersonalityIllustration profile={profile} className="size-20 rounded-xl" compact />
              </Link>
              <div className="flex min-w-0 flex-col justify-center gap-1.5">
                <div className="flex flex-wrap items-center gap-1.5">
                  <Badge variant="outline" className="w-fit font-mono text-[10px]">
                    {profile.code}
                  </Badge>
                  <Badge variant="secondary" className="w-fit text-[10px] font-normal">
                    {entry.name}
                  </Badge>
                </div>
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
    </div>
  );
}
