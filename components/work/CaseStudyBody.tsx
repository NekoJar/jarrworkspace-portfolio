import type { Project } from "../../lib/types";

interface SectionProps {
  title: string;
  content: string;
}

interface CaseStudyBodyProps {
  project: Project;
  sections: SectionProps[];
  results?: { metric: string; description: string }[];
  technologies: string[];
}

export function CaseStudyBody({
  project,
  sections,
  results,
  technologies,
}: CaseStudyBodyProps) {
  return (
    <>
      {sections.map((section, index) => (
        <section key={index} className="bg-white px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
              {section.title}
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 leading-relaxed text-neutral-600">{section.content}</p>
          </div>
        </section>
      ))}

      {results && results.length > 0 && (
        <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
              Results
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {results.map((result, index) => (
                <div key={index} className="border-b border-neutral-100 pb-6">
                  <p className="text-sm text-neutral-400">{result.description}</p>
                  <p className="mt-2 text-2xl font-semibold text-neutral-900">{result.metric}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
            Technology
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {technologies.map((tech) => (
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
    </>
  );
}
