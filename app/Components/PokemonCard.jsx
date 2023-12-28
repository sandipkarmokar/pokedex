import React from "react";
import Image from "next/image";

const PokemonCard = ({ name, url, index }) => {
  const IMAGE_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index}.svg`;
  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  const capitalizedWord = capitalizeFirstLetter(name);

  return (
    <div className="relative cursor-pointer h-72 w-72 bg-red-300 rounded-3xl shadow-lg overflow-hidden">
      <div className="absolute top-0 right-0 m-4 text-[48px] text-right text-white rounded-2xl ">
        #{index}
      </div>
      <div className="flex justify-center mt-6">
        {/* <Image
          src={IMAGE_URL}
          alt={name}
          width={108} // Set a fixed width
          height={96} // Set a fixed height
          className="rounded-3xl"
        /> */}
        <img src={IMAGE_URL} alt={name} className="rounded-3xl h-36 w-36 m-8" />
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <p className="text-[24px]">{capitalizedWord}</p>
      </div>
    </div>
  );
};

export default PokemonCard;
