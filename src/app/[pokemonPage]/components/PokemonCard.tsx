"use client";

import type { PokemonKeyProps } from "@/app/[pokemonPage]/page";
import { typeColors } from "@/lib/objects";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect } from "react";

export default function PokemonCard({ pokemon }: { pokemon: PokemonKeyProps }) {
  useEffect(() => {
    console.log(pokemon);
  });

  return (
    <div className="flex flex-col w-1/4 bg-alt rounded-2xl p-5 shadow-2xl items-center justify-center ml-48">
      <p className="font-semibold uppercase text-green-500">{pokemon.name}</p>
      <Image
        src={
          pokemon.sprites.other["official-artwork"].front_default ??
          "/placeholder.png"
        }
        alt={pokemon.name}
        width="340"
        height="300"
      />
      <div className="flex gap-2">
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
  );
}
