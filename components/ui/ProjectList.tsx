"use client";

import Image from "next/image";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";

const ProjectList = ({ title }: { title: string }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className="h-screen flex justify-center items-center snap-center snap-always">
      <div ref={ref} className=" relative m-5 overflow-hidden">
        <motion.h2 style={{ y }}>{title}</motion.h2>
      </div>
    </section>
  );
};

export default ProjectList;
