"use client";


import { useLocale } from "@/components/layout/LocaleProvider";

export function About() {
  const { t } = useLocale();

  return (
    <section
      id="about"
      className="bg-[#f5f5f5] dark:bg-neutral-950 px-5 py-20 sm:px-8 sm:py-28"
      style={{ scrollMarginTop: 120 }}
    >
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            {t("aboutSection.title")}
          </h2>
        </header>
        <p className="mt-8 leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">
          {t("aboutSection.body")}
        </p>
      </div>
    </section>
  );
}
