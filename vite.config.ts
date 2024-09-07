import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Allow access from external devices
    port: 5173, // Ensure the port is not blocked
  }, plugins: [react()],
  base: '/motion_io/'
})
