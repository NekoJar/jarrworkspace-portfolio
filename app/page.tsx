"use client";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import FuzzyOverlay from "@/components/ui/FuzzyOverlay";

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
      <Projects />
      <Contact />

      {/* <FuzzyOverlay /> */}
    </main>
  );
}
