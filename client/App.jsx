import "./global.css";

import { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import QuadrantDetail from "./pages/QuadrantDetail";
import Loader from "./components/Loader"; // 👈 make sure this file exists

const App = () => {
  const [isAppLoading, setIsAppLoading] = useState(true);

  useEffect(() => {
    // Runs only when the app first mounts (user enters site / refreshes)
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500); // 🔧 adjust duration if you want

    return () => clearTimeout(timer);
  }, []);

  // While loading: show only the loader
  if (isAppLoading) {
    return (
      <div className="loader-overlay">
        <Loader />
      </div>
    );
  }

  // After loading: show your normal routes
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quadrant/:quadrantId" element={<QuadrantDetail />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById("root")).render(<App />);
