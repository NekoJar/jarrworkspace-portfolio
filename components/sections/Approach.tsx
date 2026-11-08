"use client";


import { useLocale } from "@/components/layout/LocaleProvider";

const steps = [
  { key: "understand", description: "Clarify requirements and constraints before choosing an implementation." },
  { key: "build", description: "Work across frontend, backend, data, AI, and infrastructure." },
  { key: "measure", description: "Use evaluation, performance, cost, and reliability as feedback." },
  { key: "iterate", description: "Improve systems using real results and stakeholder feedback." },
] as const;

export function Approach() {
  const { t } = useLocale();

  return (
    <section id="approach" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t("approachSection.intro")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t("approachSection.intro")}
          </h2>
        </header>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.key}
              className="border-b border-neutral-100 pb-8 last:border-0 last:pb-0"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                {t(`approachSection.${step.key}`)}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-neutral-900">
                {t(`approachSection.${step.key}`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
