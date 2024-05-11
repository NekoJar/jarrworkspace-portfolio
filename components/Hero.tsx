import React from "react";

export const Hero = () => {
  return (
    <div className=" text-white p-20 py-64 w-[100vw] flex flex-col justify-center items-center uppercase">
      <div className="flex items-center text-4xl justify-center w-max gap-4 text-neutral-300 font-pixel">
        <p className="first-letter:italic">Zharfan</p>
        <p className="first-letter:italic">Hakim</p>
      </div>

      <div className="flex gap-4 uppercase font-extrabold text-3xl justify-center items-center w-72">
        <p>Front End Developer</p>
        <p className="text-end">UI/UX Designer</p>
      </div>

      <div className="flex items-center text-xl italic uppercase w-max text-neutral-400">
        <p>
          Currently <span className="text-neutral-300">Studying</span>
        </p>
      </div>

      <div className="flex items-center text-2xl underline uppercase w-max font-montserrat font-bold">
        <p>@Telkom University</p>
      </div>

      <div className="flex items-center text-2xl uppercase w-max font-inter font-bold">
        <p>Based in Indonesia</p>
      </div>

      <div className="flex gap-4 items-center px-4 text-xs">
        <p>jarrworkspace@gmail.com</p>
        <p>&copy;2024</p>
      </div>

      <div>
        <p></p>
      </div>
    </div>
  );
};
