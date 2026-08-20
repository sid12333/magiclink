import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const projectRoot = path.resolve(import.meta.dirname, "..");
const vite = await createServer({
  root: projectRoot,
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { default: LandingPage } = await vite.ssrLoadModule("/app/LandingPage.tsx");

  for (const [file, language] of [["index.html", "en"], ["zh-cn.html", "zh"]]) {
    const outputPath = path.join(projectRoot, "dist", file);
    const document = await readFile(outputPath, "utf8");
    const content = renderToStaticMarkup(createElement(LandingPage, { language }));
    const rendered = document.replace('<div id="root"></div>', `<div id="root">${content}</div>`);

    if (rendered === document) {
      throw new Error(`Could not prerender ${file}`);
    }

    await writeFile(outputPath, rendered);
  }
} finally {
  await vite.close();
}
