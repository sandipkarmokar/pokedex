import React from "react";
import SearchBox from "./Components/SearchBox";
import MainDisplay from "./Components/MainDisplay";

const Display = () => {
  return (
    <div className="bg-red-300 min-h-screen pb-24">
      <div className="container mx-auto flex flex-col items-center justify-between text-black flex-grow">
        <SearchBox />
        <MainDisplay />
      </div>
    </div>
  );
};

export default Display;
