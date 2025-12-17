import { investmentGrowthData } from "../data/stocks";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";

export default function EarningsGraph() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900/50 border border-slate-800 rounded-2xl shadow-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-100">Growth Trajectory</h3>
        <div className="text-right">
          <div className="text-xs text-slate-500">6M Performance</div>
          <div className="text-amber-400 font-bold text-lg">+67%</div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={240}>
        <LineChart data={investmentGrowthData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
          <XAxis 
            dataKey="period" 
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <YAxis 
            stroke="#64748b"
            style={{ fontSize: '12px' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#0f172a',
              border: '1px solid #334155',
              borderRadius: '8px',
              color: '#f1f5f9'
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#f59e0b"
            strokeWidth={2.5}
            dot={{ fill: '#f59e0b', r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>

      <div className="grid grid-cols-3 gap-3 mt-6 pt-4 border-t border-slate-800">
        <div className="text-center bg-slate-800/50 rounded-lg p-3">
          <div className="text-slate-500 text-xs mb-1">Initial</div>
          <div className="text-slate-200 font-bold">Rs 1,000</div>
        </div>
        <div className="text-center bg-slate-800/50 rounded-lg p-3">
          <div className="text-slate-500 text-xs mb-1">Current</div>
          <div className="text-amber-400 font-bold">Rs 2,000</div>
        </div>
        <div className="text-center bg-slate-800/50 rounded-lg p-3">
          <div className="text-slate-500 text-xs mb-1">Profit</div>
          <div className="text-amber-400 font-bold">+100%</div>
        </div>
      </div>
    </motion.div>
  );
}