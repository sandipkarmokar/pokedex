import React from "react";

const PokemonTypeComponent = ({ children }) => {
  return (
    <div className="mr-2 shadow-md bg-blue-100 px-2 py-1 rounded-md">
      {children}
    </div>
  );
};

export default PokemonTypeComponent;
