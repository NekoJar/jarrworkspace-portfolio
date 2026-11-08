"use client";

import Link from "next/link";
import { siteCopy } from "../../lib/site";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 bg-[#f5f5f5] dark:bg-neutral-950">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-semibold text-lg">{t("footer.name")}</p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{t("footer.title")}</p>
          </div>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">{t("footer.links")}</p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
