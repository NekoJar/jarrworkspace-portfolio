"use client";

import { useLocale } from "@/components/layout/LocaleProvider";

const entries = [
  {
    year: "2024 年 3 月",
    en: [
      "HackerRank",
      "Frontend Developer",
      "Frontend, Node.js, React, JavaScript, REST API",
    ],
    ja: [
      "HackerRank",
      "フロントエンド開発者",
      "フロントエンド, Node.js, React, JavaScript, REST API",
    ],
  },
  {
    year: "2024 年 6 月",
    en: ["a"Red Hat System Administration II (RH134)"],
    ja: ["Red Hat System Administration II (RH134)"],
  },
  {
    year: "2024 年 9 月",
    en: ["Red Hat System Administration I (RH124)"],
    ja: ["Red Hat System Administration I (RH124)"],
  },
  {
    year: "2026 年 1 月",
    en: ["TOEIC Listening & Reading, 845"],
    ja: ["TOEIC リスニング & リーディング, 845 点"],
  },
  {
    year: "2026 年 8 月",
    en: ["JLPT N4"],
    ja: ["JLPT N4"],
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
          <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">04</span>
        </div>

        <ul className="mt-8 space-y-6">
          {entries.map((entry) => (
            <li
              key={entry.year}
              className="rounded-2xl bg-white dark:bg-neutral-900 p-6 ring-1 ring-black/5 dark:ring-white/10"
            >
              <p className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                {entry.year}
              </p>
              <ul className="mt-3 space-y-1.5">
                {entry[locale].map((line, i) => (
                  <li
                    key={i}
                    className={i === 1 ? "text-base font-semibold text-neutral-900 dark:text-neutral-100" : "text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"}
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
