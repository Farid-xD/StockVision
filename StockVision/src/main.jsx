import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || "";

if (!PUBLISHABLE_KEY) {
  console.warn("VITE_CLERK_PUBLISHABLE_KEY is not set. API checks will be skipped.");
} else {
  // quick network check to ensure the key is read and a request can be made
  (async function testPublishableKey() {
    try {
      const res = await fetch(
        `https://httpbin.org/get?publishable_key=${encodeURIComponent(PUBLISHABLE_KEY)}`
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const body = await res.json();
      console.info("API test request successful:", body.url || body);
    } catch (err) {
      console.error("API test request failed:", err);
    }
  })();
}

const root = document.getElementById("root");
if (!root) throw new Error("Root element not found");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
