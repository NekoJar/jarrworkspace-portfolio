export type Locale = "en" | "ja";

export const supportedLocales: Locale[] = ["en", "ja"];

export const defaultLocale: Locale = "en";

export function getLocale(): Locale {
  if (typeof window === "undefined") {
    return defaultLocale;
  }
  const stored = localStorage.getItem("locale");
  if (stored === "en" || stored === "ja") {
    return stored;
  }
  const matched = navigator.language.split("-")[0] as Locale;
  return supportedLocales.includes(matched) ? matched : defaultLocale;
}

export function getSortedLocales(locale: Locale) {
  return [locale, locale === "en" ? "ja" : "en"];
}
