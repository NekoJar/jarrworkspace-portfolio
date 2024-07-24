"use client";
import About from "@/components/sections/About";
import { ProjectList } from "@/components/sections/ProjectList";
import { Hero } from "@/components/sections/Hero";
import { ProjectTitle } from "@/components/sections/ProjectTitle";

import Lenis from "lenis";
import { ReactEventHandler, useEffect } from "react";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      gestureOrientation: "vertical",
    });

    lenis.on("scroll", (e: ReactEventHandler) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time / 2);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main>
      <Hero />
      <div className="bg-white h-[100vh] sm:h-[300vh] relative z-30">
        <About />
        <ProjectTitle />
      </div>
      <ProjectList />
      <Contact />
    </main>
  );
}
