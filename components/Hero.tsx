"use client";
import React, { useRef } from "react";
import { HeroText } from "./ui/HeroText";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

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
  const opacityContent = useTransform(
    scrollYProgressOpacity,
    [0, 0.15],
    [1, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const scaleContent = useTransform(scrollYProgressOpacity, [0, 1], [1, 0]);
  const translateX = useTransform(scrollYProgress, [0, 1], ["0vw", "-44vw"]);
  const translateY = useTransform(scrollYProgress, [0, 1], ["0vh", "-46vh"]);

  const yImage = useTransform(scrollYProgress, [0, 1], ["0vh", "70vh"]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  return (
    <div
      ref={container}
      className="h-screen flex flex-col justify-center items-center uppercase mb-[20vh]"
      id="home"
    >
      <motion.div
        style={{ scale, translateX, translateY, height, width }}
        className="fixed mix-blend-exclusion text-white z-50"
      >
        <HeroText opacity={opacityContent} scaleContent={scaleContent} />
      </motion.div>

      <motion.div style={{ scale: scaleImage, y: yImage }}>
        <motion.img
          src="/jar.jpg"
          alt="jin"
          className="scale-50 sm:scale-100 object-[75%]  sm:translate-x-0 sm:translate-y-0 sm:max-h-[80vh] sm:max-w-[70vw] sm:w-[1920] sm:h-[1080] w-[2160px] h-[720px] object-cover"
        />
      </motion.div>
    </div>
  );
};
