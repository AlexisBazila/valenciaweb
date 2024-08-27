import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HomeHeroSection from "./components/homeHeroSection.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomeHeroSection />
  </StrictMode>
);
