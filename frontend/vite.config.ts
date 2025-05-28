import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import tailwindscrollbar from 'tailwind-scrollbar'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),  tailwindcss(), tailwindscrollbar()],
  server:{
    host:true,
    port:5173
  },
})
