import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./assets/images"),
      "@fonts": path.resolve(__dirname, "./assets/fonts"),
    },
  },
});
