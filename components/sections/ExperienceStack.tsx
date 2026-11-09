"use client";

import { useLocale } from "@/components/layout/LocaleProvider";

const bullets = [
  {
    en: "Build production web applications using Next.js, TypeScript, and backend services.",
    ja: "Next.js、TypeScript、バックエンドサービスを使ってプロダクション向けWebアプリケーションを構築。",
  },
  {
    en: "Develop AI-powered applications using OpenAI, Gemini, and speech/OCR technologies.",
    ja: "OpenAI、Gemini、音声・OCR技術を使ってAI搭載アプリケーションを開発。",
  },
  {
    en: "Design and optimize AI processing pipelines to reduce API calls and processing cost.",
    ja: "API呼び出し回数と処理コストを削減するため、AI処理パイプラインを設計・最適化。",
  },
  {
    en: "Collaborate with Japanese stakeholders to investigate requirements, implement features, and evaluate system accuracy.",
    ja: "日本拠点の関係者と連携し、要件調査、機能実装、システム精度評価を実施。",
  },
];

const steps = [
  {
    key: "understand",
    description: {
      en: "Clarify requirements and constraints before choosing an implementation.",
      ja: "実装方法を決める前に、要件と制約を明確にする。",
    },
  },
  {
    key: "build",
    description: {
      en: "Work across frontend, backend, data, AI, and infrastructure.",
      ja: "フロントエンド、バックエンド、データ、AI、インフラを横断して構築する。",
    },
  },
  {
    key: "measure",
    description: {
      en: "Use evaluation, performance, cost, and reliability as feedback.",
      ja: "評価、パフォーマンス、コスト、信頼性をフィードバックとして用いる。",
    },
  },
  {
    key: "iterate",
    description: {
      en: "Improve systems using real results and stakeholder feedback.",
      ja: "実際の結果と関係者のフィードバックをもとにシステムを改善する。",
    },
  },
] as const;

const stacks = [
  {
    label: "frontend",
    items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "TanStack Query"],
  },
  {
    label: "backend",
    items: ["Node.js", "NestJS", "REST APIs", "Webhooks"],
  },
  {
    label: "data",
    items: ["PostgreSQL", "MySQL", "Prisma"],
  },
  {
    label: "ai",
    items: [
      "OpenAI",
      "Gemini",
      "Vercel AI SDK",
      "Amazon Transcribe",
      "OCR",
      "AI Agents",
    ],
  },
  {
    label: "cloud",
    items: ["AWS", "Vercel"],
  },
] as const;

export function ExperienceStack() {
  const { t, locale } = useLocale();

  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-[#f5f5f5] dark:bg-neutral-950 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          <article className="rounded-2xl bg-white dark:bg-neutral-900 p-6 ring-1 ring-black/5 dark:ring-white/10 sm:col-span-2 sm:p-8 lg:col-span-4">
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">{t("experienceSection.intro")}</p>
              <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                01
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
              {t("experienceSection.role")}
            </h2>
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              <span className="font-medium text-neutral-700 dark:text-neutral-300">
                {t("experienceSection.company")}
              </span>
              <span className="mx-2">·</span>
              <time className="font-mono text-xs">
                {t("experienceSection.period")}
              </time>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t("experienceSection.summary")}
            </p>

            <ul className="mt-6 space-y-3 border-t border-black/5 dark:border-white/10 pt-6">
              {bullets.map((bullet) => (
                <li
                  key={bullet.en}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-neutral-300 dark:text-neutral-600"
                  >
                    —
                  </span>
                  <span>{bullet[locale]}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-2xl bg-white dark:bg-neutral-900 p-6 ring-1 ring-black/5 dark:ring-white/10 sm:col-span-2 sm:p-8 lg:col-span-2">
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">{t("approachSection.intro")}</p>
              <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                02
              </span>
            </div>

            <ol className="mt-6 space-y-5">
              {steps.map((step, index) => (
                <li key={step.key}>
                  <p className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-neutral-900 dark:text-neutral-100">
                    {t(`approachSection.${step.key}`)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                    {step.description[locale]}
                  </p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-2xl bg-white dark:bg-neutral-900 p-6 ring-1 ring-black/5 dark:ring-white/10 sm:col-span-2 sm:p-8 lg:col-span-6">
            <div className="flex items-baseline justify-between gap-4">
              <p className="eyebrow">{t("stackSection.title")}</p>
              <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                03
              </span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3 lg:grid-cols-5">
              {stacks.map((group) => (
                <div key={group.label}>
                  <h3 className="eyebrow">
                    {t(`stackSection.${group.label}`)}
                  </h3>
                  <ul className="mt-3 space-y-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="font-mono text-xs text-neutral-600 dark:text-neutral-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
