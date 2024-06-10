"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export const Contact = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);

  return (
    <motion.div className="p-4 h-screen mb-12" id="contact" ref={container}>
      <motion.div>
        <p className="text-5xl font-extrabold uppercase border-b border-neutral-700 text-neutral-800 pb-4">
          Connect
        </p>
        <div className="text-neutral-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
          veniam velit exercitationem temporibus pariatur ex, libero sunt,
          doloribus inventore mollitia sit maiores, explicabo eum obcaecati
          eveniet non harum illum quos?
        </div>
      </motion.div>
    </motion.div>
  );
};
