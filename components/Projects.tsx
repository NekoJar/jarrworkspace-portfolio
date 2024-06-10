"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Asterisk, EyeIcon, GlobeIcon, Triangle } from "lucide-react";
import React, { useRef } from "react";

const projects = [
  { title: "Esemka", year: "(2024)" },
  { title: "Project 2", year: "(2024)" },
  { title: "Project 3", year: "(2024)" },
  { title: "Project 4", year: "(2024)" },
];

export const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
    smooth: 1,
  });

  const { scrollYProgress: scrollYProgressOpacity } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const opacity = useTransform(scrollYProgressOpacity, [0, 1], [0, 1]);

  return (
    <motion.div
      className="p-4 h-screen relative z-10 "
      id="projects"
      ref={container}
      style={{ opacity }}
    >
      <motion.div className="text-neutral-800 sticky top-4 pt-8 overflow-hidden">
        <div className="flex text-5xl sm:text-9xl xl:text-[16rem]  font-extrabold justify-between tracking-tighter uppercase border-b border-neutral-700 pb-4 bottom-0">
          <p>Projects</p>
          <div className="flex">
            <span>
              <EyeIcon
                width={100}
                height={100}
                strokeWidth={0.3}
                stroke="red"
                className="hidden sm:block animate-pulse duration-1000 rotate-180"
              />
              <EyeIcon
                width={30}
                height={30}
                strokeWidth={0.3}
                stroke="pink"
                className="sm:hidden block animate-pulse duration-1000 rotate-180"
              />
            </span>
          </div>
        </div>
        <ul className="uppercase text-neutral-700">
          {projects.map((project) => (
            <li
              className="border-b border-neutral-700 p-4 overflow-hidden h-11 "
              key={project.title}
            >
              <div className="flex justify-between items-center">
                <p>{project.title}</p>
                <p className="italic text-xs">{project.year}</p>
              </div>
              <div className="mt-2">asok</div>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
};
