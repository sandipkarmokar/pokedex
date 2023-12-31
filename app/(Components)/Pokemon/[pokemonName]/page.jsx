"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonTypeComponent from "../../PokemonTypeComponent";

const Page = ({ params }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);
  const [pokemonNumber, setPokemonNumber] = useState(0);

  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const IMAGE_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/`;
  const [allPokemonList, setAllPokemonList] = useState([]);

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
    const fetchPokemonInfo = async () => {
      try {
        const response = await axios.get(`${POKEMON_URL}${params.pokemonName}`);
        setPokemonInfo(response.data);
        const index = allPokemonList.findIndex(
          (pokemon) => pokemon.name === params.pokemonName
        );
        setPokemonNumber(index + 1);
      } catch (error) {
        console.error("Oops", error);
      }
    };

    fetchPokemonInfo();
  }, [params.pokemonName, allPokemonList]);

  return (
    <div className="w-full h-screen bg-red-600">
      <div className="container mx-auto sm:pt-14 pt-20 sm:w-1/3 w-10/12">
        <div className="bg-red-500 shadow-2xl rounded-2xl p-12">
          <div className="flex flex-col items-center">
            <img
              src={`${IMAGE_URL}${pokemonNumber}.svg`}
              alt=""
              className="h-48 mb-4"
            />
          </div>
          <div className="flex mt-8 items-center">
            <p className="sm:text-[40px] text-[26px] sm:pr-6 pr-4">
              {params.pokemonName}
            </p>
            <div className="flex">
              {pokemonInfo.types?.map((type) => (
                <PokemonTypeComponent key={type.slot}>
                  {" "}
                  {type.type.name}
                </PokemonTypeComponent>
              ))}
            </div>
          </div>
          <div className="mt-4 sm:text-[18px] text-[14px]">
            <p>Abilities : </p>
            <div className="flex flex-wrap text-[22px]">
              {pokemonInfo.abilities?.map((ability) => (
                <p key={ability.ability.slot} className="pr-3">
                  {ability.ability.name}{" "}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4 sm:text-[18px] text-[14px]">
            <p>height : </p>
            <p className="sm:text-[22px] text-[18px]">{pokemonInfo.height}</p>
          </div>
          <div className="mt-4 sm:text-[18px] text-[14px]">
            <p>Moves : </p>
            <div className="flex flex-wrap sm:text-[22px] text-[18px]">
              {pokemonInfo.moves?.slice(0, 5).map((move) => (
                <p key={move.move.name} className="pr-3">
                  {move.move.name}{" "}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
