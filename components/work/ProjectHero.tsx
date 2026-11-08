import Image from "next/image";
import type { Project } from "../../lib/types";

interface ProjectHeroProps {
  project: Project;
  imageClassName?: string;
}

export function ProjectHero({ project, imageClassName }: ProjectHeroProps) {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="grid min-h-[400px] grid-cols-1 gap-6 px-6 sm:min-h-[520px] sm:grid-cols-2 sm:px-8 lg:min-h-[600px]">
        <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[320px]">
          <Image
            src={project.image}
            alt={project.title.en}
            fill
            className={`object-cover transition duration-500 group-hover:scale-105 sm:object-top sm:sm:scale-105 ${
              imageClassName ?? ""
            }`}
          />
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-neutral-400">
            {project.role.en}
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
            {project.title.en}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-neutral-600">{project.summary.en}</p>
        </div>
      </div>
    </div>
  );
}
