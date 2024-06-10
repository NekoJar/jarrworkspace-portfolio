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
  const { scrollYProgress: scrollYProgressOpacity } = useScroll({
    target: container,
    offset: ["start start", "end center"],
    smooth: 1,
  });

  const height = useTransform(scrollYProgress, [0, 1], ["60vh", "10vh"]);
  const width = useTransform(scrollYProgress, [0, 1], ["80vw", "20vw"]);
  const opacityContent = useTransform(scrollYProgressOpacity, [0, 0.3], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scaleContent = useTransform(scrollYProgressOpacity, [0, 1], [1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0vw", "-44vw"]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0vh", "-46vh"]);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col justify-center items-center uppercase"
      id="home"
    >
      <motion.div
        style={{ scale, translateX, translateY, height, width }}
        className="fixed"
      >
        <HeroText opacity={opacityContent} scaleContent={scaleContent} />
      </motion.div>
    </div>
  );
};
