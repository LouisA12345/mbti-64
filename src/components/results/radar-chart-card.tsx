"use client";

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from "recharts";
import { AXES, AXIS_LABELS, type DimensionScores } from "@/lib/types";

interface RadarChartCardProps {
  scores: DimensionScores;
  color?: string;
}

export function RadarChartCard({ scores, color = "#8b5cf6" }: RadarChartCardProps) {
  const data = AXES.map((axis) => ({
    axis: AXIS_LABELS[axis].positive,
    value: scores[axis],
    fullMark: 100,
  }));

  return (
    <div className="h-72 w-full sm:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="75%">
          <PolarGrid stroke="var(--border)" />
          <PolarAngleAxis dataKey="axis" tick={{ fill: "var(--muted-foreground)", fontSize: 12 }} />
          <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="Score" dataKey="value" stroke={color} fill={color} fillOpacity={0.35} strokeWidth={2} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--popover)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-md)",
              color: "var(--popover-foreground)",
              fontSize: 13,
            }}
            formatter={(value) => [`${value}%`, "Score"]}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
