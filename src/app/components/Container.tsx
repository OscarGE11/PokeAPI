import type { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen px-10 py-5 bg-linear-to-bl from-slate-300 to-slate-800">
      {children}
    </div>
  );
}
