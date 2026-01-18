import  { type Stat, BarChartStats } from "@/models/pokemon";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function refactorPokemonStats(stats:Stat[]):BarChartStats[]{
   return stats.map(stat => {
    return new BarChartStats(stat.stat.name,stat.base_stat)
   })
}