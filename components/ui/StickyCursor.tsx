"use client";
import { MutableRefObject, useEffect } from "react";
import styles from "./style.module.scss";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StickyCursor({
  stickyElement,
}: {
  stickyElement: MutableRefObject<null>;
}) {
  const cursorSize = 145;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  };

  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions),
  };

  const manageMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);
  };

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, []);

  return (
    <div className="relative hidden lg:flex z-[1]">
      <motion.div
        style={{
          left: smoothMouse.x,
          top: smoothMouse.y,
        }}
        className="relative w-[150px] h-[150px] bg-neutral-200 rounded-full flex items-center justify-center border border-black"
      >
        <Link href="https://github.com/nekojar" target="_blank">
          <div className="relative flex flex-col justify-center">
            <motion.svg
              animate={{ rotate: 360 }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
              viewBox="0 0 300 300"
              className="w-40 h-40 border-2 border-zinc-800 rounded-full bg-black"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 150, 150 m -110, 0 a 110,110 0 0,1 220,0 a 110,110 0 0,1 -220,0 "
                />
              </defs>
              <text fill="#fff">
                <textPath
                  xlinkHref="#circlePath"
                  className="text-4xl uppercase font-roboto "
                >
                  See More • See More • See More •
                </textPath>
              </text>
            </motion.svg>
            <div className="w-16 h-16 md:w-24 md:h-24 absolute top-0 left-0 right-0 bottom-0 m-auto bg-zinc-300 border-zinc-600 border-2 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-8 w-8" />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}
