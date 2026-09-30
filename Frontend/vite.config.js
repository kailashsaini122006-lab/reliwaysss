import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: true, // Sabhi hosts ko allow karne ke liye
  },
  preview: {
    host: '0.0.0.0',
    allowedHosts: true, // Preview mode ke liye
  }
})