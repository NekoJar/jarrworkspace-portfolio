"use client";

import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/work/ProjectCard";
import { useLocale } from "@/components/layout/LocaleProvider";

export function SelectedWork() {
  const { t } = useLocale();

  return (
    <section id="work" className="bg-[#f5f5f5] dark:bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
            {t("workSection.intro")}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{t("workSection.sub")}</p>
        </header>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

