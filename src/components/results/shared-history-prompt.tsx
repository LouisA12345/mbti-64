"use client";

import { useState } from "react";
import { Users, Check, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import type { DimensionScores, PersonalityCode } from "@/lib/types";

interface SharedHistoryPromptProps {
  ownerId: string;
  code: PersonalityCode;
  scores: DimensionScores;
}

export function SharedHistoryPrompt({ ownerId, code, scores }: SharedHistoryPromptProps) {
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
            Added! <span className="font-medium text-foreground">{name.trim()}</span> will see this result in their History.
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
          You got here through a friend&rsquo;s invite link. Add your result to their History?
        </p>
        <form onSubmit={handleSubmit} className="flex flex-wrap gap-2">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            maxLength={40}
            className="max-w-[200px]"
            disabled={status === "submitting"}
          />
          <Button type="submit" size="sm" disabled={!name.trim() || status === "submitting"}>
            {status === "submitting" ? <Loader2 className="size-4 animate-spin" /> : null}
            Add to Their History
          </Button>
        </form>
        {status === "error" && <p className="text-sm text-destructive">Something went wrong — please try again.</p>}
      </CardContent>
    </Card>
  );
}
