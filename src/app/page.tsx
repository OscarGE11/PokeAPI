"use client";
import Input from "@/components/Input";
import PokemonTable from "@/components/PokemonTable";
import type { Pokemon } from "@/models/pokemon";
import { getPokemons } from "@/services/pokemon";

import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemons();
      setPokemonList(data.results);
    };

    fetchPokemon();
  }, []);

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    pokemon.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
  );

  return (
    <div className="text-center justify-center flex-col w-full max-w-6xl mx-auto">
      <Input
        type="text"
        placeholder="Busca tu Pokemon..."
        onChange={(e) => setFilter(e.target.value)}
      />

      <PokemonTable pokemonList={filteredPokemonList} />
    </div>
  );
}
