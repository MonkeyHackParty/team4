import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../backend/static',
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
