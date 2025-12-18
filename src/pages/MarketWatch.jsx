import { motion } from "framer-motion";
import { useState } from "react";

export default function MarketWatch() {
  const [sortBy, setSortBy] = useState("gain"); // "gain" or "loss"

  const marketData = [
    { symbol: "AAPL", name: "Apple Inc.", price: 17550, change: 8.2, volume: "5.2M", signal: "BUY", trend: "up" },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 48920, change: 12.5, volume: "8.1M", signal: "BUY", trend: "up" },
    { symbol: "MSFT", name: "Microsoft", price: 37040, change: 5.7, volume: "4.5M", signal: "BUY", trend: "up" },
    { symbol: "GOOGL", name: "Alphabet", price: 16020, change: 3.4, volume: "3.8M", signal: "BUY", trend: "up" },
    { symbol: "META", name: "Meta Platforms", price: 35680, change: 6.9, volume: "6.2M", signal: "BUY", trend: "up" },
    { symbol: "AMZN", name: "Amazon", price: 14750, change: 4.2, volume: "5.9M", signal: "BUY", trend: "up" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 24580, change: -2.8, volume: "12.3M", signal: "SELL", trend: "down" },
    { symbol: "NFLX", name: "Netflix", price: 45230, change: -1.5, volume: "3.4M", signal: "SELL", trend: "down" },
    { symbol: "AMD", name: "AMD Inc.", price: 14890, change: -3.2, volume: "7.8M", signal: "SELL", trend: "down" },
    { symbol: "INTC", name: "Intel Corp.", price: 4320, change: -5.1, volume: "9.2M", signal: "SELL", trend: "down" },
  ];

  const sortedData = [...marketData].sort((a, b) => {
    if (sortBy === "gain") {
      return b.change - a.change;
    } else {
      return a.change - b.change;
    }
  });

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center"
        >
          <div>
            <h1 className="text-4xl font-bold text-slate-100 mb-2">Market Watch</h1>
            <p className="text-slate-400">Real-time stock movements and trading signals</p>
          </div>
          
          <div className="flex gap-3">
            <button
              onClick={() => setSortBy("gain")}
              className={`px-5 py-2.5 rounded-lg font-semibold transition text-sm ${
                sortBy === "gain"
                  ? "bg-amber-500 text-slate-950"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              📈 Top Gainers
            </button>
            <button
              onClick={() => setSortBy("loss")}
              className={`px-5 py-2.5 rounded-lg font-semibold transition text-sm ${
                sortBy === "loss"
                  ? "bg-rose-500 text-white"
                  : "bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              📉 Top Losers
            </button>
          </div>
        </motion.div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Advancing", value: "6", color: "text-amber-400" },
            { label: "Declining", value: "4", color: "text-rose-400" },
            { label: "Unchanged", value: "0", color: "text-slate-400" },
            { label: "Active Stocks", value: "10", color: "text-slate-100" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 text-center"
            >
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">{stat.label}</div>
              <div className={`text-3xl font-bold ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Stocks Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-900 border-b border-slate-800">
                <tr>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Symbol</th>
                  <th className="text-left py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Company</th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Price</th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Change</th>
                  <th className="text-right py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Volume</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Signal</th>
                  <th className="text-center py-4 px-6 text-slate-400 font-semibold text-sm uppercase tracking-wider">Trend</th>
                </tr>
              </thead>
              <tbody>
                {sortedData.map((stock, i) => (
                  <motion.tr
                    key={stock.symbol}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-slate-800/50 hover:bg-slate-800/30 transition"
                  >
                    <td className="py-5 px-6">
                      <div className="font-bold text-amber-400 text-lg">{stock.symbol}</div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-slate-300">{stock.name}</div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <div className="text-slate-100 font-bold text-lg">Rs {stock.price.toLocaleString()}</div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <div className={`font-bold text-lg ${stock.change > 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                        {stock.change > 0 ? '+' : ''}{stock.change}%
                      </div>
                    </td>
                    <td className="py-5 px-6 text-right">
                      <div className="text-slate-400">{stock.volume}</div>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <span className={`px-4 py-2 rounded-lg font-bold text-sm ${
                        stock.signal === 'BUY'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/40'
                      }`}>
                        {stock.signal}
                      </span>
                    </td>
                    <td className="py-5 px-6 text-center">
                      <div className={`text-2xl ${stock.trend === 'up' ? 'text-amber-400' : 'text-rose-400'}`}>
                        {stock.trend === 'up' ? '▲' : '▼'}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Info Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6"
        >
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="text-blue-400 font-bold mb-2">Trading Tips</h4>
              <p className="text-slate-300 text-sm">
                BUY signals indicate stocks showing strong upward momentum. SELL signals suggest potential 
                downward pressure. Always combine these signals with your own research and risk assessment 
                before making any trading decisions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}