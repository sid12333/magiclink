import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import LandingPage from "../app/LandingPage";
import ResourcePage from "../app/ResourcePages";
import "../app/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Missing root element");
}

const language = document.documentElement.lang === "zh-CN" ? "zh" : "en";
const resourceKind = document.body.dataset.page as "trackpad" | "install" | "compare" | "article" | undefined;

const app = <StrictMode>{resourceKind ? <ResourcePage kind={resourceKind} /> : <LandingPage language={language} />}</StrictMode>;

if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
