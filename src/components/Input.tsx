import { cn } from "@/lib/utils";
import type { InputHTMLAttributes } from "react";

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: SearchProps) {
  return (
    <input
      {...props}
      className={cn(
        "focus:outline-none flex justify-start px-4 py-1 border-2 border-slate-800 rounded-lg bg-slate-500",
        className,
      )}
    ></input>
  );
}
