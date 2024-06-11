"use client";
import Image from "next/image";
import Background from "@/public/jin.png";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Desc() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div className="h-screen overflow-hidden" ref={container}>
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
