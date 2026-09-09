import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const cleanPageFiles = new Map([
  ["/guides/apple-magic-trackpad-windows-11", "/guides/apple-magic-trackpad-windows-11.html"],
  ["/magic-trackpad-windows", "/magic-trackpad-windows.html"],
  ["/guides/install-magic-trackpad-windows-11", "/guides/install-magic-trackpad-windows-11.html"],
  ["/compare/magic-link-vs-magic-utilities", "/compare/magic-link-vs-magic-utilities.html"],
]);

export default defineConfig({
  plugins: [
    {
      name: "clean-html-paths",
      configureServer(server) {
        server.middlewares.use((request, _response, next) => {
          const url = new URL(request.url ?? "/", "http://localhost");
          const file = cleanPageFiles.get(url.pathname.replace(/\/$/, ""));
          if (file) request.url = `${file}${url.search}`;
          next();
        });
      },
    },
    react(),
  ],
  build: {
    rollupOptions: {
      input: {
        "guides/apple-magic-trackpad-windows-11": path.resolve(import.meta.dirname, "guides/apple-magic-trackpad-windows-11.html"),
        index: path.resolve(import.meta.dirname, "index.html"),
        "zh-cn": path.resolve(import.meta.dirname, "zh-cn.html"),
        "magic-trackpad-windows": path.resolve(import.meta.dirname, "magic-trackpad-windows.html"),
        "guides/install-magic-trackpad-windows-11": path.resolve(import.meta.dirname, "guides/install-magic-trackpad-windows-11.html"),
        "compare/magic-link-vs-magic-utilities": path.resolve(import.meta.dirname, "compare/magic-link-vs-magic-utilities.html"),
      },
    },
  },
});
