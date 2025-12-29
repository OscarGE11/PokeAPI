import { cn } from "@/lib/utils";
import Link from "next/link";
import { use } from "react";

interface PokemonProps {
  name: string;
  url: string;
}

const API_URL: string | undefined =
  `${process.env.NEXT_PUBLIC_API_URL}?limit=50`;

async function loadData() {
  return (await fetch(API_URL || "")).json();
}

export default function Home() {
  const data = use(loadData());
  const pokemonList = data.results;

  return (
    <div className="text-center justify-center flex w-full max-w-6xl mx-auto">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="font-bold text-4xl py-2">Pokemons</th>
          </tr>
        </thead>
        <tbody>
          {pokemonList.map((pokemon: PokemonProps) => (
            <tr
              key={pokemon.name}
              className="odd:bg-slate-950 even:bg-slate-900 hover:bg-slate-800  transition"
            >
              <td
                className={cn(
                  "py-2 text-center text-blue-200 uppercase text-xl font-semibold border-2 border-gray-400",
                )}
              >
                <Link href={pokemon.name}>
                  <p className="hover:scale-105 hover:text-blue-700 transition duration-300 ">
                    {pokemon.name}
                  </p>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
