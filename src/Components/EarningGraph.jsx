import { investmentGrowthData } from "../data/stocks";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function EarningsGraph() {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="font-semibold mb-3">Projected Growth</h3>

      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={investmentGrowthData}>
          <XAxis dataKey="period" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
