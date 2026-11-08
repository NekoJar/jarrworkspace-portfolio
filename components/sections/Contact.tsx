"use client";


import Link from "next/link";
import { useLocale } from "@/components/layout/LocaleProvider";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="bg-white dark:bg-neutral-900 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            {t("contactSection.title")}
          </h2>
        </header>
        <p className="mt-4 leading-relaxed text-neutral-600 dark:text-neutral-400 sm:text-lg">{t("contactSection.intro")}</p>

        <div className="mt-8 flex flex-col justify-center gap-6 sm:flex-row sm:items-center">
          <Link
            href="mailto:jarrworkspace@gmail.com"
            className="text-center text-sm font-medium text-black dark:text-white transition hover:underline"
          >
            {t("contactSection.email")}
          </Link>
          <div className="flex gap-6">
            <Link
              href="https://linkedin.com/in/mzharfanhakim"
              target="_blank"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 transition hover:text-black dark:hover:text-white"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/NekoJar"
              target="_blank"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 transition hover:text-black dark:hover:text-white"
            >
              GitHub
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-sm font-medium text-neutral-600 dark:text-neutral-400 transition hover:text-black dark:hover:text-white"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
