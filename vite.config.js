import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "./",
  // name of repo
  base: "/gale_salazar",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // manualChunks: false,
        // inlineDynamicImports: true,
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js'
      
      input: './index.html',
      }
    }
  },
  // publicDir: 'public',
});
