"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { type Locale } from "../../lib/i18n";
import { siteCopy } from "../../lib/site";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
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

  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem("locale", next);
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: string): string => {
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



