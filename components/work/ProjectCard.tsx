import Link from "next/link";
import type { Project } from "../../lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex flex-col justify-between gap-5 rounded-xl bg-white p-6 sm:p-8 shadow-sm ring-1 ring-black/5 transition hover:shadow-md hover:ring-black/10"
    >
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {project.category.en}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-neutral-300">
            {project.type.en}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          {project.title.en}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">{project.summary.en}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.technologies.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-neutral-100 px-3 py-1.5 text-xs font-medium text-neutral-600"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.results && project.results.length > 0 && (
        <div className="mt-4 border-t border-neutral-100 pt-4">
          <p className="text-xs text-neutral-400">{project.results[0].description.en}</p>
          <p className="text-lg font-semibold text-neutral-900">{project.results[0].metric}</p>
        </div>
      )}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-500 transition group-hover:text-black">
          View case study
        </span>
        <span aria-hidden="true" className="text-neutral-300 transition group-hover:text-black">
          &rarr;
        </span>
      </div>
    </Link>
  );
}
