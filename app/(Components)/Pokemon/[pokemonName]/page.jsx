"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonTypeComponent from "../../PokemonTypeComponent";

const Page = ({ params }) => {
  const [pokemonInfo, setPokemonInfo] = useState([]);

  const POKEMON_URL = `https://pokeapi.co/api/v2/pokemon/`;
  const IMAGE_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg`;

  useEffect(() => {
    const fetchPokemonInfo = async () => {
      try {
        const response = await axios.get(`${POKEMON_URL}${params.pokemonName}`);
        setPokemonInfo(response.data);
      } catch (error) {
        console.error("Oops", error);
      }
    };

    fetchPokemonInfo();
  }, [params.pokemonName]);

  return (
    <div className="w-full h-screen bg-red-600">
      <div className="container mx-auto pt-24 w-1/3">
        <div className="bg-red-500 shadow-2xl rounded-2xl p-12">
          <div className="flex flex-col items-center">
            <img src={IMAGE_URL} alt="" className="h-48 mb-4" />
          </div>
          <div className="flex mt-6">
            <div className="text-[40px] pr-8">{params.pokemonName}</div>
            {pokemonInfo.types && (
              <div className="flex">
                {pokemonInfo.types.map((type) => (
                  <PokemonTypeComponent key={type.slot}>
                    {type.type.name}
                  </PokemonTypeComponent>
                ))}
              </div>
            )}
          </div>
          <div className="flex mt-6">
            <p className="text-[24px] mr-4">Abilities</p>
            {pokemonInfo.abilities && (
              <ul className="flex ">
                {pokemonInfo.abilities.map((ability) => (
                  <li key={ability.slot}>{ability.ability.name}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="flex mt-4">
            <p className="text-[24px] mr-4">Height</p>
            <p>{pokemonInfo.height}</p>
          </div>
          <div className="flex mt-4">
            <p className="text-[24px] mr-4">Moves:</p>
            {pokemonInfo.moves && (
              <ul className="flex">
                {pokemonInfo.moves.slice(0, 5).map((move, index) => (
                  <li className="mr-2" key={index}>
                    {move.move.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
