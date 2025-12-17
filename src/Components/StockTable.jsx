import { stockData } from "../data/stocks";
import { motion } from "framer-motion";

export default function StockTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900/50 border border-slate-800 rounded-2xl shadow-xl p-6"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold text-slate-100">Market Trends</h3>
        <span className="text-xs text-slate-500 bg-slate-800 px-3 py-1 rounded-full">Updated 2m ago</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="border-b border-slate-800">
            <tr>
              <th className="py-3 text-left text-slate-500 font-medium uppercase text-xs">Stock</th>
              <th className="py-3 text-slate-500 font-medium uppercase text-xs">Low</th>
              <th className="py-3 text-slate-500 font-medium uppercase text-xs">High</th>
              <th className="py-3 text-slate-500 font-medium uppercase text-xs">Current</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((s, i) => (
              <motion.tr
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="border-b border-slate-800/50 hover:bg-slate-800/30 transition"
              >
                <td className="py-4 font-bold text-slate-200">{s.name}</td>
                <td className="py-4 text-center text-rose-400">Rs {s.low}</td>
                <td className="py-4 text-center text-amber-400 font-semibold">Rs {s.high}</td>
                <td className="py-4 text-center text-slate-300 font-semibold">Rs {s.avg}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-800">
        <button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 py-3 rounded-lg font-bold transition-all">
          Explore All Markets →
        </button>
      </div>
    </motion.div>
  );
}