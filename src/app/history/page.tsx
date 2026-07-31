import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { HistoryList } from "@/components/history/history-list";
import { I18nText } from "@/components/i18n-text";

export const metadata: Metadata = {
  title: "Your Result History | MBTI-64",
  description: "Every MBTI-64 assessment you've completed on this device.",
};

export default function HistoryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-8 px-4 py-10 sm:px-6 sm:py-14">
        <div className="flex flex-col gap-3">
          <h1 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">
            <I18nText k="history.heading" />
          </h1>
          <p className="max-w-2xl text-muted-foreground">
            <I18nText k="history.description" />
          </p>
        </div>
        <HistoryList />
      </main>
    </div>
  );
}
