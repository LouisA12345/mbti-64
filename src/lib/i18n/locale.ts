export type Locale = "en" | "my";

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "mbti64-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "my";
}
