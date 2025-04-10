import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // Ensures relative paths work
  build: {
    outDir: 'dist', // Ensure correct output folder
    assetsDir: 'assets' // Keeps assets organized in 'dist/assets'
  }
})
