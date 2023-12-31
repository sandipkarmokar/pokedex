import React from "react";

const PokemonTypeComponent = ({ children }) => {
  return (
    <div className="mr-2 shadow-md bg-blue-100 px-3 py-1 sm:text-[16px] text-[20px] rounded-md">
      {children}
    </div>
  );
};

export default PokemonTypeComponent;
