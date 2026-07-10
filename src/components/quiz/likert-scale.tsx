"use client";

import { LIKERT_LABELS, type LikertValue } from "@/lib/types";
import { cn } from "@/lib/utils";

const VALUES: LikertValue[] = [1, 2, 3, 4, 5];

interface LikertScaleProps {
  value: LikertValue | undefined;
  onChange: (value: LikertValue) => void;
}

export function LikertScale({ value, onChange }: LikertScaleProps) {
  return (
    <div role="radiogroup" aria-label="Response scale" className="grid grid-cols-5 gap-2 sm:gap-3">
      {VALUES.map((v) => {
        const selected = value === v;
        return (
          <button
            key={v}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(v)}
            className={cn(
              "group flex flex-col items-center gap-2.5 rounded-2xl border p-3 text-center transition-all sm:p-4",
              "hover:border-brand/60 hover:bg-brand/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand",
              selected ? "border-brand bg-brand/10 shadow-sm" : "border-border bg-card",
            )}
          >
            <span
              className={cn(
                "flex size-7 items-center justify-center rounded-full border-2 text-xs font-semibold transition-colors sm:size-8",
                selected ? "border-brand bg-brand text-white" : "border-muted-foreground/30 text-muted-foreground group-hover:border-brand/60",
              )}
            >
              {v}
            </span>
            <span className={cn("text-[11px] leading-tight sm:text-xs", selected ? "font-medium text-foreground" : "text-muted-foreground")}>
              {LIKERT_LABELS[v]}
            </span>
          </button>
        );
      })}
    </div>
  );
}
