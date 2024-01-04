import React from "react";
import Image from "next/image";

// const pokeball = "../public/pokeball.svg";

const Navbar = () => {
  return (
    <div className="bg-red-600 sm:h-24 h-16 p-8">
      <div className="container mx-auto flex  items-center justify-between text-blue-200 h-full">
        <div className="flex items-center">
          <Image
            src="/pokeball.svg"
            width={44}
            height={44}
            alt="pokeball img"
            className="sm:mr-4 mr-2"
          ></Image>
          <p className="sm:text-[40px] text-[24px] text-red-400 font-bold">
            Pokedex
          </p>
        </div>
        <div>
          <Image
            src="/github.svg"
            width={44}
            height={44}
            alt="github"
            className="cursor-pointer"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
