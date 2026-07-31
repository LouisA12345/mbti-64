"use client";

import { Gem } from "lucide-react";
import { useT } from "@/lib/i18n/use-translations";
import { RARITY_LABEL_KEYS, AXIS_LABEL_KEYS } from "@/lib/i18n/dictionary";
import { buildProfileSections } from "@/lib/profile-sections-data";
import { AXES, type DimensionScores, type PersonalityProfile } from "@/lib/types";

interface PrintableResultProps {
  id: string;
  profile: PersonalityProfile;
  scores: DimensionScores;
}

/**
 * Off-screen, fixed-width, always-expanded, light-background rendition of the full result —
 * captured by html2canvas for the PDF export. The on-page hero/accordion stay exactly as
 * designed for screen use; this exists purely so the exported PDF can include every section
 * (not just the hero card) with print-friendly contrast regardless of the site's active theme.
 */
export function PrintableResult({ id, profile, scores }: PrintableResultProps) {
  const t = useT();
  const sections = buildProfileSections(profile);
  const { primary, accent } = profile.colorPalette;

  return (
    <div
      id={id}
      style={{
        position: "fixed",
        top: 0,
        left: "-99999px",
        width: "820px",
        backgroundColor: "#ffffff",
        color: "#18181b",
        padding: "48px",
        fontFamily: "var(--font-sans), var(--font-myanmar), sans-serif",
      }}
    >
      {/* Masthead */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "28px" }}>
        <div
          style={{
            width: "32px",
            height: "32px",
            borderRadius: "10px",
            background: `linear-gradient(135deg, ${primary}, ${accent})`,
          }}
        />
        <span style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "18px", fontWeight: 600 }}>
          MBTI-64
        </span>
      </div>

      {/* Hero block */}
      <div style={{ marginBottom: "36px" }}>
        <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "12px" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "13px",
              fontWeight: 600,
              padding: "4px 10px",
              borderRadius: "999px",
              border: "1px solid #d4d4d8",
            }}
          >
            {profile.code}
          </span>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              fontSize: "13px",
              padding: "4px 10px",
              borderRadius: "999px",
              border: `1px solid ${primary}66`,
              color: primary,
            }}
          >
            <Gem size={12} />
            {t(RARITY_LABEL_KEYS[profile.rarity.label])}
          </span>
        </div>
        <h1 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "30px", fontWeight: 600, margin: "0 0 8px" }}>
          {profile.title}
        </h1>
        <p style={{ fontSize: "15px", color: "#52525b", margin: "0 0 14px", lineHeight: 1.6 }}>{profile.tagline}</p>
        <blockquote
          style={{
            margin: 0,
            padding: "2px 0 2px 16px",
            borderLeft: `3px solid ${primary}`,
            fontStyle: "italic",
            color: "#3f3f46",
            lineHeight: 1.6,
          }}
        >
          &ldquo;{profile.quote}&rdquo;
        </blockquote>
      </div>

      {/* Dimension scores */}
      <div style={{ marginBottom: "36px" }}>
        <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 16px" }}>
          {t("results.dimensionRadar")}
        </h2>
        {AXES.map((axis) => {
          const label = AXIS_LABEL_KEYS[axis];
          const value = scores[axis];
          return (
            <div key={axis} style={{ marginBottom: "12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "4px" }}>
                <span style={{ fontWeight: value >= 50 ? 600 : 400 }}>{t(label.positive)}</span>
                <span style={{ fontFamily: "monospace", color: "#71717a" }}>
                  {value}% / {100 - value}%
                </span>
                <span style={{ fontWeight: value < 50 ? 600 : 400 }}>{t(label.negative)}</span>
              </div>
              <div style={{ height: "8px", borderRadius: "999px", backgroundColor: "#e4e4e7", overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${value}%`, backgroundColor: primary }} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Full section breakdown */}
      <div>
        <h2 style={{ fontFamily: "var(--font-sora), sans-serif", fontSize: "17px", fontWeight: 600, margin: "0 0 16px" }}>
          {t("results.fullPicture")}
        </h2>
        {sections.map(({ id: sectionId, titleKey, content, variant = "badges" }) => (
          <div key={sectionId} style={{ marginBottom: "22px", pageBreakInside: "avoid" }}>
            <h3
              style={{
                fontFamily: "var(--font-sora), sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                margin: "0 0 8px",
                color: primary,
              }}
            >
              {t(titleKey)}
            </h3>
            {Array.isArray(content) ? (
              variant === "list" ? (
                <ul style={{ margin: 0, paddingLeft: "18px", color: "#3f3f46", lineHeight: 1.6, fontSize: "13px" }}>
                  {content.map((item) => (
                    <li key={item} style={{ marginBottom: "4px" }}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : (
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {content.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: "12px",
                        padding: "4px 10px",
                        borderRadius: "999px",
                        backgroundColor: "#f4f4f5",
                        color: "#3f3f46",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )
            ) : (
              <p style={{ margin: 0, color: "#3f3f46", lineHeight: 1.6, fontSize: "13px" }}>{content}</p>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "36px", paddingTop: "16px", borderTop: "1px solid #e4e4e7", fontSize: "11px", color: "#a1a1aa" }}>
        MBTI-64 — {profile.code}
      </div>
    </div>
  );
}
