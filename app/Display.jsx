import React from "react";
import SearchBox from "./Components/SearchBox";
import MainDisplay from "./Components/MainDisplay";

const Display = () => {
  return (
    <div className="bg-red-200 h-[655px]">
      <div className="container mx-auto flex flex-col items-center justify-between text-black">
        <SearchBox></SearchBox>
        <MainDisplay></MainDisplay>
      </div>
    </div>
  );
};

export default Display;