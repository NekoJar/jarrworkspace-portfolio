"use client";


import { siteCopy } from "@/lib/site";
import { useLocale } from "@/components/layout/LocaleProvider";

export function Experience() {
  const { t } = useLocale();

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

  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t("experienceSection.intro")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t("experienceSection.intro")}
          </h2>
        </header>

        <div className="mt-12 max-w-3xl">
          <div className="rounded-xl border border-black/10 p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              {t("experienceSection.company")}
            </p>
            <h3 className="mt-1 text-xl font-semibold text-neutral-900 sm:text-2xl">
              {t("experienceSection.role")}
            </h3>
            <p className="text-sm text-neutral-500">
              <time className="font-medium text-neutral-700">{t("experienceSection.period")}</time>
              <span className="mx-2">·</span>
              {t("experienceSection.summary")}
            </p>
            <ul className="mt-6 space-y-4">
              {bullets.map((bullet) => (
                <li
                  key={bullet.en}
                  className="flex gap-3 text-sm leading-relaxed text-neutral-600 sm:text-base"
                >
                  <span className="flex-shrink-0 rounded-full bg-black/5 px-2.5 py-1 text-neutral-500">
                    ·
                  </span>
                  <span>{bullet.en}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
