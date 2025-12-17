import { motion } from "framer-motion";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function FutureTrading() {
  const [activeTab, setActiveTab] = useState("futures");

  const contracts = [
    { symbol: "AAPL", name: "Apple Inc.", price: 17550, change: +1.8, volume: "82K" },
    { symbol: "GOOGL", name: "Alphabet", price: 16020, change: +0.9, volume: "61K" },
    { symbol: "TSLA", name: "Tesla Inc.", price: 29080, change: -0.6, volume: "125K" },
    { symbol: "MSFT", name: "Microsoft", price: 37040, change: +2.1, volume: "73K" },
  ];

  const chartData = [
    { time: "09:00", price: 17200 },
    { time: "10:00", price: 17350 },
    { time: "11:00", price: 17280 },
    { time: "12:00", price: 17420 },
    { time: "13:00", price: 17380 },
    { time: "14:00", price: 17550 },
    { time: "15:00", price: 17610 },
  ];

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
            <h1 className="text-4xl font-bold text-slate-100 mb-2">Derivatives Trading</h1>
            <p className="text-slate-500">Futures & Options Platform</p>
          </div>
          <div className="flex gap-3">
            <button className="bg-slate-900 border border-slate-800 text-slate-300 px-5 py-2.5 rounded-lg hover:border-amber-500/50 transition text-sm font-medium">
              ⚙️ Settings
            </button>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded-lg font-bold transition text-sm">
              📊 Market Data
            </button>
          </div>
        </motion.div>

        {/* Market Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "NIFTY 50", value: "21,456", change: "+0.42%", up: true },
            { label: "BANK NIFTY", value: "45,234", change: "-0.15%", up: false },
            { label: "VIX Index", value: "14.25", change: "+3.2%", up: true },
            { label: "FII Activity", value: "Rs 456 Cr", change: "Net Buy", up: true },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5"
            >
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">{stat.label}</div>
              <div className="text-slate-100 text-2xl font-bold mb-1">{stat.value}</div>
              <div className={`text-xs font-semibold ${stat.up ? 'text-amber-400' : 'text-rose-400'}`}>
                {stat.change}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main Trading Area */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-bold text-slate-100">AAPL Futures</h2>
                <p className="text-slate-500 text-sm">Expiry: Jan 30, 2025</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-slate-100">Rs 17,550</div>
                <div className="text-amber-400 text-sm font-semibold">+1.8% Today</div>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" domain={['dataMin - 100', 'dataMax + 100']} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#f59e0b"
                  strokeWidth={2.5}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>

            <div className="grid grid-cols-3 gap-4 mt-6">
              <button className="bg-amber-500/10 border-2 border-amber-500 text-amber-400 py-3 rounded-lg font-bold hover:bg-amber-500/20 transition">
                BUY
              </button>
              <button className="bg-rose-500/10 border-2 border-rose-500 text-rose-400 py-3 rounded-lg font-bold hover:bg-rose-500/20 transition">
                SELL
              </button>
              <button className="bg-slate-800 border border-slate-700 text-slate-300 py-3 rounded-lg font-semibold hover:bg-slate-700 transition">
                Alert
              </button>
            </div>
          </motion.div>

          {/* Contracts List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-slate-100 mb-4">Active Contracts</h3>
            <div className="space-y-3">
              {contracts.map((contract, i) => (
                <div
                  key={i}
                  className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-xl p-4 cursor-pointer transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="font-bold text-slate-100">{contract.symbol}</div>
                      <div className="text-xs text-slate-500">{contract.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-slate-100">Rs {contract.price.toLocaleString()}</div>
                      <div className={`text-xs font-semibold ${contract.change > 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                        {contract.change > 0 ? '+' : ''}{contract.change}%
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-slate-500">Volume: {contract.volume}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Options Chain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-100">Options Chain</h3>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTab("futures")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === "futures" 
                    ? "bg-amber-500 text-slate-950" 
                    : "bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Futures
              </button>
              <button 
                onClick={() => setActiveTab("options")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === "options" 
                    ? "bg-amber-500 text-slate-950" 
                    : "bg-slate-800 text-slate-400 hover:text-slate-200"
                }`}
              >
                Options
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800">
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">Strike</th>
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">Type</th>
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">Premium</th>
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">IV</th>
                  <th className="text-right py-3 text-slate-500 font-medium text-sm">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { strike: 17000, type: "Call", premium: 850, iv: "24%" },
                  { strike: 17500, type: "Call", premium: 520, iv: "22%" },
                  { strike: 18000, type: "Call", premium: 280, iv: "20%" },
                  { strike: 17000, type: "Put", premium: 320, iv: "23%" },
                ].map((option, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-900/50 transition">
                    <td className="py-4 text-slate-200 font-semibold">Rs {option.strike.toLocaleString()}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        option.type === 'Call' 
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30' 
                          : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                      }`}>
                        {option.type}
                      </span>
                    </td>
                    <td className="py-4 text-slate-200">Rs {option.premium}</td>
                    <td className="py-4 text-slate-400">{option.iv}</td>
                    <td className="py-4 text-right">
                      <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold transition">
                        Trade
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "Greeks Analysis", icon: "📐", desc: "Calculate Delta, Gamma, Theta & Vega" },
            { title: "Risk Manager", icon: "🛡️", desc: "Monitor and manage portfolio risk" },
            { title: "Strategy Tester", icon: "🎲", desc: "Backtest your trading strategies" },
          ].map((tool, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6 hover:border-amber-500/50 transition cursor-pointer group"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h4 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-amber-400 transition">
                {tool.title}
              </h4>
              <p className="text-slate-500 text-sm">{tool.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}