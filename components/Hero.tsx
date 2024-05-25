import React from "react";
import { HeroText } from "./ui/HeroText";

export const Hero = () => {
  return (
    <div
      className="p-20 py-64 w-[100%] h-[100vh] flex flex-col justify-center items-center uppercase"
      id="home"
    >
      <HeroText />
    </div>
  );
};
