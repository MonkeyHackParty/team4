// frontend/vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "../backend/static", // Djangoの静的ファイルディレクトリにビルド結果を出力
    emptyOutDir: true,
  },
  server: {
    proxy: {
      "/api": {
        target: "https://job.yahooapis.jp",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
