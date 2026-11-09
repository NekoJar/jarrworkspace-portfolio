"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { caseStudies } from "@/lib/caseStudies";
import { projects } from "@/lib/projects";
import { useLocale } from "@/components/layout/LocaleProvider";

export function CaseStudy({ slug }: { slug: string }) {
  const { locale, t } = useLocale();
  const project = projects.find((item) => item.slug === slug);
  const content = caseStudies[slug];
  const [activeId, setActiveId] = useState<string | null>(content?.chapters[0]?.id ?? null);

  useEffect(() => {
    if (!content) return;

    const sections = content.chapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter((element): element is HTMLElement => element !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [content]);

  if (!project || !content) return null;

  const index = projects.findIndex((item) => item.slug === slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];
  const pager = [
    { label: t("caseStudy.previous"), project: previous },
    { label: t("caseStudy.next"), project: next },
  ];

  return (
    <article className="bg-white dark:bg-neutral-950">
      <header className="mx-auto max-w-5xl px-5 pt-28 sm:px-8 sm:pt-36">
        <Link href="/#work" className="eyebrow transition hover:text-black dark:hover:text-white">
          ← {t("caseStudy.allWork")}
        </Link>

        <div className="mt-10 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="eyebrow">
            {t("caseStudy.case")} {String(index + 1).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")}
          </p>
          <p className="eyebrow">{project.category[locale]}</p>
        </div>

        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-5xl">
          {project.title[locale]}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
          {content.outcome[locale]}
        </p>

        <div className="mt-10 grid gap-6 border-t border-black/10 dark:border-white/10 pt-5 sm:grid-cols-3">
          <div>
            <p className="eyebrow">{t("caseStudy.role")}</p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{project.role[locale]}</p>
          </div>
          <div>
            <p className="eyebrow">{t("caseStudy.type")}</p>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">{project.type[locale]}</p>
          </div>
        </div>

        {project.screenshot && (
          <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-800">
            <Image
              src={project.screenshot}
              alt=""
              fill
              sizes="(min-width: 1024px) 960px, 100vw"
              className="object-cover"
            />
          </div>
        )}
      </header>

      <div className="mx-auto max-w-5xl px-5 pt-14 sm:px-8 sm:pt-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside className="lg:col-span-4">
            <div className="border-t border-black/10 dark:border-white/10 pt-6 lg:sticky lg:top-32">
              <nav aria-label={t("caseStudy.onThisPage")}>
                <p className="eyebrow">{t("caseStudy.onThisPage")}</p>
                <ol className="mt-4 space-y-2">
                  {content.chapters.map((chapter, chapterIndex) => {
                    const isActive = activeId === chapter.id;
                    return (
                      <li key={chapter.id}>
                        <a
                          href={`#${chapter.id}`}
                          aria-current={isActive ? "location" : undefined}
                          className={`flex gap-3 font-mono text-[11px] leading-relaxed transition ${
                            isActive ? "text-neutral-900 dark:text-neutral-100" : "text-neutral-400 dark:text-neutral-500 hover:text-neutral-700"
                          }`}
                        >
                          <span>{String(chapterIndex + 1).padStart(2, "0")}</span>
                          <span>{chapter.title[locale]}</span>
                        </a>
                      </li>
                    );
                  })}
                </ol>
              </nav>

              {(project.links?.live || project.links?.repo) && (
                <div className="mt-8 flex flex-wrap gap-4 border-t border-black/10 dark:border-white/10 pt-5">
                  {project.links?.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 underline underline-offset-4 transition hover:text-black dark:hover:text-white"
                    >
                      {t("workSection.live")} ↗
                    </a>
                  )}
                  {project.links?.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[11px] text-neutral-600 dark:text-neutral-400 underline underline-offset-4 transition hover:text-black dark:hover:text-white"
                    >
                      {t("workSection.repo")} ↗
                    </a>
                  )}
                </div>
              )}
            </div>
          </aside>

          <div className="lg:col-span-8">
            <div className="max-w-[65ch]">
              {content.chapters.map((chapter, chapterIndex) => (
                <section
                  key={chapter.id}
                  id={chapter.id}
                  className="scroll-mt-32 border-t border-black/10 dark:border-white/10 py-10 first:border-t-0 first:pt-0"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                      {String(chapterIndex + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
                      {chapter.title[locale]}
                    </h2>
                  </div>

                  {chapter.paragraphs && (
                    <div className="mt-5 space-y-4">
                      {chapter.paragraphs.map((paragraph) => (
                        <p key={paragraph.en} className="leading-relaxed text-neutral-600 dark:text-neutral-400">
                          {paragraph[locale]}
                        </p>
                      ))}
                    </div>
                  )}

                  {chapter.steps && (
                    <ol className="mt-7 space-y-6">
                      {chapter.steps.map((step, stepIndex) => (
                        <li
                          key={step.title.en}
                          className="grid grid-cols-[1.75rem_1fr] gap-x-3"
                        >
                          <span className="pt-0.5 font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
                            {String(stepIndex + 1).padStart(2, "0")}
                          </span>
                          <div>
                            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100">{step.title[locale]}</h3>
                            <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                              {step.body[locale]}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ol>
                  )}

                  {chapter.bullets && (
                    <ul className="mt-6 space-y-3">
                      {chapter.bullets.map((bullet) => (
                        <li
                          key={bullet.en}
                          className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
                        >
                          <span aria-hidden="true" className="font-mono text-xs text-neutral-300 dark:text-neutral-600">
                            —
                          </span>
                          <span>{bullet[locale]}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {project.results && project.results.length > 0 && (
          <section className="border-t border-black/10 dark:border-white/10 py-14 sm:py-16">
            <h2 className="eyebrow">{t("caseStudy.results")}</h2>
            <ul className="mt-8 max-w-[65ch] space-y-3">
              {project.results.map((result) => (
                <li
                  key={result.en}
                  className="flex gap-3 leading-relaxed text-neutral-600 dark:text-neutral-400"
                >
                  <span aria-hidden="true" className="font-mono text-xs text-neutral-300 dark:text-neutral-600">
                    —
                  </span>
                  <span>{result[locale]}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        <section className="border-t border-black/10 dark:border-white/10 py-14 sm:py-16">
          <h2 className="eyebrow">{t("caseStudy.stack")}</h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li key={tech} className="tag">
                {tech}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <nav aria-label="Project navigation" className="mx-auto max-w-5xl px-5 pb-20 sm:px-8">
        <div className="grid gap-4 border-t border-black/10 dark:border-white/10 pt-10 sm:grid-cols-2">
          {pager.map((item) => (
            <Link
              key={item.project.slug}
              href={`/work/${item.project.slug}`}
              className="group rounded-2xl bg-neutral-50 dark:bg-neutral-900 p-6 ring-1 ring-black/5 dark:ring-white/10 transition hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <span className="eyebrow">{item.label}</span>
              <span className="mt-3 block text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {item.project.title[locale]}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                {item.project.summary[locale]}
              </span>
              <span className="mt-4 block font-mono text-xs text-neutral-300 dark:text-neutral-600 transition group-hover:text-neutral-900 dark:group-hover:text-white">
                →
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </article>
  );
}
