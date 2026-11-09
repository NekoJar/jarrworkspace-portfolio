"use client";

import { useLocale } from "@/components/layout/LocaleProvider";
import type { LocalizedText } from "@/lib/types";

interface CredentialEntry {
  date: string;
  name: LocalizedText;
  href: string;
}

const groups: { key: "linux" | "hackerrank" | "language"; entries: CredentialEntry[] }[] = [
  {
    key: "linux",
    entries: [
      {
        date: "2024 年 6 月",
        name: {
          en: "Red Hat System Administration II (RH134)",
          ja: "Red Hat System Administration II (RH134)",
        },
        href: "https://drive.google.com/file/d/16pYTZWAwNY0cvEB9N8-qARCBfV267uu2/view",
      },
      {
        date: "2024 年 9 月",
        name: {
          en: "Red Hat System Administration I (RH124)",
          ja: "Red Hat System Administration I (RH124)",
        },
        href: "https://drive.google.com/file/d/1GFswic_Sez7kb4HSZJR6h1UwzV19szQz/view",
      },
    ],
  },
  {
    key: "hackerrank",
    entries: [
      {
        date: "2024 年 3 月",
        name: {
          en: "React (Basic) Certificate",
          ja: "React (Basic) Certificate",
        },
        href: "https://www.hackerrank.com/certificates/83091ea20a7b",
      },
      {
        date: "2024 年 3 月",
        name: {
          en: "REST API (Intermediate) Certificate",
          ja: "REST API (Intermediate) Certificate",
        },
        href: "https://www.hackerrank.com/certificates/8841cb1338b8",
      },
      {
        date: "2024 年 3 月",
        name: {
          en: "JavaScript (Intermediate) Certificate",
          ja: "JavaScript (Intermediate) Certificate",
        },
        href: "https://www.hackerrank.com/certificates/67a2d95c7217",
      },
      {
        date: "2024 年 3 月",
        name: {
          en: "Node.js (Intermediate) Certificate",
          ja: "Node.js (Intermediate) Certificate",
        },
        href: "https://www.hackerrank.com/certificates/32505f8b1d8f",
      },
    ],
  },
  {
    key: "language",
    entries: [
      {
        date: "2026 年 1 月",
        name: {
          en: "TOEIC Listening & Reading Test 845",
          ja: "TOEIC Listening & Reading Test 845 点",
        },
        href: "https://drive.google.com/file/d/1J8bat3HMiwzXhsTMA4OcN5hJAvPu1Jdd/view",
      },
      {
        date: "2026 年 8 月",
        name: { en: "JLPT N4", ja: "JLPT N4" },
        href: "https://drive.google.com/drive/folders/1mDjOwmFiWRYVgJIjMfYdfbW9O_jKsmoB",
      },
    ],
  },
];

export function Credential() {
  const { t, locale } = useLocale();

  return (
    <section
      id="credentials"
      className="bg-[#f5f5f5] dark:bg-neutral-950 px-5 py-20 sm:px-8 sm:py-28"
      style={{ scrollMarginTop: 120 }}
    >
      <div className="mx-auto max-w-3xl">
        <div className="flex items-baseline justify-between gap-4">
          <p className="eyebrow">{t("credentialSection.title")}</p>
          <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
            04
          </span>
        </div>

        <div className="mt-8 space-y-8">
          {groups.map((group) => (
            <div key={group.key}>
              <h3 className="font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                {t(`credentialSection.groups.${group.key}`)}
              </h3>
              <ul className="mt-3 overflow-hidden rounded-2xl bg-white ring-1 ring-black/5 dark:bg-neutral-900 dark:ring-white/10">
                {group.entries.map((entry) => (
                  <li
                    key={entry.href}
                    className="border-t border-black/5 first:border-t-0 dark:border-white/10"
                  >
                    <div className="flex flex-col gap-1.5 px-6 py-4 sm:grid sm:grid-cols-[8rem_1fr_auto] sm:items-baseline sm:gap-4">
                      <span className="whitespace-nowrap font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                        {entry.date}
                      </span>
                      <span className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {entry.name[locale]}
                      </span>
                      <a
                        href={entry.href}
                        target="_blank"
                        rel="noreferrer"
                        className="whitespace-nowrap font-mono text-[11px] text-neutral-400 underline underline-offset-4 transition hover:text-black dark:text-neutral-500 dark:hover:text-white sm:justify-self-end"
                      >
                        {t("credentialSection.verify")} ↗
                        <span className="sr-only"> — {entry.name[locale]}</span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
