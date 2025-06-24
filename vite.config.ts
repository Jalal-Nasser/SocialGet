import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  server: {
    host: "0.0.0.0", // Changed from '::' to ensure broader compatibility
    port: 8080,
    strictPort: true, // Ensures Vite fails if port is unavailable
    open: true // Automatically open browser
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
});