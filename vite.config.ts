import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Explicitly resolve @radix-ui/react-tabs to its node_modules path
      "@radix-ui/react-tabs": path.resolve(__dirname, "node_modules/@radix-ui/react-tabs")
    }
  },
  optimizeDeps: {
    include: ["@radix-ui/react-tabs"]
  }
});