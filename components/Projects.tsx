import React from "react";

const projects = [
  { title: "Project 1", year: "(2024)" },
  { title: "Project 2", year: "(2024)" },
  { title: "Project 3", year: "(2024)" },
  { title: "Project 4", year: "(2024)" },
];

export const Projects = () => {
  return (
    <div className="bg-neutral-200 p-4 h-screen pt-14">
      <p className="text-5xl font-extrabold uppercase border-b border-black pb-4">
        Projects
      </p>
      <ul className="uppercase pt-4">
        {projects.map((project) => (
          <li className="border-b border-black p-4" key={project.title}>
            <div className="flex justify-between items-center">
              <p className="text-neutral-900">{project.title}</p>
              <p className="italic text-xs">{project.year}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
