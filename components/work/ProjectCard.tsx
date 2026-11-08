"use client";

import Image from "next/image";
import Link from "next/link";
import type { Project } from "../../lib/types";
import { useLocale } from "@/components/layout/LocaleProvider";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, locale } = useLocale();
  const result = project.results?.[0];
  const links = project.links;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-neutral-900 ring-1 ring-black/5 dark:ring-white/10 transition hover:ring-black/15 dark:hover:ring-white/20">
      <Link href={`/work/${project.slug}`} className="flex flex-1 flex-col p-6 sm:p-7">
        {project.screenshot && (
          <div className="relative -mx-6 -mt-6 mb-6 aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800 sm:-mx-7 sm:-mt-7">
            <Image
              src={project.screenshot}
              alt={project.title[locale]}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="flex items-baseline justify-between gap-3">
          <p className="eyebrow">{project.category[locale]}</p>
          <span className="font-mono text-[11px] text-neutral-300 dark:text-neutral-600">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-3xl">
          {project.title[locale]}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">{project.summary[locale]}</p>

        {result && (
          <div className="mt-6 border-t border-black/5 dark:border-white/10 pt-4">
            <p className="font-mono text-2xl tracking-tight text-neutral-900 dark:text-neutral-100">{result.metric}</p>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{result.description[locale]}</p>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-auto flex items-center justify-between pt-6 text-sm font-medium text-neutral-500 dark:text-neutral-400 transition group-hover:text-black dark:group-hover:text-white">
          {t("workSection.viewCaseStudy")}
          <span aria-hidden="true" className="text-neutral-300 dark:text-neutral-600 transition group-hover:text-black dark:group-hover:text-white">
            &rarr;
          </span>
        </span>
      </Link>

      {(links?.live || links?.repo) && (
        <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-black/5 dark:border-white/10 px-6 py-4 sm:px-7">
          {links?.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 transition hover:text-black dark:hover:text-white"
            >
              {t("workSection.live")} &nearr;
            </a>
          )}
          {links?.repo && (
            <a
              href={links.repo}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 transition hover:text-black dark:hover:text-white"
            >
              {t("workSection.repo")} &nearr;
            </a>
          )}
        </div>
      )}
    </article>
  );
}
