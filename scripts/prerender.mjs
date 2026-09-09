import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const projectRoot = path.resolve(import.meta.dirname, "..");
const vite = await createServer({
  root: projectRoot,
  mode: "production",
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { default: LandingPage } = await vite.ssrLoadModule("/app/LandingPage.tsx");
  const { default: ResourcePage } = await vite.ssrLoadModule("/app/ResourcePages.tsx");

  const routes = [
    ["guides/apple-magic-trackpad-windows-11.html", ResourcePage, { kind: "article" }],
    ["index.html", LandingPage, { language: "en" }],
    ["zh-cn.html", LandingPage, { language: "zh" }],
    ["magic-trackpad-windows.html", ResourcePage, { kind: "trackpad" }],
    ["guides/install-magic-trackpad-windows-11.html", ResourcePage, { kind: "install" }],
    ["compare/magic-link-vs-magic-utilities.html", ResourcePage, { kind: "compare" }],
  ];

  for (const [file, Component, props] of routes) {
    const outputPath = path.join(projectRoot, "dist", file);
    const document = await readFile(outputPath, "utf8");
    const content = renderToString(createElement(Component, props));
    const rendered = document.replace('<div id="root"></div>', `<div id="root">${content}</div>`);

    if (rendered === document) {
      throw new Error(`Could not prerender ${file}`);
    }

    await writeFile(outputPath, rendered);
  }
} finally {
  await vite.close();
}
