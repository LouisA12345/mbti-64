"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PersonalityIllustration } from "@/components/results/personality-illustration";
import { cn } from "@/lib/utils";
import type { MindsetType, LifestyleType, PersonalityProfile } from "@/lib/types";

interface TypeGridProps {
  profiles: PersonalityProfile[];
}

type MindsetFilter = MindsetType | "ALL";
type LifestyleFilter = LifestyleType | "ALL";

export function TypeGrid({ profiles }: TypeGridProps) {
  const [query, setQuery] = useState("");
  const [mindset, setMindset] = useState<MindsetFilter>("ALL");
  const [lifestyle, setLifestyle] = useState<LifestyleFilter>("ALL");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return profiles.filter((p) => {
      if (mindset !== "ALL" && p.mindset !== mindset) return false;
      if (lifestyle !== "ALL" && p.lifestyle !== lifestyle) return false;
      if (!q) return true;
      return (
        p.code.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        p.mbti.toLowerCase().includes(q)
      );
    });
  }, [profiles, query, mindset, lifestyle]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by code or title…"
            className="pl-9"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <FilterChip label="All Mindsets" active={mindset === "ALL"} onClick={() => setMindset("ALL")} />
          <FilterChip label="Open" active={mindset === "O"} onClick={() => setMindset("O")} />
          <FilterChip label="Anchored" active={mindset === "A"} onClick={() => setMindset("A")} />
          <span className="mx-1 hidden text-border sm:inline">|</span>
          <FilterChip label="All Lifestyles" active={lifestyle === "ALL"} onClick={() => setLifestyle("ALL")} />
          <FilterChip label="Competitive" active={lifestyle === "C"} onClick={() => setLifestyle("C")} />
          <FilterChip label="Harmonious" active={lifestyle === "H"} onClick={() => setLifestyle("H")} />
        </div>
      </div>

      <p className="text-sm text-muted-foreground">
        Showing {filtered.length} of {profiles.length} personalities
      </p>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((profile) => (
          <Link
            key={profile.code}
            href={`/results/${profile.code}`}
            className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-3 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
          >
            <PersonalityIllustration profile={profile} className="rounded-xl" />
            <div className="flex flex-col gap-1 px-1 pb-1">
              <Badge variant="outline" className="w-fit font-mono text-[10px]">
                {profile.code}
              </Badge>
              <span className="text-sm font-medium leading-snug text-foreground group-hover:text-brand">
                {profile.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function FilterChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active ? "border-brand bg-brand text-white" : "border-border text-muted-foreground hover:border-brand/50 hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
