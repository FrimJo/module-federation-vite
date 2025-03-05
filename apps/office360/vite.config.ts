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
      name: "office360",
      filename: "remoteEntry.js",
      remotes: {
        word: "http://localhost:5002/assets/remoteEntry.js",
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
    port: 5001,
    strictPort: true,
  },
  server: {
    port: 5001,
    strictPort: true,
  },
});
