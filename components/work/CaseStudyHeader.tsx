import Image from "next/image";
import type { Project } from "../../lib/types";

interface CaseStudyHeaderProps {
  project: Project;
  subtitle?: string;
}

export function CaseStudyHeader({ project, subtitle }: CaseStudyHeaderProps) {
  return (
    <article className="bg-white px-5 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {project.category.en}
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {project.title.en}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.summary.en}</p>
        </div>
        <div className="flex gap-3">
          <span className="rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600">
            {project.role.en}
          </span>
          <span className="rounded-md bg-black/5 px-3 py-1.5 text-xs font-medium text-neutral-600">
            {project.type.en}
          </span>
        </div>
      </div>
      {subtitle && (
        <p className="mt-6 border-t border-neutral-100 pt-6 text-sm leading-relaxed text-neutral-500">
          {subtitle}
        </p>
      )}
    </article>
  );
}
