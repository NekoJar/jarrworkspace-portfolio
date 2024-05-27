"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const projects = [
  { title: "Project 1", year: "(2024)" },
  { title: "Project 2", year: "(2024)" },
  { title: "Project 3", year: "(2024)" },
  { title: "Project 4", year: "(2024)" },
];

export const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    smooth: 1,
  });
  const { scrollYProgress: scrollYProgressOpacity } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const height = useTransform(scrollYProgress, [0, 1], [0, -1900]);
  const opacity = useTransform(scrollYProgressOpacity, [0, 1], [0, 1]);

  return (
    <motion.div
      className="bg-transparent p-12 h-screen relative z-[1] text-white"
      id="projects"
      ref={container}
      style={{ opacity }}
    >
      <motion.div style={{ height }} className="text-white">
        <p className="text-5xl font-extrabold uppercase border-b border-white pb-4">
          Projects
        </p>
        <ul className="uppercase pt-4 text-white">
          {projects.map((project) => (
            <li className="border-b border-white p-4" key={project.title}>
              <div className="flex justify-between items-center">
                <p className="">{project.title}</p>
                <p className="italic text-xs">{project.year}</p>
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
