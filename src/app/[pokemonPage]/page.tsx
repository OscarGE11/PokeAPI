"use client";
import { getPokemon } from "@/services/pokemon";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import PokemonCard from "@/app/[pokemonPage]/components/PokemonCard";
import StatsBarchart from "@/app/[pokemonPage]/components/StatsBarChart";
import type { Stat } from "@/models/pokemon";
import { refactorPokemonStats } from "@/lib/utils";
import Loader from "@/components/Loader";

interface TypeProps {
  type: { name: string };
}

export interface PokemonKeyProps {
  sprites: {
    front_default: string | StaticImport;
    other: {
      "official-artwork": {
        front_default: string | StaticImport;
      };
    };
  };
  name: string;
  types: TypeProps[];
  stats: Stat[];
}

export default function Pokemon() {
  const params = useParams();
  const pokemonName = params.pokemonPage;
  const [pokemon, setPokemon] = useState<PokemonKeyProps>();

  useEffect(() => {
    getPokemon(pokemonName).then(setPokemon);
  }, [pokemonName]);

  if (!pokemon) return <Loader />;

  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <PokemonCard pokemon={pokemon} />
        <div className="flex flex-col w-full bg-alt rounded-2xl p-5 shadow-2xl items-center ml-10 mr-12">
          <h1 className="text-title font-extrabold text-xl mb-1">STATS</h1>
          <StatsBarchart stats={refactorPokemonStats(pokemon.stats)} />
        </div>
      </div>
    </div>
  );
}
