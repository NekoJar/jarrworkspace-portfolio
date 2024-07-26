"use client";

import { ArrowDown, ArrowUpRight, Square } from "lucide-react";

export const ProjectTitle = () => {
  return (
    <div className="h-[20vh] sm:block hidden px-4">
      <div className=" flex flex-col items-center space-y-4">
        <h1 className="flex  text-5xl sm:text-7xl lg:text-9xl xl:text-[13rem] font-montserrat uppercase font-bold">
          <span className="flex flex-col justify-around text-right items-end">
            <p className="flex flex-col text-xs font-normal sm:text-lg lg:text-2xl">
              Some<span>featured</span>
            </p>
            <Square fill="black" width={10} height={10} />
          </span>
          Projects{" "}
          <span className="flex flex-col justify-around">
            <p className="flex flex-col text-xs font-normal sm:text-lg lg:text-2xl">
              Fullstack<span>dev.</span>
            </p>

            <ArrowUpRight />
          </span>
        </h1>
        <p className="flex flex-col uppercase text-center pb-20 sm:text-lg lg:text-2xl">
          Personal projects, School projects,
          <span>some research and playground</span>
        </p>
        <p className="flex justify-center">
          <span>
            <ArrowDown />
          </span>
        </p>
      </div>
    </div>
  );
};
