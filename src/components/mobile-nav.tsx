"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { AuthNav } from "@/components/auth/auth-nav";
import { useT } from "@/lib/i18n/use-translations";
import type { DictKey } from "@/lib/i18n/dictionary";

const LINKS: { href: string; labelKey: DictKey }[] = [
  { href: "/types", labelKey: "nav.types" },
  { href: "/quiz", labelKey: "nav.quiz" },
  { href: "/history", labelKey: "nav.history" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const t = useT();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="sm:hidden" />}>
        <Menu className="size-5" />
        <span className="sr-only">{t("nav.openMenu")}</span>
      </SheetTrigger>
      <SheetContent side="right" className="flex w-3/4 flex-col gap-0 p-0">
        <SheetHeader className="border-b border-border/60">
          <SheetTitle>{t("nav.menu")}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 p-4">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {t(link.labelKey)}
            </Link>
          ))}
          <div className="my-2 border-t border-border/60" />
          <AuthNav variant="mobile" onNavigate={() => setOpen(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
