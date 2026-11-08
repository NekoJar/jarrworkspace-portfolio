"use client";

import Link from "next/link";
import { projects } from "@/lib/projects";
import { useLocale } from "@/components/layout/LocaleProvider";

const featured = projects.find((project) => project.featured) ?? projects[0];

export function Hero() {
  const { t, locale } = useLocale();
  const result = featured.results?.[0];

  return (
    <section id="home" className="px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">{t("hero.title")}</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl md:text-6xl">
            {t("hero.name")}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-xl">
            {t("hero.summary")}
          </p>
          <p className="mt-6 font-mono text-xs text-neutral-500 dark:text-neutral-400">{t("hero.based")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#work"
              className="rounded-md bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
            >
              {t("hero.cta")}
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="rounded-md border border-black/10 dark:border-white/10 px-6 py-3 text-sm font-medium text-neutral-700 dark:text-neutral-300 transition hover:bg-black/5 dark:hover:bg-white/5"
            >
              {t("hero.ctaAlt")}
            </Link>
          </div>
          <p className="mt-10 font-mono text-xs tracking-tight text-neutral-400 dark:text-neutral-500">{t("hero.social")}</p>
        </div>

        <div className="lg:col-span-5">
          <Link
            href={`/work/${featured.slug}`}
            className="group block rounded-2xl bg-white dark:bg-neutral-900 p-6 shadow-sm ring-1 ring-black/5 dark:ring-white/10 transition hover:shadow-md hover:ring-black/15 dark:hover:ring-white/20 sm:p-7"
          >
            <div className="flex items-baseline justify-between gap-3">
              <p className="eyebrow">{t("hero.featured")}</p>
              <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">01</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
              {featured.title[locale]}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{featured.summary[locale]}</p>

            {result && (
              <div className="mt-6 border-t border-black/5 dark:border-white/10 pt-4">
                <p className="font-mono text-2xl tracking-tight text-neutral-900 dark:text-neutral-100">{result.metric}</p>
                <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{result.description[locale]}</p>
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-1.5">
              {featured.technologies.slice(0, 4).map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <span className="mt-6 flex items-center justify-between text-sm font-medium text-neutral-500 dark:text-neutral-400 transition group-hover:text-black dark:group-hover:text-white">
              {t("workSection.viewCaseStudy")}
              <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600 transition group-hover:text-black dark:group-hover:text-white">
                &rarr;
              </span>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
