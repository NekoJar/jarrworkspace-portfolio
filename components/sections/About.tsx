"use client";


import { siteCopy } from "@/lib/site";
import { useLocale } from "@/components/layout/LocaleProvider";

export function About() {
  const { t } = useLocale();

  return (
    <section
      id="about"
      className="bg-[#f5f5f5] px-5 py-20 sm:px-8 sm:py-28"
      style={{ scrollMarginTop: 120 }}
    >
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t("aboutSection.title")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t("aboutSection.title")}
          </h2>
        </header>
        <p className="mt-8 leading-relaxed text-neutral-600 sm:text-lg">
          {t("aboutSection.body")}
        </p>
      </div>
    </section>
  );
}
