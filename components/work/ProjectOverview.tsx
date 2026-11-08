import type { Project } from "../../lib/types";

interface ProjectOverviewProps {
  project: Project;
}

export function ProjectOverview({ project }: ProjectOverviewProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Overview
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {project.title.en}
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">{project.description.en}</p>
        </header>
      </div>
    </section>
  );
}
