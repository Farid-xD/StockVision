import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-100 flex items-center justify-center p-8"
    >
      <div className="max-w-4xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4">About StockVision</h1>
        <p className="text-slate-600 leading-relaxed">
          StockVision is a modern investment platform designed to help users
          analyze markets, simulate growth, and make confident financial
          decisions using clean visuals and secure systems.
        </p>
      </div>
    </motion.div>
  );
}
