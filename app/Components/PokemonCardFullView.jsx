import React, { useEffect } from "react";
import axios from "axios";

const PokemonCardFullView = ({ name }) => {
  const URL = `https://pokeapi.co/api/v2/pokemon`;
  const [pokemonData, setPokemonData] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await axios.get(`${URL}${name}`);
        setPokemonData(response);
      } catch (error) {
        console.error("There had been a mistake", error);
      }
    };
    fetch();
  }, []);

  return <div>PokemonCardFullView</div>;
};

export default PokemonCardFullView;
