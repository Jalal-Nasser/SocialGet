import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true, // Always use 5173, fail if busy
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/SocialGet/", // Use "/SocialGet/" for GitHub Pages
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});