"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export const Project = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Define transforms for the opacity of each project title
  const opacityProject1 = useTransform(
    scrollYProgress,
    [0, 0.36, 0.56],
    [1, 0, 0]
  );
  const opacityProject2 = useTransform(
    scrollYProgress,
    [0.33, 0.56, 0.76],
    [0, 1, 0]
  );
  const opacityProject3 = useTransform(
    scrollYProgress,
    [0.33, 0.76, 1],
    [0, 0, 1]
  );

  // Define transforms for the scale of the image
  const scale1 = useTransform(scrollYProgress, [0, 0.33], [1.3, 1]);
  const scale2 = useTransform(scrollYProgress, [0.33, 0.66], [1.3, 1]);
  const scale3 = useTransform(scrollYProgress, [0.66, 1], [1.3, 1]);

  return (
    <div className="bg-white h-[300vh] relative z-30" ref={container}>
      <div className="grid grid-cols-2">
        <div className="h-[100vh] flex flex-col items-center justify-center sticky top-0 z-10 bg-white ">
          <motion.div className="h-screen w-[50vw] z-[1] flex items-center px-16">
            <motion.div
              style={{ opacity: opacityProject1 }}
              className="absolute space-y-8"
            >
              <p className=" text-xl lg:text-9xl">Esemka</p>
              <p className="">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                neque laudantium labore? Illum a ipsam laborum aliquam nisi est
                dolorum dolore, blanditiis ex sint quasi deserunt vitae, qui cum
                rerum.
              </p>
            </motion.div>
            <motion.div
              style={{ opacity: opacityProject2 }}
              className="absolute"
            >
              <p className="text-9xl">Freadbear Family Diner</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                neque laudantium labore? Illum a ipsam laborum aliquam nisi est
                dolorum dolore, blanditiis ex sint quasi deserunt vitae, qui cum
                rerum.
              </p>
            </motion.div>
            <motion.div
              style={{ opacity: opacityProject3 }}
              className="absolute"
            >
              <p className="text-9xl">Wild Oasis</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
                neque laudantium labore? Illum a ipsam laborum aliquam nisi est
                dolorum dolore, blanditiis ex sint quasi deserunt vitae, qui cum
                rerum.
              </p>
            </motion.div>
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center relative">
          <motion.div className="sticky top-0 w-[50vw] h-[100vh] z-[1] overflow-hidden">
            <motion.div
              style={{ scale: scale1 }}
              className="absolute w-full h-full"
            >
              <Image
                src="/esemka.png"
                alt="esemka"
                layout="fill"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div className="sticky top-0 w-[50vw] h-[100vh] z-[1] overflow-hidden">
            <motion.div
              style={{ scale: scale2 }}
              className="absolute w-full h-full"
            >
              <Image
                src="/freadbear.png"
                alt="freadbear"
                layout="fill"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div className="sticky top-0 w-[50vw] h-[100vh] z-[1] overflow-hidden">
            <motion.div
              style={{ scale: scale3 }}
              className="absolute w-full h-full"
            >
              <Image
                src="/jar.jpg"
                alt="jar"
                layout="fill"
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
