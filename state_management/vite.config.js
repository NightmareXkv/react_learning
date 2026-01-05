import { defineConfig } from 'vite'
<<<<<<< HEAD
=======
import tailwindcss from '@tailwindcss/vite'
>>>>>>> c55de21149551742f0bd3d31990be98d60d61e67
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [tailwindcss(),react()],
>>>>>>> c55de21149551742f0bd3d31990be98d60d61e67
})
