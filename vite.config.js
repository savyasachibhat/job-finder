import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
 
  plugins: [react()],
    base: './', // Ensures relative paths
  server: {
    historyApiFallback: true, // Fixes 404 on direct navigation
  },
})
