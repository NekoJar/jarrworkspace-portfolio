"use client";

import { ArrowDown, ArrowUpRight, Square } from "lucide-react";

export const ProjectTitle = () => {
  return (
    <div className="h-[50vh] sm:block hidden">
      <div className=" flex flex-col items-center justify-center space-y-4">
        <h1 className="flex justify-center text-5xl sm:text-7xl lg:text-9xl xl:text-[13rem] font-montserrat uppercase font-bold">
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

      {/* <div className="flex flex-col items-center justify-center">
        <div className="pb-4">
          <div className="flex items-center justify-between px-4">
            <p>No. 1</p>
            <p>(2024)</p>
          </div>
          <div>
            <Image
              src="/esemka.png"
              alt="esemka"
              height={2160}
              width={1440}
              className="p-4"
            />
          </div>
          <div className="flex items-center justify-between px-4">
            <p className="text-xl font-montserrat">Esemka mobil</p>
            <p className="text-xs">
              Next Js, TypeScript, Tailwind CSS, Framer Motion
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 p-4 gap-4">
          <div>
            <div className="flex items-center justify-between px-3">
              <p>No. 2</p>
              <p>(2023)</p>
            </div>
            <Image
              src="/freadbear.png"
              alt="freadbear"
              height={1280}
              width={720}
              className="pr-2"
            />
            <div className="flex items-center justify-between px-3">
              <p className="text-xl font-montserrat">Freadbear Family Diner</p>
              <p className="text-xs">
                React Js, JavaScript, Tailwind CSS, Supabase, Stripe
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between px-3">
              <p>No. 3</p>
              <p>(2023)</p>
            </div>
            <Image
              src="/freadbear.png"
              alt="wildOasis"
              height={1280}
              width={720}
              className="pr-2"
            />
            <div className="flex items-center justify-between px-3">
              <p className="text-xl font-montserrat">Wild Oasis</p>
              <p className="text-xs">React Js, JavaScript, SASS, Supabase</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
