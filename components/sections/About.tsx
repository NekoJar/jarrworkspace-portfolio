import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="h-[100vh] sm:h-[200vh] py-[20vh] px-[5vw] flex flex-col items-center justify-center">
      <p className="text-2xl sm:text-5xl font-inter uppercase text-left font-medium text-neutral-500 pb-20 sm:pb-40">
        <span className="flex">
          <video src="/eye.mp4" height={10} width={90} autoPlay loop muted />
          Hi I&apos;m{" "}
        </span>
        <span className="font-pixel text-neutral-800 text-3xl sm:text-6xl">
          <span className="italic">Z</span>harfan Hakim
        </span>
        , I study as a{" "}
        <span className="underline font-semibold text-neutral-500">
          computer science
        </span>{" "}
        student at <span className="italic">Telkom University</span> specialized
        on building{" "}
        <span className="text-neutral-900 font-extrabold">
          modern, user-friendly web app.{" "}
        </span>
      </p>
      <p className="text-2xl font-roboto text-left uppercase text-neutral-900 pl-0 sm:pl-[50vw]">
        I Love to work in TypeScript, Next.js, and Tailwind CSS, but I&apos;m
        happy seeking the right tools for the job.
      </p>
    </div>
  );
};

export default About;
