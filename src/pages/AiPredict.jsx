import { motion } from "framer-motion";
import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from "recharts";

export default function AiPredict() {
  const [selectedStock, setSelectedStock] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);

  const stocks = [
    { symbol: "AAPL", name: "Apple Inc." },
    { symbol: "GOOGL", name: "Alphabet Inc." },
    { symbol: "TSLA", name: "Tesla Inc." },
    { symbol: "MSFT", name: "Microsoft Corp." },
    { symbol: "AMZN", name: "Amazon.com Inc." },
    { symbol: "NVDA", name: "NVIDIA Corp." },
    { symbol: "META", name: "Meta Platforms" },
    { symbol: "NFLX", name: "Netflix Inc." }
  ];

  const generatePrediction = () => {
    if (!selectedStock) return;
    
    setLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      const currentPrice = Math.floor(Math.random() * 3000) + 500;
      const predictedPrice = currentPrice * (1 + (Math.random() * 0.3 - 0.1));
      const confidence = Math.floor(Math.random() * 20) + 70;
      
      // Generate chart data
      const historicalData = [];
      let price = currentPrice * 0.8;
      for (let i = 0; i < 30; i++) {
        price += (Math.random() - 0.5) * 50;
        historicalData.push({
          day: i - 29,
          actual: Math.floor(price),
          predicted: null
        });
      }
      
      // Add current price
      historicalData.push({
        day: 0,
        actual: Math.floor(currentPrice),
        predicted: Math.floor(currentPrice)
      });
      
      // Add predictions
      price = currentPrice;
      for (let i = 1; i <= 30; i++) {
        price += (predictedPrice - currentPrice) / 30 + (Math.random() - 0.5) * 20;
        historicalData.push({
          day: i,
          actual: null,
          predicted: Math.floor(price)
        });
      }
      
      setPrediction({
        currentPrice: Math.floor(currentPrice),
        predictedPrice: Math.floor(predictedPrice),
        change: ((predictedPrice - currentPrice) / currentPrice * 100).toFixed(2),
        confidence: confidence,
        trend: predictedPrice > currentPrice ? "Bullish" : "Bearish",
        chartData: historicalData,
        signals: {
          technical: predictedPrice > currentPrice ? "Buy" : "Sell",
          sentiment: Math.random() > 0.5 ? "Positive" : "Neutral",
          risk: confidence > 80 ? "Low" : confidence > 70 ? "Medium" : "High"
        }
      });
      
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold text-slate-100 mb-3">AI Stock Predictor</h1>
          <p className="text-slate-400 text-lg">Powered by Machine Learning & Market Analysis</p>
        </motion.div>

        {/* Selection Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8"
        >
          <div className="max-w-2xl mx-auto">
            <label className="block text-slate-300 font-semibold mb-3 text-lg">
              Select Stock to Predict
            </label>
            <div className="flex gap-4">
              <select
                value={selectedStock}
                onChange={(e) => setSelectedStock(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700 text-slate-100 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 text-lg"
              >
                <option value="">Choose a stock...</option>
                {stocks.map((stock) => (
                  <option key={stock.symbol} value={stock.symbol}>
                    {stock.symbol} - {stock.name}
                  </option>
                ))}
              </select>
              <button
                onClick={generatePrediction}
                disabled={!selectedStock || loading}
                className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 px-8 py-3 rounded-xl font-bold text-lg transition-all disabled:cursor-not-allowed"
              >
                {loading ? "Analyzing..." : "🤖 Predict"}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-slate-900/50 border border-slate-800 rounded-2xl p-12 text-center"
          >
            <div className="text-6xl mb-4 animate-bounce">🔮</div>
            <div className="text-2xl font-bold text-slate-100 mb-2">AI Processing...</div>
            <div className="text-slate-400">Analyzing historical data, market trends, and sentiment</div>
          </motion.div>
        )}

        {/* Prediction Results */}
        {prediction && !loading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-slate-500 text-sm mb-2">Current Price</div>
                <div className="text-3xl font-bold text-slate-100">Rs {prediction.currentPrice.toLocaleString()}</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-slate-500 text-sm mb-2">30-Day Prediction</div>
                <div className="text-3xl font-bold text-amber-400">Rs {prediction.predictedPrice.toLocaleString()}</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-slate-500 text-sm mb-2">Expected Change</div>
                <div className={`text-3xl font-bold ${prediction.change > 0 ? 'text-amber-400' : 'text-rose-400'}`}>
                  {prediction.change > 0 ? '+' : ''}{prediction.change}%
                </div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <div className="text-slate-500 text-sm mb-2">Confidence</div>
                <div className="text-3xl font-bold text-slate-100">{prediction.confidence}%</div>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-2xl font-bold text-slate-100 mb-6">Price Prediction Chart</h3>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={prediction.chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis 
                    dataKey="day" 
                    stroke="#64748b"
                    label={{ value: 'Days', position: 'insideBottom', offset: -5, fill: '#64748b' }}
                  />
                  <YAxis 
                    stroke="#64748b"
                    label={{ value: 'Price (Rs)', angle: -90, position: 'insideLeft', fill: '#64748b' }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    name="Historical"
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#f59e0b"
                    strokeWidth={3}
                    strokeDasharray="5 5"
                    name="AI Prediction"
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-100 mb-4">📈 Market Trend</h4>
                <div className={`text-2xl font-bold mb-2 ${prediction.trend === 'Bullish' ? 'text-amber-400' : 'text-rose-400'}`}>
                  {prediction.trend}
                </div>
                <p className="text-slate-400 text-sm">
                  {prediction.trend === 'Bullish' 
                    ? 'Strong upward momentum expected based on market analysis'
                    : 'Potential downward pressure identified in the market'}
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-100 mb-4">🎯 Trading Signal</h4>
                <div className={`text-2xl font-bold mb-2 ${prediction.signals.technical === 'Buy' ? 'text-amber-400' : 'text-rose-400'}`}>
                  {prediction.signals.technical}
                </div>
                <p className="text-slate-400 text-sm">
                  Technical indicators suggest {prediction.signals.technical.toLowerCase()} opportunity
                </p>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-bold text-slate-100 mb-4">⚠️ Risk Level</h4>
                <div className={`text-2xl font-bold mb-2 ${
                  prediction.signals.risk === 'Low' ? 'text-amber-400' : 
                  prediction.signals.risk === 'Medium' ? 'text-orange-400' : 'text-rose-400'
                }`}>
                  {prediction.signals.risk}
                </div>
                <p className="text-slate-400 text-sm">
                  Based on volatility and confidence score
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h4 className="text-orange-400 font-bold mb-2">Investment Disclaimer</h4>
                  <p className="text-slate-300 text-sm">
                    This prediction is generated by AI and should not be considered as financial advice. 
                    Past performance does not guarantee future results. Always do your own research and 
                    consult with a financial advisor before making investment decisions.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}