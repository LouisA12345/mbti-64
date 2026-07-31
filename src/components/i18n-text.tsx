"use client";

import { useT } from "@/lib/i18n/use-translations";
import type { DictKey } from "@/lib/i18n/dictionary";

/** Renders a translated string inside a Server Component page without converting the whole page to a Client Component. */
export function I18nText({ k, vars }: { k: DictKey; vars?: Record<string, string | number> }) {
  const t = useT();
  return <>{t(k, vars)}</>;
}
