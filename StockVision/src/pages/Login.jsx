import { SignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";


export default function Login() {
return (
<div className="grid grid-cols-1 md:grid-cols-3 min-h-screen bg-gradient-to-br from-indigo-900 to-black">


{/* LEFT CARD */}
<motion.div
initial={{ x: -100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
className="flex items-center justify-center"
>
<div className="bg-white rounded-2xl shadow-xl p-6">
<SignIn routing="path" path="/login" />
</div>
</motion.div>


{/* MIDDLE */}
<div className="hidden md:flex items-center justify-center text-white text-4xl font-bold">
Secure Login
</div>


{/* RIGHT BRAND */}
<motion.div
initial={{ x: 100, opacity: 0 }}
animate={{ x: 0, opacity: 1 }}
className="flex items-center justify-center text-white"
>
<h1 className="text-6xl font-extrabold tracking-wide">StockVision</h1>
</motion.div>
</div>
);
}