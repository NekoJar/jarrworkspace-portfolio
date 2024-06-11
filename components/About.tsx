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
      className="p-4 h-[160vh] relative z-10 text-neutral-100 mix-blend-exclusion "
      id="projects"
      ref={container}
      style={{ opacity }}
    >
      <motion.div className=" overflow-hidden bg-gradient-to-b from-transparent via-10% via-black/75 to-20% to-black">
        <motion.div
          ref={desc}
          className="flex justify-end text-right pl-[50vw] text-xs sm:text-lg pr-0 sm:pr-[10vw] font-montserrat italic"
        >
          &quot;I&apos;m not a Pro, but I&apos;d love to learn.&quot;
        </motion.div>
        <div className="flex justify-start text-left pr-[50vw] text-xs sm:text-lg pt-[20vh] pl-0 sm:pl-[5vw] font-montserrat">
          Passionate on building modern, user-friendly web applications. I love
          to work in TypeScript, Next.js, and Tailwind CSS, but I&apos;m happy
          seeking the right tools for the job.
        </div>
        <div className="flex text-5xl sm:text-9xl xl:text-[16rem] font-extrabold justify-center tracking-tighter uppercase pt-[30vw]">
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
