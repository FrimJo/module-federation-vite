import federation from "@originjs/vite-plugin-federation";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite(),
    react(),
    federation({
      name: "word",
      filename: "remoteEntry.js",
      remotes: {
        office360: "http://localhost:5001/assets/remoteEntry.js",
      },
      exposes: {
        "./expose": "./src/expose.ts",
      },
      shared: ["react", "react-dom", "@tanstack/react-router"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  preview: {
    port: 5002,
    strictPort: true,
  },
  server: {
    port: 5002,
    strictPort: true,
  },
});
