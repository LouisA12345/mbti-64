"use client";

import { motion } from "framer-motion";
import { AXES, AXIS_LABELS, type DimensionScores } from "@/lib/types";

interface DimensionBarsProps {
  scores: DimensionScores;
  primaryColor?: string;
}

export function DimensionBars({ scores, primaryColor = "var(--brand)" }: DimensionBarsProps) {
  return (
    <div className="flex flex-col gap-5">
      {AXES.map((axis, i) => {
        const label = AXIS_LABELS[axis];
        const value = scores[axis];
        return (
          <div key={axis}>
            <div className="mb-1.5 flex items-center justify-between text-sm">
              <span className={value >= 50 ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {label.positive}
              </span>
              <span className="font-mono text-xs text-muted-foreground">
                {value}% / {100 - value}%
              </span>
              <span className={value < 50 ? "font-semibold text-foreground" : "text-muted-foreground"}>
                {label.negative}
              </span>
            </div>
            <div className="relative h-3 w-full overflow-hidden rounded-full bg-muted">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ backgroundColor: primaryColor }}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.9, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
