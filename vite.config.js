import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration
export default defineConfig({
  plugins: [react()],
  base: '/gale_salazar/', 
  build: {
    outDir: 'dist', 
    // assetsDir: 'assets', 
    rollupOptions: {
      input: '/index.html', 
    },
  },
});
