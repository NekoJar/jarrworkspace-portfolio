import { motion, MotionValue } from "framer-motion";
import React from "react";

export const HeroText = ({
  opacity,
  scaleContent,
}: {
  opacity: MotionValue<number>;
  scaleContent: MotionValue<number>;
}) => {
  return (
    <>
      <div className="flex items-center text-3xl md:text-5xl xl:text-8xl font-pixel">
        <p className="first-letter:italic">Zharfan Hakim</p>
      </div>

      <motion.div
        style={{ opacity, scale: scaleContent }}
        className="flex flex-col uppercase font-extrabold text-4xl md:text-7xl xl:text-9xl justify-center items-center w-[75vw]"
      >
        <p>Front End Developer</p>
        <p>UI/UX Designer</p>
      </motion.div>

      <motion.div
        style={{ opacity, scale: scaleContent }}
        className="flex items-center text-lg md:text-3xl xl:text-3xl italic uppercase w-max "
      >
        <p>Currently Studying</p>
      </motion.div>

      <motion.div
        style={{ opacity, scale: scaleContent }}
        className="flex items-center text-xl md:text-2xl xl:text-4xl underline uppercase w-max font-montserrat font-bold "
      >
        <p>@Telkom University</p>
      </motion.div>

      <motion.div
        style={{ opacity, scale: scaleContent }}
        className="flex items-center text-xl md:text-2xl xl:text-4xl uppercase w-max font-inter font-bold "
      >
        <p>Based in Indonesia</p>
      </motion.div>

      <motion.div
        style={{ opacity, scale: scaleContent }}
        className="flex gap-4 items-center px-4 text-xs md:text-base xl:text-xl "
      >
        <p>jarrworkspace@gmail.com</p>
        <p>&copy;2024</p>
      </motion.div>
    </>
  );
};
