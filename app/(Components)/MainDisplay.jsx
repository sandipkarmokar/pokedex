"use client";
import React, { useEffect, useState, useRef } from "react";
import PokemonCard from "./PokemonCard";
import Link from "next/link";
import axios from "axios";

const MainDisplay = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [next, setNext] = useState("");
  const [loading, setLoading] = useState(false);
  const observer = useRef(null);

  const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

  const ALL_URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(BASE_URL);
        setPokemonList(response.data.results);
        setNext(response.data.next);
      } catch (error) {
        console.error("There was an error🥲😔🥺", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleIntersection = async (entries) => {
    const target = entries[0];
    if (target.isIntersecting && next && !loading) {
      try {
        setLoading(true);
        const response = await axios.get(next);
        setPokemonList((prevList) => [...prevList, ...response.data.results]);
        setNext(response.data.next);
      } catch (error) {
        console.error("Error loading next set of items:", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    if (next) {
      observer.current = new IntersectionObserver(handleIntersection, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });

      const sentinel = document.getElementById("sentinel");
      if (sentinel) {
        observer.current.observe(sentinel);
      }
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [next, loading]);

  return (
    <div className="sm:mt-14 mt-10 grid sm:grid-cols-4 grid-cols-2 sm:gap-12 gap-4 sm:mx-0 mx-8">
      {pokemonList.map(({ name, url }, index) => {
        return (
          <Link key={name} href={`./Pokemon/${name}`}>
            <PokemonCard name={name} url={url} index={index + 1} />
          </Link>
        );
      })}
      <div id="sentinel" style={{ height: "1px", width: "1px" }}></div>
      {/* Loader */}
      {loading && <div className="text-center mt-4">Loading...</div>}
    </div>
  );
};

export default MainDisplay;
