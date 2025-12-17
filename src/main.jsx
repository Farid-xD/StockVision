import React from "react";
import ReactDOM from "react-dom/client";
import { ClerkProvider } from "@clerk/clerk-react";
import App from "./App";
import "./index.css";

const PUBLISHABLE_KEY = "pk_test_Zmlyc3QtdGFkcG9sZS02OC5jbGVyay5hY2NvdW50cy5kZXYk";

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Clerk Publishable Key");
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ClerkProvider 
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        elements: {
          formButtonPrimary: "bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700",
          card: "bg-white shadow-xl",
          headerTitle: "text-2xl font-bold",
          headerSubtitle: "text-gray-600",
          socialButtonsBlockButton: "border-2 hover:bg-gray-50",
          formFieldInput: "border-2 focus:border-teal-500",
          footerActionLink: "text-teal-600 hover:text-teal-700"
        }
      }}
    >
      <App />
    </ClerkProvider>
  </React.StrictMode>
);