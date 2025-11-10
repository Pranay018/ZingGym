import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
  plugins: [
    react(),
    purgecss()
  ],
  build: {
    target: "esnext",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // removes console logs
        drop_debugger: true
      }
    },
    chunkSizeWarningLimit: 800, // ignore warnings for big chunks
  },
  server: {
    open: true,
  },
});
