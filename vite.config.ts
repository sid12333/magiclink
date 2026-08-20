import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(import.meta.dirname, "index.html"),
        "zh-cn": path.resolve(import.meta.dirname, "zh-cn.html"),
      },
    },
  },
});
