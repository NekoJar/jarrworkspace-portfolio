import type { Project } from "../../lib/types";

interface ProjectTechProps {
  project: Project;
}

export function ProjectTech({ project }: ProjectTechProps) {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Technology
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Stack
          </h2>
        </header>
        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-neutral-100 px-4 py-2 text-sm font-medium text-neutral-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
