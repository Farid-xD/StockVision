import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                  <path d="M3 3L8 8L13 3L18 8L23 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12L8 17L13 12L18 17L23 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">StockVision</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Empowering investors with AI-driven insights and cutting-edge technology.
            </p>
            <div className="flex gap-3">
              <a href="https://github.com/uraan-studios" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                <span className="text-white">💻</span>
              </a>
              <a href="https://www.linkedin.com/in/farid-muhammad-3238132ab/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition">
                <span className="text-white">💼</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-400 hover:text-teal-400 transition text-sm">Home</Link>
              <Link to="/future" className="block text-gray-400 hover:text-teal-400 transition text-sm">Future Trading</Link>
              <Link to="/about" className="block text-gray-400 hover:text-teal-400 transition text-sm">About Us</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-teal-400 transition text-sm">Contact</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-teal-400 transition text-sm">Help Center</a>
              <a href="#" className="block text-gray-400 hover:text-teal-400 transition text-sm">API Documentation</a>
              <a href="#" className="block text-gray-400 hover:text-teal-400 transition text-sm">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-teal-400 transition text-sm">Terms of Service</a>
            </div>
          </div>

          {/* Built By */}
          <div>
            <h4 className="text-white font-semibold mb-4">Built By</h4>
            <a 
              href="https://uraanstudios.vercel.app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block mb-3"
            >
              <div className="bg-white/10 hover:bg-white/20 rounded-xl p-4 transition border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-xl">🚀</span>
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Uraan Studios</div>
                    <div className="text-gray-400 text-xs">Software Development</div>
                  </div>
                </div>
              </div>
            </a>
            <a 
              href="mailto:support@uraanstudios.com"
              className="text-teal-400 hover:text-teal-300 text-sm flex items-center gap-2 transition"
            >
              <span>📧</span>
              support@uraanstudios.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 StockVision. All rights reserved. Built with ❤️ by Uraan Studios
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">Terms</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}