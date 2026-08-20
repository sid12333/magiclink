import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "../app/LandingPage";
import "../app/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing root element");
}

const language = document.documentElement.lang === "zh-CN" ? "zh" : "en";

createRoot(root).render(
  <StrictMode>
    <LandingPage language={language} />
  </StrictMode>,
);
