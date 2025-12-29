import Link from "next/link";

export default function Header() {
  return (
    <div className="h-24 text-center flex justify-center items-center bg-slate-700">
      <Link href="/" className="font-bold text-white uppercase text-4xl">
        Pokemones
      </Link>
    </div>
  );
}
