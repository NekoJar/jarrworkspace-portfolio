"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk, EyeIcon, GlobeIcon, Triangle } from "lucide-react";
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

  const height = useTransform(scrollYProgress, [0, 1], [0, -2000]);
  const opacity = useTransform(scrollYProgressOpacity, [0, 1], [0, 1]);

  return (
    <motion.div
      className="bg-transparent p-12 h-screen relative z-[1]"
      id="projects"
      ref={container}
      style={{ opacity }}
    >
      <motion.div style={{ height }} className="text-neutral-800">
        <div className="flex flex-col md:flex-row text-5xl sm:text-9xl lg:text-[16rem]  font-extrabold justify-between tracking-tighter uppercase border-b border-neutral-700 pb-4">
          <p>Projects</p>
          <div className="flex">
            <span>
              <EyeIcon
                width={100}
                height={100}
                strokeWidth={0.3}
                stroke="pink"
                className="hidden sm:block animate-pulse duration-1000 rotate-180"
              />
            </span>
          </div>
        </div>
        <ul className="uppercase pt-4 text-neutral-700">
          {projects.map((project) => (
            <li className="border-b border-neutral-700 p-4" key={project.title}>
              <div className="flex justify-between items-center ">
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
