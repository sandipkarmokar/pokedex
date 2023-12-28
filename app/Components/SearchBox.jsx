"use client";
import React, { useState } from "react";

const SearchBox = () => {
  const [pokemonName, setPokemonName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(pokemonName);
  };
  return (
    <form action="" className="mt-16 w-full shadow-xl">
      <input
        type="text"
        className="p-6 w-9/12 text-[24px] rounded-l-xl"
        placeholder="Search for any pokemon..."
        value={pokemonName}
        onChange={(event) => {
          setPokemonName(event.target.value);
        }}
      />
      <button
        onClick={handleSubmit}
        className="p-6 w-3/12 text-white bg-red-600 text-[24px] rounded-r-xl shadow-xl"
      >
        Go For It
      </button>
    </form>
  );
};

export default SearchBox;
