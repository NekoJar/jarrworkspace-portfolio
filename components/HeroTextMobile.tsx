import { motion, MotionValue } from "framer-motion";
import React from "react";

export const HeroTextMobile = ({
  opacity,
}: {
  opacity: MotionValue<number>;
}) => {
  return (
    <motion.div style={{ opacity }}>
      <div className="flex items-center text-3xl md:text-5xl xl:text-8xl font-pixel">
        <p className="first-letter:italic">Zharfan Hakim</p>
      </div>

      <div className="flex flex-col uppercase font-extrabold text-4xl md:text-7xl xl:text-9xl justify-center items-center w-[75vw]">
        <p>Full stack developer</p>
      </div>

      <div className="flex items-center text-lg md:text-3xl xl:text-3xl italic uppercase w-max ">
        <p>Currently Studying</p>
      </div>

      <div className="flex items-center text-xl md:text-2xl xl:text-4xl underline uppercase w-max font-montserrat font-bold ">
        <p>@Telkom University</p>
      </div>

      <div className="flex items-center text-xl md:text-2xl xl:text-4xl uppercase w-max font-inter font-bold ">
        <p>Based in Indonesia</p>
      </div>

      <div className="flex gap-4 items-center px-4 text-xs md:text-base xl:text-xl ">
        <p>jarrworkspace@gmail.com</p>
        <p>&copy;2024</p>
      </div>
    </motion.div>
  );
};
