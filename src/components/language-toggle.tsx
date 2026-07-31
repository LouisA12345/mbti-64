"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/components/locale-provider";
import { useT } from "@/lib/i18n/use-translations";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  const t = useT();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t("nav.toggleLanguage")}
      title={t("nav.toggleLanguage")}
      onClick={() => setLocale(locale === "en" ? "my" : "en")}
    >
      <Languages className="size-5" />
    </Button>
  );
}
