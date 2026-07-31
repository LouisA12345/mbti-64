"use client";

import { useState } from "react";
import { Users, Check, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useT } from "@/lib/i18n/use-translations";
import type { DimensionScores, PersonalityCode } from "@/lib/types";

interface SharedHistoryPromptProps {
  ownerId: string;
  code: PersonalityCode;
  scores: DimensionScores;
}

export function SharedHistoryPrompt({ ownerId, code, scores }: SharedHistoryPromptProps) {
  const t = useT();
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/shared-results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerId, name: name.trim(), code, scores }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <Card className="border-brand/30 bg-brand/5">
        <CardContent className="flex items-center gap-3 p-4 text-sm">
          <Check className="size-4 shrink-0 text-brand" />
          <span>
            {t("results.addedToHistory1")} <span className="font-medium text-foreground">{name.trim()}</span>{" "}
            {t("results.addedToHistory2")}
          </span>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-brand/30 bg-brand/5">
      <CardContent className="flex flex-col gap-3 p-4">
        <p className="flex items-center gap-2 text-sm">
          <Users className="size-4 shrink-0 text-brand" />
          {t("results.sharedPromptQuestion")}
        </p>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("results.yourNamePlaceholder")}
            maxLength={40}
            className="max-w-[200px]"
            disabled={status === "submitting"}
          />
          <Button type="submit" size="sm" disabled={!name.trim() || status === "submitting"}>
            {status === "submitting" ? <Loader2 className="size-4 animate-spin" /> : null}
            {t("results.addToHistory")}
          </Button>
        </form>
        {status === "error" && <p className="text-sm text-destructive">{t("results.sharedPromptError")}</p>}
      </CardContent>
    </Card>
  );
}
