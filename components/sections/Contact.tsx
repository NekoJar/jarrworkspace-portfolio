"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Globe, LucideLinkedin } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import React, { useRef } from "react";
import Link from "next/link";

export const Contact = () => {
  const imageContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imageContainer,
    offset: ["start end", "end end"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [0, 550]);

  return (
    <div
      ref={imageContainer}
      className="relative h-screen bg-neutral-100 sm:mt-[100vh] p-8"
    >
      <div className="h-[40vh] md:h-[60vh] flex flex-col xl:flex-row justify-between items-start xl:items-end border-b-2 border-black">
        <div className="leading-tight font-montserrat">
          <p className="text-5xl xl:text-[13rem] font-extrabold uppercase flex items-center">
            <span>
              <Globe
                className="h-16 w-16 xl:h-32 xl:w-32 animate-spin duration-1000 repeat-infinite"
                strokeWidth={0.5}
              />
            </span>
            Let&apos;s
          </p>
          <p className="text-5xl xl:text-[13rem] font-extrabold uppercase pb-4">
            C<span className="font-montserrat italic">o</span>nnect
          </p>
        </div>
        <motion.div
          style={{ height }}
          className="relative h-[70svh] xl:w-[20vw] hidden xl:block"
        >
          <Image src="/jar-2.jpg" alt="" fill className="object-cover pb-8" />
        </motion.div>
        <div className="relative h-[80svh] w-full xl:hidden block">
          <Image src="/jar-2.jpg" alt="" fill className="object-cover pb-8" />
        </div>
      </div>
      <div className="h-[40vh] sm:h-[20vh] flex justify-between items-center gap-4 text-sm">
        <p className="w-[40vw]">
          In my free time, I love to drawing characters or place from games and
          movies, create some content for my YouTube, learn to make nice web
          animation and playing video games. And I&apos;m an arts lover.
        </p>
        <p className="w-[35vw] text-right">
          If you want to discuss about some projects, or even if you want to
          just do random chit-chat, thats fine. Feel free to reach me out, from
          any platform. I&apos;m really glad for it.
        </p>
      </div>
      <div className="h-[20vh] flex flex-col sm:flex-row justify-between items-end xl:py-12">
        <div>
          <p className="font-montserrat font-bold text-2xl xl:text-5xl">
            Contact me:
            <span className="font-normal underline">
              {" "}
              <Link href="mailto:jarrworkspace@gmail.com  ">
                jarrworkspace@gmail.com
              </Link>
            </span>
          </p>
          <p className="font-extralight">
            &copy;2024 jarrworkspace. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href="https://www.linkedin.com/in/mzharfanhakim/"
            target="_blank"
          >
            <FaLinkedin className="h-8 w-8 xl:h-16 xl:w-16" />
          </Link>
          <Link href="https://github.com/NekoJar" target="_blank">
            <FaGithub className="h-8 w-8 xl:h-16 xl:w-16" />
          </Link>
          <Link href="https://www.youtube.com/@fluiecx" target="_blank">
            <FaYoutube className="h-8 w-8 xl:h-16 xl:w-16" />
          </Link>
        </div>
      </div>
    </div>
  );
};
