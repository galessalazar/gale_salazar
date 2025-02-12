import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from 'tailwindcss';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  root: "./",
  // name of repo
  base: "/gale_salazar",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    // assetsDir: 'assets',
    rollupOptions: {
      input: './index.html',
    }
  },
  // publicDir: 'public',
});
