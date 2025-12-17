import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-slate-100 flex items-center justify-center p-8"
    >
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

        <form className="space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <textarea className="w-full p-3 border rounded" rows="5" placeholder="Message" />
          <button className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
}
