import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import StockTable from "../Components/StockTable";
import EarningsGraph from "../Components/EarningGraph";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function Home() {
  const [principal, setPrincipal] = useState(50000);
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(8);
  const [duration, setDuration] = useState(10);

  // Calculate projections
  const calculateProjection = () => {
    let data = [];
    let total = principal;
    
    for (let year = 0; year <= duration; year++) {
      if (year > 0) {
        for (let month = 0; month < 12; month++) {
          total = total * (1 + rate/100/12) + monthly;
        }
      }
      data.push({
        year: year,
        amount: Math.round(total)
      });
    }
    return data;
  };

  const projectionData = calculateProjection();
  const finalAmount = projectionData[projectionData.length - 1].amount;
  const totalInvested = principal + (monthly * duration * 12);
  const profit = finalAmount - totalInvested;

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Top Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-end gap-3"
        >
          <Link 
            to="/dashboard"
            className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 px-6 py-2.5 rounded-lg font-bold transition-all flex items-center gap-2"
          >
            <span>📊</span>
            Dashboard
          </Link>
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-2.5 rounded-lg font-bold transition-all shadow-lg hover:shadow-amber-500/30 flex items-center gap-2">
            <span>⚡</span>
            Link Trading Account
          </button>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4"
        >
          {[
            { label: "Total Value", value: "Rs 2,45,890", change: "+8.2%", up: true },
            { label: "Day Change", value: "Rs 4,125", change: "+1.7%", up: true },
            { label: "Total Profit", value: "Rs 45,890", change: "+23%", up: true },
            { label: "Available", value: "Rs 25,000", change: "Cash", up: true }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.08 }}
              className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 hover:border-amber-500/30 transition-all"
            >
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">{stat.label}</div>
              <div className="text-slate-100 text-2xl font-bold mb-1">{stat.value}</div>
              <div className={`text-xs font-semibold ${stat.up ? 'text-amber-400' : 'text-rose-400'}`}>
                {stat.change}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Investment Planner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
        >
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-100 mb-1">Investment Planner</h2>
              <p className="text-slate-500 text-sm">Plan your financial future</p>
            </div>
            <div className="text-right">
              <div className="text-slate-500 text-sm">Projected Value</div>
              <div className="text-3xl font-bold text-amber-400">Rs {(finalAmount / 100000).toFixed(1)}L</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Controls */}
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Initial Amount</label>
                  <span className="text-amber-400 font-bold">Rs {principal.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={principal}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Monthly Investment</label>
                  <span className="text-amber-400 font-bold">Rs {monthly.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Annual Return</label>
                  <span className="text-amber-400 font-bold">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="20"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-slate-300 text-sm font-medium">Time Period</label>
                  <span className="text-amber-400 font-bold">{duration} Years</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-500 text-xs mb-1">Invested</div>
                  <div className="text-slate-200 font-bold text-sm">Rs {(totalInvested / 100000).toFixed(1)}L</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-500 text-xs mb-1">Returns</div>
                  <div className="text-amber-400 font-bold text-sm">Rs {(profit / 100000).toFixed(1)}L</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-3 text-center">
                  <div className="text-slate-500 text-xs mb-1">Growth</div>
                  <div className="text-amber-400 font-bold text-sm">{((profit/totalInvested)*100).toFixed(0)}%</div>
                </div>
              </div>
            </div>

            {/* Right: Chart */}
            <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-6">
              <ResponsiveContainer width="100%" height={320}>
                <LineChart data={projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    dataKey="year" 
                    stroke="#64748b"
                    label={{ value: 'Years', position: 'insideBottom', offset: -5, fill: '#64748b' }}
                  />
                  <YAxis 
                    stroke="#64748b"
                    tickFormatter={(value) => `${(value/100000).toFixed(0)}L`}
                  />
                  <Tooltip
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      border: '1px solid #334155', 
                      borderRadius: '8px',
                      color: '#f1f5f9'
                    }}
                    formatter={(value) => [`Rs ${value.toLocaleString()}`, 'Amount']}
                  />
                  <Line
                    type="monotone"
                    dataKey="amount"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    dot={{ fill: '#f59e0b', r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        {/* Stock Table and Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <StockTable />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <EarningsGraph />
          </motion.div>
        </div>
      </div>
    </div>
  );
}