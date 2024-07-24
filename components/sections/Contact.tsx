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
    <div className="relative h-screen bg-neutral-100 sm:mt-[100vh]">
      <div className="relative">
        <div className="">
          <p className="text-5xl font-extrabold uppercase border-b pb-4">
            Connect
          </p>
          <div className="">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum
            veniam velit exercitationem temporibus pariatur ex, libero sunt,
            doloribus inventore mollitia sit maiores, explicabo eum obcaecati
            eveniet non harum illum quos?
          </div>
        </div>
      </div>
    </div>
  );
};
