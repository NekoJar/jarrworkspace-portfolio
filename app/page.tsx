"use client";
import About from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Quote } from "@/components/ui/Quote";

import Lenis from "lenis";
import { ReactEventHandler, useEffect } from "react";

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
      <div className="bg-white h-[400vh] relative z-30">
        <About />
        <Projects />
      </div>
      <Contact />
    </main>
  );
}
