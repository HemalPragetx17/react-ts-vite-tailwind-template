import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['google-libphonenumber'],
  },
  assetsInclude: [
    "**/*.avif",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.gif",
    "**/*.svg",
  ],
  server: {
    port: 3000,
    host: true, // This enables network access (IP)
  },
})
