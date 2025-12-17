import { Link } from "react-router-dom";
import { UserButton, SignedIn, SignedOut } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("light-mode");
  };

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-8 py-2.5 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.4 }}
            className="w-7 h-7 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg"
          >
            <svg className="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none">
              <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
          
          <h1 className="text-lg font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
            StockVision
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-5 items-center">
          <Link 
            to="/" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm"
          >
            Dashboard
          </Link>
          <Link 
            to="/market-watch" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm"
          >
            Market Watch
          </Link>
          <Link 
            to="/ai-predict" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm flex items-center gap-1"
          >
            <span>🤖</span>
            AI Predict
          </Link>
          <Link 
            to="/future" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm"
          >
            Trading
          </Link>
          <Link 
            to="/about" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="text-slate-400 hover:text-amber-400 transition-colors font-medium text-sm"
          >
            Contact
          </Link>
        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-8 h-8 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-lg flex items-center justify-center transition text-lg"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <SignedIn>
            <UserButton 
              afterSignOutUrl="/login"
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8"
                }
              }}
            />
          </SignedIn>
          
          <SignedOut>
            <Link 
              to="/login" 
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-4 py-1.5 rounded-lg font-bold text-sm transition-all"
            >
              Sign In
            </Link>
          </SignedOut>
        </div>
      </div>
    </motion.nav>
  );
}