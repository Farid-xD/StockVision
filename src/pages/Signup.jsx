import { SignUp } from "@clerk/clerk-react";
import { motion } from "framer-motion";

export default function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full items-center relative z-10">
        
        {/* LEFT - Brand with Animated Logo */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center text-white order-2 md:order-1"
        >
          <div className="text-center">
            {/* Animated Logo */}
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                delay: 0.5,
                duration: 1,
                type: "spring",
                stiffness: 200
              }}
              className="mb-6 flex justify-center"
            >
              <motion.div
                animate={{ 
                  rotate: [0, -5, 0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 via-blue-500 to-teal-400 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/50">
                  <svg className="w-14 h-14 text-white" viewBox="0 0 24 24" fill="none">
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                      d="M3 3L8 8L13 3L18 8L23 3"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 1 }}
                      d="M3 12L8 17L13 12L18 17L23 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                
                {/* Glow Effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-teal-400 rounded-2xl blur-xl -z-10"
                />
              </motion.div>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-6xl font-extrabold tracking-wide mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-teal-400 bg-clip-text text-transparent"
            >
              StockVision
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-xl opacity-80"
            >
              Start Your Investment Journey
            </motion.p>
          </div>
        </motion.div>

        {/* MIDDLE - Title */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hidden md:flex items-center justify-center text-white text-4xl font-bold order-1 md:order-2"
        >
          <div className="text-center">
            <motion.div
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl mb-4"
            >
              🚀
            </motion.div>
            <div className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">
              Create Account
            </div>
          </div>
        </motion.div>

        {/* RIGHT - Sign Up Component */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="flex items-center justify-center order-3"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
            <SignUp 
              routing="path" 
              path="/signup"
              signInUrl="/login"
              afterSignUpUrl="/"
              appearance={{
                elements: {
                  rootBox: "w-full",
                  card: "bg-transparent shadow-none"
                }
              }}
            />
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}