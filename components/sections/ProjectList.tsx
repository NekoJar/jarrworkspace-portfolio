"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import StickyCursor from "../ui/StickyCursor";

export const ProjectList = () => {
  const container = useRef(null);
  const projects = useRef(null);

  const stickyElement = useRef(null);

  const { scrollYProgress: scrollYProgressContainer } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  const { scrollYProgress: scrollYProgressProjects } = useScroll({
    target: projects,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgressProjects, [0, 1], [1.4, 1]);

  const y = useTransform(scrollYProgressContainer, [0, 1], [-1000, 0]);

  return (
    <>
      <div
        ref={container}
        className="h-[200vh] relative bg-zinc-800 sm:block hidden"
      >
        <div className="h-[20vh] relative bg-zinc-700 sm:block hidden">
          <motion.div style={{ y }} className="pt-[100vh]">
            <div ref={projects} className="h-[300vh] bg-zinc-900">
              <div className="sticky overflow-hidden top-0 h-screen">
                <motion.div
                  style={{ scale, y }}
                  className="w-full h-full top-0 absolute flex items-center justify-center"
                >
                  <div className="relative h-[75vh] w-[75vw]">
                    <video
                      src="/projects.mp4"
                      autoPlay
                      loop
                      muted
                      className="object-cover w-full h-full"
                    />
                  </div>
                </motion.div>
                <StickyCursor stickyElement={stickyElement} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="relative ">
          <video src="/projects.mp4" autoPlay loop muted />
        </div>
      </div>
    </>
  );
};
