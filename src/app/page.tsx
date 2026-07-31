"use client";

import Link from "next/link";
import {
  ArrowRight, Sparkles, Compass, Flame, Wind, Anchor, Trophy, HeartHandshake,
  ListChecks, ScanEye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { PersonalityIllustration } from "@/components/results/personality-illustration";
import { getProfile } from "@/lib/data/profiles";
import { useT } from "@/lib/i18n/use-translations";
import { useLocale } from "@/components/locale-provider";
import type { DictKey } from "@/lib/i18n/dictionary";
import type { PersonalityCode } from "@/lib/types";

const PREVIEW_CODES: PersonalityCode[] = [
  "INFP-O-C", "ENTJ-A-C", "ISFJ-A-H", "ENFP-O-H",
  "INTJ-A-C", "ESFP-O-C", "ISTP-A-H", "ENFJ-O-H",
];

const STATS: { labelKey: DictKey; value: string }[] = [
  { labelKey: "home.stat.types", value: "64" },
  { labelKey: "home.stat.questions", value: "72" },
  { labelKey: "home.stat.dimensions", value: "6" },
  { labelKey: "home.stat.completion", value: "~7 min" },
];

export default function Home() {
  const t = useT();
  const { locale } = useLocale();
  const previews = PREVIEW_CODES.map((code) => getProfile(code, locale));

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-grid-fade">
          <div
            className="pointer-events-none absolute inset-x-0 -top-40 h-96 opacity-30 blur-3xl"
            style={{ backgroundImage: "linear-gradient(135deg, var(--brand), var(--brand-accent))" }}
          />
          <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-20 text-center sm:px-6 sm:py-28">
            <Badge variant="outline" className="gap-1.5 border-brand/40 px-3 py-1 text-brand">
              <Sparkles className="size-3.5" />
              {t("home.badge")}
            </Badge>
            <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              {t("home.heroTitle1")} <span className="text-gradient-brand">{t("home.heroTitle2")}</span>
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-muted-foreground">{t("home.heroDescription")}</p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-gradient-brand text-white hover:opacity-90" nativeButton={false} render={<Link href="/quiz" />}>
                {t("home.startAssessment")}
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/types" />}>
                {t("home.browseTypes")}
              </Button>
            </div>
            <div className="mt-6 grid w-full max-w-2xl grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.labelKey} className="flex flex-col gap-1">
                  <span className="font-heading text-2xl font-semibold sm:text-3xl">{s.value}</span>
                  <span className="text-xs text-muted-foreground sm:text-sm">{t(s.labelKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The formula */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{t("home.formula.heading")}</h2>
            <p className="max-w-xl text-muted-foreground">{t("home.formula.description")}</p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <FormulaCard
              icon={Compass}
              eyebrow={t("home.formula.mbti.eyebrow")}
              title={t("home.formula.mbti.title")}
              description={t("home.formula.mbti.description")}
              rows={[
                ["E", t("home.axis.E"), "I", t("home.axis.I")],
                ["S", t("home.axis.S"), "N", t("home.axis.N")],
                ["T", t("home.axis.T"), "F", t("home.axis.F")],
                ["J", t("home.axis.J"), "P", t("home.axis.P")],
              ]}
            />
            <FormulaCard
              icon={Wind}
              eyebrow={t("home.formula.mindset.eyebrow")}
              title={t("home.formula.mindset.title")}
              description={t("home.formula.mindset.description")}
              pairs={[
                { icon: Sparkles, letter: "O", name: t("home.mindset.open.name"), traits: t("home.mindset.open.traits") },
                { icon: Anchor, letter: "A", name: t("home.mindset.anchored.name"), traits: t("home.mindset.anchored.traits") },
              ]}
            />
            <FormulaCard
              icon={Flame}
              eyebrow={t("home.formula.lifestyle.eyebrow")}
              title={t("home.formula.lifestyle.title")}
              description={t("home.formula.lifestyle.description")}
              pairs={[
                { icon: Trophy, letter: "C", name: t("home.lifestyle.competitive.name"), traits: t("home.lifestyle.competitive.traits") },
                { icon: HeartHandshake, letter: "H", name: t("home.lifestyle.harmonious.name"), traits: t("home.lifestyle.harmonious.traits") },
              ]}
            />
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-border/60 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="mb-12 flex flex-col items-center gap-3 text-center">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{t("home.howItWorks.heading")}</h2>
              <p className="max-w-xl text-muted-foreground">{t("home.howItWorks.description")}</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <Step icon={ListChecks} step="01" title={t("home.step1.title")} description={t("home.step1.description")} />
              <Step icon={ScanEye} step="02" title={t("home.step2.title")} description={t("home.step2.description")} />
              <Step icon={Sparkles} step="03" title={t("home.step3.title")} description={t("home.step3.description")} />
            </div>
          </div>
        </section>

        {/* Preview grid */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{t("home.preview.heading")}</h2>
            <p className="max-w-xl text-muted-foreground">{t("home.preview.description")}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {previews.map((profile) => (
              <Link
                key={profile.code}
                href={`/results/${profile.code}`}
                className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-3 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-lg"
              >
                <PersonalityIllustration profile={profile} className="rounded-xl" compact />
                <div className="flex flex-col gap-1 px-1 pb-1">
                  <Badge variant="outline" className="w-fit font-mono text-[10px]">
                    {profile.code}
                  </Badge>
                  <span className="text-sm font-medium leading-snug group-hover:text-brand">{profile.title}</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button variant="outline" nativeButton={false} render={<Link href="/types" />}>
              {t("home.seeAll")}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-brand p-10 text-center text-white sm:p-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">{t("home.cta.heading")}</h2>
            <p className="max-w-xl text-white/85">{t("home.cta.description")}</p>
            <Button size="lg" variant="secondary" className="text-foreground" nativeButton={false} render={<Link href="/quiz" />}>
              {t("home.startAssessment")}
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground sm:px-6">
          <span>{t("footer.credit")}</span>
        </div>
      </footer>
    </div>
  );
}

function FormulaCard({
  icon: Icon,
  eyebrow,
  title,
  description,
  rows,
  pairs,
}: {
  icon: React.ElementType;
  eyebrow: string;
  title: string;
  description: string;
  rows?: [string, string, string, string][];
  pairs?: { icon: React.ElementType; letter: string; name: string; traits: string }[];
}) {
  return (
    <Card className="border-border/60">
      <CardContent className="flex flex-col gap-4 p-6">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
            <Icon className="size-5" />
          </span>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{eyebrow}</p>
            <h3 className="font-heading text-lg font-semibold">{title}</h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
        {rows && (
          <div className="grid grid-cols-2 gap-2 text-sm">
            {rows.map(([l1, n1, l2, n2]) => (
              <div key={l1 + l2} className="col-span-2 grid grid-cols-2 gap-2">
                <div className="rounded-lg bg-muted px-3 py-2">
                  <span className="font-mono font-semibold">{l1}</span> <span className="text-muted-foreground">{n1}</span>
                </div>
                <div className="rounded-lg bg-muted px-3 py-2">
                  <span className="font-mono font-semibold">{l2}</span> <span className="text-muted-foreground">{n2}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {pairs && (
          <div className="flex flex-col gap-2">
            {pairs.map((p) => (
              <div key={p.letter} className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2.5">
                <span className="flex size-8 items-center justify-center rounded-full bg-background text-brand">
                  <p.icon className="size-4" />
                </span>
                <div>
                  <p className="text-sm font-medium">
                    <span className="font-mono">{p.letter}</span> — {p.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{p.traits}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

function Step({ icon: Icon, step, title, description }: { icon: React.ElementType; step: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <span className="flex size-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg">
        <Icon className="size-6" />
      </span>
      <span className="font-mono text-xs text-muted-foreground">STEP {step}</span>
      <h3 className="font-heading text-lg font-semibold">{title}</h3>
      <p className="max-w-xs text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
