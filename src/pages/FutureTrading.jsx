import { motion } from "framer-motion";

export default function FutureTrading() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="min-h-screen bg-slate-100 p-8"
    >
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">Future Trading</h1>
        <p className="text-slate-600 mb-6">
          Advanced tools for futures, options, and derivatives trading.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl hover:shadow transition">
            Options Simulator
          </div>
          <div className="p-6 border rounded-xl hover:shadow transition">
            Risk Analyzer
          </div>
          <div className="p-6 border rounded-xl hover:shadow transition">
            Market Forecasts
          </div>
        </div>
      </div>
    </motion.div>
  );
}
