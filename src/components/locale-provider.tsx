"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, isLocale, type Locale } from "@/lib/i18n/locale";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  // localStorage is unavailable during SSR, so the first render must match the server (the
  // default locale) on both sides, then hydrate the real preference post-mount — same pattern
  // used for history/auth client-only reads elsewhere in this app.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (isLocale(stored)) setLocaleState(stored);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  // Keeps <html lang> in sync so :lang(my) CSS (Myanmar-specific letter-spacing/line-height
  // fixes in globals.css) actually matches the rendered text.
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
  }

  return <LocaleContext.Provider value={{ locale, setLocale }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within a LocaleProvider");
  return ctx;
}
