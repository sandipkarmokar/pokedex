import React from "react";

const PokemonCard = ({ name, url, index }) => {
  const IMAGE_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${index}.svg`;

  function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const capitalizedWord = capitalizeFirstLetter(name);

  return (
    <div className="relative cursor-pointer sm:h-72 sm:w-72 w-screen/3 bg-red-400 rounded-3xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:bg-red-400/80">
      <div className="absolute top-0 right-0 sm:m-4 m-2 sm:text-[48px] text-[32px] text-right text-white rounded-2xl">
        #{index}
      </div>
      <div className="flex justify-center sm:mt-6 mt-1">
        <img
          src={IMAGE_URL}
          alt={name}
          className="sm:rounded-3xl rounded-xl sm:h-36 h-20 sm:w-36 w-auto sm:m-8 m-4"
        />
      </div>
      <div className="flex flex-col justify-center items-center text-white">
        <p className="sm:text-[24px] text-[20px] sm:pb-0 pb-2">
          {capitalizedWord}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
