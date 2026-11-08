"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";

export function ResumeZip({ native_btn = false }: { native_btn?: boolean }) {
  const { t, locale } = useLocale();

  const href = "/resume/Zharfan_Hakim_履歴書.zip";

  if (native_btn) {
    return (
      <Link
        href={href}
        target="_blank"
        className="rounded-md border border-black/10 dark:border-white/10 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition hover:bg-black/5 dark:hover:bg-white/5"
      >
        {t("hero.ctaAlt")}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="text-sm font-medium text-neutral-600 dark:text-neutral-400 transition hover:text-black dark:hover:text-white"
    >
      {t("nav.resume")}
    </Link>
  );
}
