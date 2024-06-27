"use client";
import { NavLink } from "./ui/NavLink";

export const Navbar = () => {
  return (
    <div className="h-screen fixed mix-blend-exclusion bg-transparent z-[99]">
      <div className="uppercase text-white text-[0.65rem] sm:text-xl p-4 xl:p-6 mb-1 fixed w-full mix-blend-exclusion z-[99]">
        <ul className="flex items-center justify-end">
          <div className="flex items-center gap-8 ">
            <NavLink href="/" label="home" />
            <NavLink href="/works" label="works" />
            <NavLink href="/about" label="about" />
            <NavLink href="/contact" label="contact" />
          </div>
        </ul>
      </div>
    </div>
  );
};
