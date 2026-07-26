"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut, ShieldCheck, Database, AlertTriangle, BadgeCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { PersonalityIllustration } from "@/components/results/personality-illustration";
import { getProfile } from "@/lib/data/profiles";
import { encodeScoresToQuery } from "@/lib/scoring";
import type { PersonalityCode } from "@/lib/types";
import type { GlobalResultEntry } from "@/lib/server/admin-log-store";
import type { getKvStatus } from "@/lib/server/kv-client";

function formatDate(timestamp: number): string {
  return new Date(timestamp).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

interface AdminDashboardProps {
  results: GlobalResultEntry[];
  kvStatus: ReturnType<typeof getKvStatus>;
}

export function AdminDashboard({ results, kvStatus }: AdminDashboardProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/");
    router.refresh();
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return results;
    return results.filter((r) => r.name.toLowerCase().includes(q) || r.code.toLowerCase().includes(q));
  }, [results, query]);

  const verifiedCount = results.filter((r) => r.verified).length;

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="flex items-center gap-2 font-heading text-3xl font-semibold tracking-tight">
            <ShieldCheck className="size-7 text-brand" />
            Admin — All Results
          </h1>
          <p className="text-muted-foreground">Every completed assessment across all visitors, most recent first.</p>
        </div>
        <Button variant="outline" onClick={handleLogout}>
          <LogOut className="size-4" />
          Log Out
        </Button>
      </div>

      {kvStatus.connected ? (
        <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm text-emerald-600 dark:text-emerald-400">
          <Database className="size-4 shrink-0" />
          Storage: connected to Redis ({kvStatus.source === "KV_REST_API" ? "Vercel KV" : "Upstash"}) — results persist across deploys.
        </div>
      ) : (
        <div className="flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 px-4 py-2.5 text-sm text-amber-600 dark:text-amber-400">
          <AlertTriangle className="size-4 shrink-0" />
          Storage: no KV database connected — using the local file fallback, which does not persist on Vercel&rsquo;s
          serverless filesystem. Connect a database from the project&rsquo;s Storage tab, then redeploy.
        </div>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          {results.length} total completed assessment{results.length === 1 ? "" : "s"} · {verifiedCount} from logged-in
          accounts
        </p>
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by username or code…" className="pl-9" />
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border py-16 text-center text-muted-foreground">
          {results.length === 0 ? "No results logged yet." : "No results match your search."}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((entry, i) => {
            const profile = getProfile(entry.code as PersonalityCode);
            const query = encodeScoresToQuery(entry.scores);
            return (
              <div
                key={`${entry.ownerId}-${entry.completedAt}-${i}`}
                className="flex gap-4 rounded-2xl border border-border/60 bg-card p-4"
              >
                <Link href={`/results/${profile.code}?${query.toString()}`} className="shrink-0">
                  <PersonalityIllustration profile={profile} className="size-20 rounded-xl" compact />
                </Link>
                <div className="flex min-w-0 flex-col justify-center gap-1.5">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <Badge variant="outline" className="w-fit font-mono text-[10px]">
                      {profile.code}
                    </Badge>
                    <Badge
                      variant={entry.verified ? "default" : "secondary"}
                      className={entry.verified ? "w-fit gap-1 bg-gradient-brand text-[10px] font-normal text-white" : "w-fit text-[10px] font-normal"}
                    >
                      {entry.verified && <BadgeCheck className="size-3" />}
                      {entry.name}
                    </Badge>
                  </div>
                  <Link href={`/results/${profile.code}?${query.toString()}`} className="truncate font-medium hover:text-brand">
                    {profile.title}
                  </Link>
                  {!entry.verified && (
                    <span className="truncate text-xs text-muted-foreground" title={entry.ownerId}>
                      anon id: {entry.ownerId.slice(0, 8)}
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">{formatDate(entry.completedAt)}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
