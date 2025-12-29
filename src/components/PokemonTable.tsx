import type { Pokemon } from "@/models/pokemon";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function PokemonTable({
  pokemonList,
}: {
  pokemonList: Pokemon[];
}) {
  return (
    <div>
      <table className="w-full table-fixed mt-2">
        <thead></thead>
        <tbody>
          {pokemonList.map((pokemon: Pokemon) => (
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
