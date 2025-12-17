import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const userData = {
    name: "Farid Muhammad",
    email: "farid@uraanstudios.com",
    joinedDate: "Jan 2024",
    totalInvested: 500000,
    currentValue: 587500,
    totalReturn: 87500,
    returnPercentage: 17.5
  };

  const recentTrades = [
    { stock: "AAPL", type: "BUY", quantity: 10, price: 17550, date: "Dec 15, 2024", pnl: +8250 },
    { stock: "NVDA", type: "BUY", quantity: 5, price: 48920, date: "Dec 14, 2024", pnl: +12400 },
    { stock: "MSFT", type: "SELL", quantity: 8, price: 37040, date: "Dec 13, 2024", pnl: -2100 },
    { stock: "GOOGL", type: "BUY", quantity: 15, price: 16020, date: "Dec 12, 2024", pnl: +5450 },
    { stock: "TSLA", type: "SELL", quantity: 12, price: 24580, date: "Dec 11, 2024", pnl: -3200 },
  ];

  const portfolioData = [
    { name: "AAPL", value: 175500, percentage: 30 },
    { name: "NVDA", value: 244600, percentage: 42 },
    { name: "MSFT", value: 88800, percentage: 15 },
    { name: "GOOGL", value: 78300, percentage: 13 },
  ];

  const performanceData = [
    { month: "Jul", value: 500000 },
    { month: "Aug", value: 515000 },
    { month: "Sep", value: 530000 },
    { month: "Oct", value: 545000 },
    { month: "Nov", value: 570000 },
    { month: "Dec", value: 587500 },
  ];

  const COLORS = ['#f59e0b', '#ef4444', '#3b82f6', '#10b981'];

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-start"
        >
          <div>
            <h1 className="text-4xl font-bold text-slate-100 mb-2">My Dashboard</h1>
            <p className="text-slate-400">Welcome back, {userData.name.split(' ')[0]}!</p>
          </div>
          
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 text-right">
            <div className="text-slate-500 text-sm mb-1">Member Since</div>
            <div className="text-slate-100 font-bold text-lg">{userData.joinedDate}</div>
          </div>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/30 rounded-2xl p-8"
        >
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-4xl font-bold text-slate-950">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-slate-100 mb-1">{userData.name}</h2>
              <p className="text-slate-400">{userData.email}</p>
            </div>
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-6 py-3 rounded-xl font-bold transition">
              Edit Profile
            </button>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { label: "Total Invested", value: `Rs ${userData.totalInvested.toLocaleString()}`, color: "text-slate-100" },
            { label: "Current Value", value: `Rs ${userData.currentValue.toLocaleString()}`, color: "text-amber-400" },
            { label: "Total Return", value: `Rs ${userData.totalReturn.toLocaleString()}`, color: "text-amber-400" },
            { label: "Return %", value: `+${userData.returnPercentage}%`, color: "text-amber-400" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="bg-slate-900/50 border border-slate-800 rounded-xl p-6"
            >
              <div className="text-slate-500 text-xs uppercase tracking-wider mb-2">{stat.label}</div>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Performance Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Portfolio Performance</h3>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                  formatter={(value) => [`Rs ${value.toLocaleString()}`, 'Value']}
                />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#f59e0b"
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Portfolio Allocation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-2xl font-bold text-slate-100 mb-6">Portfolio Allocation</h3>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percentage }) => `${name} ${percentage}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                    formatter={(value) => `Rs ${value.toLocaleString()}`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Recent Trades */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-slate-100">Recent Transactions</h3>
            <button className="text-amber-400 hover:text-amber-300 font-semibold text-sm">View All →</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-800">
                <tr>
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">Stock</th>
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">Type</th>
                  <th className="text-right py-3 text-slate-500 font-medium text-sm">Quantity</th>
                  <th className="text-right py-3 text-slate-500 font-medium text-sm">Price</th>
                  <th className="text-left py-3 text-slate-500 font-medium text-sm">Date</th>
                  <th className="text-right py-3 text-slate-500 font-medium text-sm">P&L</th>
                </tr>
              </thead>
              <tbody>
                {recentTrades.map((trade, i) => (
                  <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition">
                    <td className="py-4 font-bold text-amber-400">{trade.stock}</td>
                    <td className="py-4">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        trade.type === 'BUY'
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-rose-500/20 text-rose-400'
                      }`}>
                        {trade.type}
                      </span>
                    </td>
                    <td className="py-4 text-right text-slate-300">{trade.quantity}</td>
                    <td className="py-4 text-right text-slate-300">Rs {trade.price.toLocaleString()}</td>
                    <td className="py-4 text-slate-400 text-sm">{trade.date}</td>
                    <td className={`py-4 text-right font-bold ${trade.pnl > 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                      {trade.pnl > 0 ? '+' : ''}Rs {Math.abs(trade.pnl).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* P&L Report Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-slate-100 mb-6">Monthly P&L Report</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-slate-400 mb-2">Total Profit</div>
              <div className="text-3xl font-bold text-amber-400">Rs 20,900</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-slate-400 mb-2">Total Loss</div>
              <div className="text-3xl font-bold text-rose-400">Rs 5,300</div>
            </div>
            <div className="text-center p-6 bg-slate-800/50 rounded-xl">
              <div className="text-slate-400 mb-2">Net P&L</div>
              <div className="text-3xl font-bold text-amber-400">Rs 15,600</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}