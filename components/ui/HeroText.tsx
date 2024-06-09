import React from "react";

export const HeroText = () => {
  return (
    <>
      <div className="flex items-center text-3xl xl:text-8xl justify-center w-max gap-4 text-neutral-600 font-pixel">
        <p className="first-letter:italic first-letter:font-extrabold">
          Zharfan
        </p>
        <p className="first-letter:italic">Hakim</p>
      </div>

      <div className="text-neutral-800 flex flex-col uppercase font-extrabold text-4xl xl:text-9xl justify-center items-center w-9/12">
        <p>Front End Developer</p>
        <p>UI/UX Designer</p>
      </div>

      <div className="flex items-center text-lg xl:text-3xl italic uppercase w-max text-neutral-500">
        <p>Currently Studying</p>
      </div>

      <div className="flex items-center text-xl xl:text-4xl underline uppercase w-max font-montserrat font-bold text-neutral-700">
        <p>@Telkom University</p>
      </div>

      <div className="flex items-center text-xl xl:text-4xl uppercase w-max font-inter font-bold text-neutral-500">
        <p>Based in Indonesia</p>
      </div>

      <div className="flex gap-4 items-center px-4 text-xs xl:text-xl text-neutral-600">
        <p>jarrworkspace@gmail.com</p>
        <p>&copy;2024</p>
      </div>
    </>
  );
};
