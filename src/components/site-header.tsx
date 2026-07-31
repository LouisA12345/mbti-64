"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LanguageToggle } from "@/components/language-toggle";
import { AuthNav } from "@/components/auth/auth-nav";
import { MobileNav } from "@/components/mobile-nav";
import { useT } from "@/lib/i18n/use-translations";

export function SiteHeader() {
  const t = useT();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span className="flex size-8 items-center justify-center rounded-xl bg-gradient-brand text-white">
            <Sparkles className="size-4" />
          </span>
          MBTI<span className="text-gradient-brand">-64</span>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            href="/types"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {t("nav.types")}
          </Link>
          <Link
            href="/quiz"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {t("nav.quiz")}
          </Link>
          <Link
            href="/history"
            className="hidden rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
          >
            {t("nav.history")}
          </Link>
          <LanguageToggle />
          <ThemeToggle />
          <AuthNav />
          <MobileNav />
        </nav>
      </div>
    </header>
  );
}
