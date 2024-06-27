"use client";
import React, { useRef } from "react";
import { HeroText } from "../HeroText";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Quote } from "../ui/Quote";
import { About } from "../ui/About";

export const Hero = () => {
  const container = useRef(null);
  const imageContainer = useRef(null);

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
  const { scrollYProgress: scrollYProgressImage } = useScroll({
    target: imageContainer,
    offset: ["start start", "end end"],
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

  const scaleImage = useTransform(scrollYProgressImage, [0, 1], [1, 2]);

  return (
    <>
      <div ref={container} className="h-screen uppercase mb-[20vh]" id="home">
        <div className="absolute flex justify-center items-center w-[90vw] pl-[10vw] h-screen">
          <motion.div
            style={{ scale, translateX, translateY, height, width }}
            className="fixed mix-blend-exclusion text-white z-50"
          >
            <HeroText opacity={opacityContent} scaleContent={scaleContent} />
          </motion.div>
        </div>

        <div ref={imageContainer} className="h-[280vh] relative">
          <div className="sticky overflow-hidden top-0 h-screen">
            <motion.div
              style={{ scale: scaleImage }}
              className="w-screen h-full top-0 absolute flex items-center justify-center"
            >
              <div className="relative w-[50vw] h-[50vh]">
                <Image src="/jar.jpg" alt="jar" fill className="object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
