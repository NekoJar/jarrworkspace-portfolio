import type { Project } from "../../lib/types";

interface ProjectResultsProps {
  project: Project;
}

export function ProjectResults({ project }: ProjectResultsProps) {
  if (!project.results || project.results.length === 0) return null;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            Results
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            Outcomes
          </h2>
        </header>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {project.results.map((result) => (
            <div key={result.metric} className="border-b border-neutral-100 pb-6">
              <p className="text-sm text-neutral-400">{result.description.en}</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900">
                {result.metric}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
