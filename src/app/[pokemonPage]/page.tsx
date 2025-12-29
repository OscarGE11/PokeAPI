"use client";
import { getPokemon } from "@/services/pokemon";
import Image from "next/image";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { typeColors } from "@/lib/objects";

interface TypeProps {
  type: { name: string };
}

interface PokemonProps {
  sprites: { front_default: string | StaticImport };
  name: string;
  types: TypeProps[];
}

export default function Pokemon() {
  const params = useParams();
  const pokemonName = params.pokemonPage;
  const [pokemon, setPokemon] = useState<PokemonProps>();

  useEffect(() => {
    getPokemon(pokemonName).then(setPokemon);
  }, [pokemonName]);

  console.log(pokemon);

  if (!pokemon) return <div>Cargando...</div>;

  return (
    <div className="flex items-center rounded-2xl bg-gray-200 shadow-xl">
      <div className="flex flex-col relative">
        <Image
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          width="256"
          height="256"
        />
        <div className="flex gap-2 absolute bottom-10 left-12">
          {pokemon.types.map((type) => (
            <span
              className={cn(
                typeColors[type.type.name],
                "rounded-xl px-3 py-1 font-semibold shadow-xl border ",
              )}
              key={type.type.name}
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
      <p className="font-semibold uppercase">{pokemon.name}</p>
    </div>
  );
}
