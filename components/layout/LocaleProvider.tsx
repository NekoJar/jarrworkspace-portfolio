"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { type Locale } from "../../lib/i18n";
import { siteCopy, type SiteCopyKey } from "../../lib/site";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: SiteCopyKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: Locale;
}) {
  const [currentLocale, setLocaleState] = useState<Locale>(locale);
  const syncedFromStorage = useRef(false);

  const setLocale = useCallback((next: Locale) => {
    try {
      localStorage.setItem("locale", next);
    } catch {
      // Storage can be unavailable; the cookie below still carries the choice.
    }
    document.cookie = `locale=${next}; path=/; max-age=31536000; samesite=lax`;
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: SiteCopyKey): string => {
      const keys = key.split(".");
      let value: unknown = siteCopy;
      for (const k of keys) {
        if (value && typeof value === "object" && k in value) {
          value = (value as Record<string, unknown>)[k];
        } else {
          value = undefined;
          break;
        }
      }
      if (value && typeof value === "object" && !Array.isArray(value)) {
        const localized = value as Record<string, string>;
        return localized[currentLocale] ?? localized["en"] ?? key;
      }
      return typeof value === "string" ? value : key;
    },
    [currentLocale]
  );

  // A choice made before the cookie existed only lives in localStorage. Adopt
  // it once on mount so earlier visitors aren't pinned to the default locale.
  useEffect(() => {
    if (syncedFromStorage.current) return;
    syncedFromStorage.current = true;

    let stored: string | null = null;
    try {
      stored = localStorage.getItem("locale");
    } catch {
      return;
    }

    if ((stored === "en" || stored === "ja") && stored !== currentLocale) {
      setLocale(stored);
    }
  }, [currentLocale, setLocale]);

  useEffect(() => {
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);

  return (
    <LocaleContext.Provider value={{ locale: currentLocale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
