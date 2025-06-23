import { defineConfig } from "vite";
import dyadComponentTagger from "@dyad-sh/react-vite-component-tagger";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(() => ({
  root: '.', // Set the root to the current directory where index.html resides
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [dyadComponentTagger(), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist', // Explicitly set the output directory
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html') // Explicitly define index.html as the main entry point
      }
    }
  },
  base: "/SocialGet/", // Add this line for GitHub Pages deployment
}));