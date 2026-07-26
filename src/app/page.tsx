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
import type { PersonalityCode } from "@/lib/types";

const PREVIEW_CODES: PersonalityCode[] = [
  "INFP-O-C", "ENTJ-A-C", "ISFJ-A-H", "ENFP-O-H",
  "INTJ-A-C", "ESFP-O-C", "ISTP-A-H", "ENFJ-O-H",
];

const STATS = [
  { label: "Personality Types", value: "64" },
  { label: "Assessment Questions", value: "72" },
  { label: "Scored Dimensions", value: "6" },
  { label: "Avg. Completion", value: "~7 min" },
];

export default function Home() {
  const previews = PREVIEW_CODES.map(getProfile);

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
              Not your standard 16-type test
            </Badge>
            <h1 className="text-balance font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              Discover your full <span className="text-gradient-brand">personality code</span>
            </h1>
            <p className="max-w-2xl text-pretty text-lg text-muted-foreground">
              MBTI-64 combines your core personality type with how you engage with change and how you pursue your
              goals — <span className="font-medium text-foreground">16 MBTI types × 2 Mindsets × 2 Lifestyles</span> —
              for 64 distinct, richly-drawn personalities.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="bg-gradient-brand text-white hover:opacity-90" nativeButton={false} render={<Link href="/quiz" />}>
                Start the Assessment
                <ArrowRight className="size-4" />
              </Button>
              <Button size="lg" variant="outline" nativeButton={false} render={<Link href="/types" />}>
                Browse All 64 Types
              </Button>
            </div>
            <div className="mt-6 grid w-full max-w-2xl grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="flex flex-col gap-1">
                  <span className="font-heading text-2xl font-semibold sm:text-3xl">{s.value}</span>
                  <span className="text-xs text-muted-foreground sm:text-sm">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The formula */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">The Formula</h2>
            <p className="max-w-xl text-muted-foreground">
              Three independent dimensions combine into a single, unmistakably specific personality code.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <FormulaCard
              icon={Compass}
              eyebrow="16 Types"
              title="MBTI"
              description="Your core cognitive wiring across four classic axes."
              rows={[
                ["E", "Extraversion", "I", "Introversion"],
                ["S", "Sensing", "N", "Intuition"],
                ["T", "Thinking", "F", "Feeling"],
                ["J", "Judging", "P", "Perceiving"],
              ]}
            />
            <FormulaCard
              icon={Wind}
              eyebrow="2 Types"
              title="Mindset"
              description="How you relate to novelty, change, and the unknown."
              pairs={[
                { icon: Sparkles, letter: "O", name: "Open", traits: "Curious · Explorative · Adaptable" },
                { icon: Anchor, letter: "A", name: "Anchored", traits: "Stable · Structured · Consistent" },
              ]}
            />
            <FormulaCard
              icon={Flame}
              eyebrow="2 Types"
              title="Lifestyle"
              description="How you pursue goals and relate to the people around you."
              pairs={[
                { icon: Trophy, letter: "C", name: "Competitive", traits: "Ambitious · Driven · Bold" },
                { icon: HeartHandshake, letter: "H", name: "Harmonious", traits: "Balanced · Supportive · Calm" },
              ]}
            />
          </div>
        </section>

        {/* How it works */}
        <section className="border-y border-border/60 bg-muted/30">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="mb-12 flex flex-col items-center gap-3 text-center">
              <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">How It Works</h2>
              <p className="max-w-xl text-muted-foreground">Three steps between you and your full personality code.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              <Step
                icon={ListChecks}
                step="01"
                title="Answer honestly"
                description="72 quick 5-point questions, shuffled every session, covering MBTI, Mindset, and Lifestyle."
              />
              <Step
                icon={ScanEye}
                step="02"
                title="We score six dimensions"
                description="Each axis is scored independently, then combined into your final three-part code."
              />
              <Step
                icon={Sparkles}
                step="03"
                title="Get your full profile"
                description="A rich, shareable breakdown of your strengths, career fit, relationships, and more."
              />
            </div>
          </div>
        </section>

        {/* Preview grid */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <div className="mb-10 flex flex-col items-center gap-3 text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">A Glimpse of the 64</h2>
            <p className="max-w-xl text-muted-foreground">Every type gets its own name, palette, and full profile.</p>
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
              See All 64 Types
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-4xl px-4 pb-24 sm:px-6">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gradient-brand p-10 text-center text-white sm:p-16">
            <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl">Ready to find your personality type?</h2>
            <p className="max-w-xl text-white/85">About seven minutes. No sign-up. Your progress autosaves as you go.</p>
            <Button size="lg" variant="secondary" className="text-foreground" nativeButton={false} render={<Link href="/quiz" />}>
              Start the Assessment
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </section>
      </main>
      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 text-center text-sm text-muted-foreground sm:px-6">
          <span>MBTI-64 is an original 64-type personality framework, built by Louis as a personal hobby project.</span>
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
