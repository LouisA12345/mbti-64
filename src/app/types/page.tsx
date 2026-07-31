import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { TypeGrid } from "@/components/types/type-grid";
import { I18nText } from "@/components/i18n-text";

export const metadata: Metadata = {
  title: "All 64 Personality Types | MBTI-64",
  description: "Browse all 64 MBTI-64 personality archetypes — 16 MBTI types, each shaped by an Open/Anchored mindset and a Competitive/Harmonious lifestyle.",
};

export default function TypesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-3">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            <I18nText k="types.heading" />
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            <I18nText k="types.description" />
          </p>
        </div>
        <TypeGrid />
      </main>
    </div>
  );
}
