import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative rounded-2xl overflow-hidden shadow-xl col-span-1 md:col-span-3"
    >
      <img
        src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Opaque overlay */}
      <div className="absolute inset-0 bg-slate-900/70" />

      <div className="relative p-10 text-white">
        <h2 className="text-4xl font-bold">Invest With Confidence</h2>
        <p className="mt-4 text-lg opacity-90">
          Clean insights • Smart predictions • Long-term growth
        </p>
      </div>
    </motion.div>
  );
}
