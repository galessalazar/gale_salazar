import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'client',
  // name of repo
  base: '/gale_salazar/',
  build: {
    outDir: 'client/dist',
  }
})
