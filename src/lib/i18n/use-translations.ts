"use client";

import { useLocale } from "@/components/locale-provider";
import { translate, type DictKey } from "./dictionary";

export function useT() {
  const { locale } = useLocale();
  return (key: DictKey, vars?: Record<string, string | number>) => translate(key, locale, vars);
}
