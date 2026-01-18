import type { BarChartStats } from "@/models/pokemon";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

export default function StatsBarchart({ stats }: { stats: BarChartStats[] }) {
  return (
    <BarChart
      style={{
        width: "100%",
        maxWidth: "60vw",
        maxHeight: "50vh",
        aspectRatio: 1.618,
      }}
      responsive
      data={stats}
    >
      <CartesianGrid></CartesianGrid>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Tooltip />
      <Bar dataKey="value" fill="#F0D96E" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}
