"use client";

import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="home" className="flex min-h-screen flex-col justify-between px-5 py-24 sm:px-8 sm:py-32">
      <div>
        <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
          {t("hero.title")}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl">
          {t("hero.name")}
        </h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-neutral-600 sm:text-xl">
          {t("hero.summary")}
        </p>
        <p className="mt-6 text-sm text-neutral-500">{t("hero.based")}</p>
        <div className="mt-8 flex gap-4">
          <Link
            href="#work"
            className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            {t("hero.cta")}
          </Link>
          <Link
            href="#contact"
            className="rounded-md border border-black/10 px-6 py-3 text-sm font-medium text-neutral-700 transition hover:bg-black/5"
          >
            {t("hero.ctaAlt")}
          </Link>
        </div>
      </div>
      <div className="flex gap-4 text-sm text-neutral-500">
        <span>{t("hero.social")}</span>
      </div>
    </section>
  );
}
