"use client";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Asterisk,
  EyeIcon,
  GlobeIcon,
  MoveUpRight,
  Triangle,
} from "lucide-react";
import React, { useRef } from "react";

const projects = [
  { title: "Esemka", year: "(2024)" },
  { title: "Project 2", year: "(2024)" },
  { title: "Project 3", year: "(2024)" },
  { title: "Project 4", year: "(2024)" },
];

export const About = () => {
  const container = useRef(null);
  const desc = useRef(null);

  const isInViewDesc = useInView(desc);

  const { scrollYProgress: scrollYProgressOpacity } = useScroll({
    target: container,
    offset: ["start end", "start center"],
  });

  const opacity = useTransform(scrollYProgressOpacity, [0, 1], [0, 1]);

  return (
    <motion.div
      className="flex justify-center p-4 h-[100vh] relative z-10 text-neutral-100 mix-blend-exclusion"
      id="projects"
      ref={container}
      style={{ opacity }}
    >
      <motion.div className="overflow-hidden">
        <div className="flex text-5xl sm:text-9xl xl:text-[16rem] font-extrabold tracking-tighter uppercase pt-[30vw]">
          <p className="flex gap-6">
            About me
            <span>
              <MoveUpRight width={50} height={50} />
            </span>
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};
