"use client";
import React, { useRef } from "react";
import { HeroText } from "./ui/HeroText";
import { motion, useScroll, useTransform } from "framer-motion";

export const Hero = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
    smooth: 1,
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={container}
      className="p-20 py-64 w-[100%]  h-[100vh] flex flex-col justify-center items-center uppercase"
      id="home"
    >
      <motion.div style={{ opacity }} className="fixed pl-10 sm:pl-0">
        <HeroText />
      </motion.div>
    </div>
  );
};
