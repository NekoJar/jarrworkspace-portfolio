"use client";


import { useLocale } from "@/components/layout/LocaleProvider";

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
    items: ["OpenAI", "Gemini", "Vercel AI SDK", "Amazon Transcribe", "OCR", "AI Agents", "Retrieval"],
  },
  {
    label: "cloud",
    items: ["AWS", "Vercel"],
  },
] as const;

export function Stack() {
  const { t } = useLocale();

  return (
    <section id="stack" className="bg-[#f5f5f5] py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {t("stackSection.title")}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {t("stackSection.title")}
          </h2>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stacks.map((group) => (
            <div key={group.label} className="pb-6 sm:pb-0">
              <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
                {t(`stackSection.${group.label}`)}
              </p>
              <ul className="mt-3 space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-neutral-600">
                    {item}
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
