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
      <div className="container mx-auto pt-14 w-1/3">
        <div className="bg-red-500 shadow-2xl rounded-2xl p-12">
          <div className="flex flex-col items-center">
            <img src={IMAGE_URL} alt="" className="h-48 mb-4" />
          </div>
          <div className="flex mt-8 items-center">
            <p className="text-[40px] pr-6 ">{params.pokemonName}</p>
            <div className="flex">
              {pokemonInfo.types?.map((type) => (
                <PokemonTypeComponent key={type.slot}>
                  {" "}
                  {type.type.name}
                </PokemonTypeComponent>
              ))}
            </div>
          </div>
          <div className="mt-4 text-[18px]">
            <p>Abilities : </p>
            <div className="flex flex-wrap text-[22px]">
              {pokemonInfo.abilities?.map((ability) => (
                <p key={ability.ability.slot} className="pr-3">
                  {ability.ability.name}{" "}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-4 text-[18px]">
            <p>height : </p>

            <p className="text-[22px]">{pokemonInfo.height}</p>
          </div>
          <div className="mt-4 text-[18px]">
            <p>Moves : </p>
            <div className="flex flex-wrap text-[22px]">
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
