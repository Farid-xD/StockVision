import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FutureTrading from "./pages/FutureTrading";

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar is always visible */}
      <Navbar />

      <Routes>
        {/* Login page only accessible when signed out */}
        <Route 
          path="/login" 
          element={
            <SignedOut>
              <Login />
            </SignedOut>
          } 
        />

        {/* Protected routes (Home & FutureTrading) */}
        <Route 
          path="/" 
          element={
            <SignedIn>
              <Home />
            </SignedIn>
          } 
        />
        <Route 
          path="/future" 
          element={
            <SignedIn>
              <FutureTrading />
            </SignedIn>
          } 
        />

        {/* Public pages */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Fallback: redirect signed-out users to Clerk sign-in */}
        <Route 
          path="*" 
          element={
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}
