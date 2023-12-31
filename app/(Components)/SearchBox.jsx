"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

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
      <form className="sm:mt-16 mt-8 sm:mx-0 mx-8 shadow-xl">
        <input
          type="text"
          className="sm:p-6 p-2 sm:w-9/12 w-2/3 sm:text-[24px] text-[16px] sm:rounded-l-xl rounded-l-md"
          placeholder="Search for any pokemon..."
          value={pokemonName}
          onChange={(event) => {
            setPokemonName(event.target.value);
          }}
        />
        <button
          onClick={handleSubmit}
          className="sm:p-6 p-2 sm:w-3/12 w-1/3 text-white bg-red-600  sm:text-[24px] text-[16px] sm:rounded-r-xl rounded-r-md shadow-xl"
        >
          Go For It
        </button>
      </form>
      <div className="rounded-lg mx-8 sm:mx-0 relative">
        <ul className="w-full absolute sm:mt-4 mt-2 z-10 rounded-lg h-auto bg-red-100 left-0 right-0">
          {searchSuggestion.slice(0, 5).map((suggestion, index) => (
            <Link key={suggestion.name} href={`./Pokemon/${suggestion.name}`}>
              <li
                className="sm:p-4 p-4 sm:pl-8 pl-4 cursor-pointer sm:text-[18px] text-[14px] text-left hover:bg-red-200 hover:rounded-lg"
                key={index}
              >
                {suggestion.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchBox;
