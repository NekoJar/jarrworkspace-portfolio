"use client";
import { NavLink } from "./ui/NavLink";

export const Navbar = () => {
  return (
    <div className="h-screen fixed mix-blend-exclusion bg-transparent z-[99]">
      {/* <div className="uppercase text-white text-[0.65rem] p-6 mt-2 fixed z-[1] w-full mix-blend-exclusion top-0 flex justify-center items-center">
        <fieldset className="border-t border-b border-r border-l border-white mix-blend-exclusion w-screen h-[90.92vh] max-h-[85vh] sm:max-h-[90.92vh]">
          <legend className="px-8 ">Zharfan Hakim</legend>
        </fieldset>
      </div> */}

      <div className=" uppercase text-white text-[0.65rem] p-6 mb-1 fixed w-full mix-blend-exclusion bottom-0 z-[99]">
        <ul className="flex items-center justify-between">
          <div className="border-b border-l border-r border-white mix-blend-exclusion w-[10vw]"></div>
          <div className="flex items-center gap-8 ">
            <NavLink href="#home" label="home" />
            <NavLink href="#projects" label="projects" />
            <NavLink href="#contact" label="contact" />
          </div>
          <div className="border-b border-white mix-blend-exclusion w-[10vw]"></div>
        </ul>
      </div>
    </div>
  );
};
