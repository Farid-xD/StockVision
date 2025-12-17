import { Link } from "react-router-dom";
import { UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";


export default function Navbar() {
return (
<motion.nav
initial={{ y: -50 }}
animate={{ y: 0 }}
className="flex justify-between items-center px-8 py-4 bg-slate-900 text-white"
>
<h1 className="text-2xl font-bold">StockVision</h1>
<div className="flex gap-6">
<Link to="/">Home</Link>
<Link to="/future">Future Trading</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
<UserButton />
</div>
</motion.nav>
);
}