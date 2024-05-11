import React from "react";

export const Navbar = () => {
  return (
    <div className="uppercase text-white text-[0.65rem] p-6 fixed w-full mix-blend-exclusion">
      <ul className="flex items-center justify-between">
        <li>Zharfan Hakim</li>
        <div className="flex items-center gap-8">
          <li>YouTube</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
        </div>
      </ul>
    </div>
  );
};
