import { SignedIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function ProtectedCard({ children }) {
  return (
    <SignedIn>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl"
      >
        {children}
      </motion.div>
    </SignedIn>
  );
}
