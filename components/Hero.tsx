import React from "react";

export const Hero = () => {
  return (
    <div className=" text-white p-20 py-64 w-[100%] h-[100vh] flex flex-col justify-center items-center uppercase">
      <div className="flex items-center text-3xl justify-center w-max gap-4 text-neutral-300 font-pixel ">
        <p className="first-letter:italic first-letter:font-extrabold">
          Zharfan
        </p>
        <p className="first-letter:italic">Hakim</p>
      </div>

      <div className="flex flex-col uppercase font-extrabold text-4xl justify-center items-center w-9/12">
        <p>Front End Developer</p>
        <p>UI/UX Designer</p>
      </div>

      <div className="flex items-center text-lg italic uppercase w-max text-neutral-400">
        <p>Currently Studying</p>
      </div>

      <div className="flex items-center text-xl underline uppercase w-max font-montserrat font-bold text-neutral-200">
        <p>@Telkom University</p>
      </div>

      <div className="flex items-center text-xl uppercase w-max font-inter font-bold text-neutral-300">
        <p>Based in Indonesia</p>
      </div>

      <div className="flex gap-4 items-center px-4 text-xs text-neutral-400">
        <p>jarrworkspace@gmail.com</p>
        <p>&copy;2024</p>
      </div>
    </div>
  );
};
