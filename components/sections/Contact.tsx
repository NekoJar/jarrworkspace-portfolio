"use client";


import Link from "next/link";
import { siteCopy } from "@/lib/site";
import { useLocale } from "@/components/layout/LocaleProvider";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="bg-white px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <header className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t("contactSection.title")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t("contactSection.title")}
          </h2>
        </header>
        <p className="mt-4 leading-relaxed text-neutral-600 sm:text-lg">{t("contactSection.intro")}</p>

        <div className="mt-8 flex flex-col justify-center gap-6 sm:flex-row sm:items-center">
          <Link
            href="mailto:jarrworkspace@gmail.com"
            className="text-center text-sm font-medium text-black transition hover:underline"
          >
            {t("contactSection.email")}
          </Link>
          <div className="flex gap-6">
            <Link
              href="https://linkedin.com/in/mzharfanhakim"
              target="_blank"
              className="text-sm font-medium text-neutral-600 transition hover:text-black"
            >
              LinkedIn
            </Link>
            <Link
              href="https://github.com/NekoJar"
              target="_blank"
              className="text-sm font-medium text-neutral-600 transition hover:text-black"
            >
              GitHub
            </Link>
            <Link
              href="/resume.pdf"
              target="_blank"
              className="text-sm font-medium text-neutral-600 transition hover:text-black"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
