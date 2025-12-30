import type { ParamValue } from "next/dist/server/request/params";

const API_URL: string | undefined =
  `${process.env.NEXT_PUBLIC_API_URL}`;

export const getPokemon = async (pokemonName: ParamValue) => {
  
    const data = await fetch(`${API_URL}/${pokemonName}` || "");
    console.log(data);
    return data.json();
};

export const getPokemons = async () => {
    const data = await fetch(`${API_URL}?limit=100` || "");
    return data.json();
};