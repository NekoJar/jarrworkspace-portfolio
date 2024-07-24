"use client";
import { NavLink } from "./ui/NavLink";

export const Navbar = () => {
  return (
    <div className="h-screen fixed mix-blend-exclusion bg-transparent z-[99]">
      <div className="uppercase text-white text-[0.65rem] sm:text-xl p-4 xl:p-6 mb-1 fixed w-full mix-blend-exclusion z-[99]">
        <ul className="flex items-center justify-between lg:justify-end">
          <div className="font-pixel lg:hidden">
            <p>Zharfan</p>
            <p>Hakim</p>
          </div>
          <div className="flex items-center gap-8 ">
            <NavLink href="https://www.youtube.com/@fluiecx" label="youtube" />
            <NavLink
              href="https://www.linkedin.com/in/mzharfanhakim/"
              label="linkedin"
            />
            <NavLink href="https://github.com/NekoJar" label="GitHub" />
            <NavLink href="mailto:jarrworkspace@gmail.com" label="contact" />
          </div>
        </ul>
      </div>
    </div>
  );
};
