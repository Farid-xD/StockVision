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
        {/* Logo - Using exact image logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg">
            <svg className="w-5 h-5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M3 3L21 21M3 21L21 3" strokeLinecap="round"/>
              <polyline points="3,17 9,11 15,14 21,8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
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