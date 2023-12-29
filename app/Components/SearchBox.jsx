"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBox = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [allPokemonList, setAllPokemonList] = useState([]);
  const [searchSuggestion, setSearchSuggestion] = useState([]);

  const ALL_URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

  useEffect(() => {
    const fetchAllPokemon = async () => {
      try {
        const response = await axios.get(ALL_URL);
        setAllPokemonList(response.data.results);
        console.log("allPokemonList:", response.data.results);
      } catch (error) {
        console.error("There had been a mistake", error);
      }
    };
    fetchAllPokemon();
  }, []);

  useEffect(() => {
    if (pokemonName.length > 0) {
      const regex = new RegExp(`^${pokemonName}`, "i");
      const suggestions = allPokemonList
        .sort()
        .filter((v) => regex.test(v.name));
      setSearchSuggestion(suggestions);
    } else {
      setSearchSuggestion([]);
    }
  }, [pokemonName, allPokemonList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(pokemonName);
  };
  return (
    <div className="w-full relative">
      <form action="" className="mt-16  shadow-xl">
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
      <div className="rounded-lg">
        <ul className="w-full mt-4 absolute z-10 rounded-lg h-auto bg-red-100 ">
          {searchSuggestion.slice(0, 5).map((suggestion, index) => (
            <li
              className="p-4 pl-8 cursor-pointer text-[24px] text-left hover:bg-red-200"
              key={index}
            >
              {suggestion.name}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
