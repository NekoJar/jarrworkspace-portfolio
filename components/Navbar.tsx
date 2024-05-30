import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="h-screen fixed z-50 mix-blend-exclusion">
      <div className="uppercase text-white text-[0.65rem] p-6 mt-2 fixed w-full mix-blend-exclusion top-0 flex justify-center items-center">
        <fieldset className="border-t border-b border-r border-l border-white mix-blend-exclusion w-screen h-[90.92vh] max-h-[85vh] sm:max-h-[90.92vh]">
          <legend className="px-8 ">Zharfan Hakim</legend>
        </fieldset>
      </div>

      <div className=" uppercase text-white text-[0.65rem] p-6 mb-1 fixed w-full mix-blend-exclusion bottom-0 ">
        <ul className="flex items-center justify-between">
          <div className="border-b border-l border-r border-white mix-blend-exclusion w-[10vw]"></div>
          <div className="flex items-center gap-8 ">
            <Link href="#home">Home</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
          </div>
          <div className="border-b border-white mix-blend-exclusion w-[10vw]"></div>
        </ul>
      </div>
    </div>
  );
};
