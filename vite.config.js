import { defineConfig } from 'vite'

export default defineConfig({
  root: './toms-game-hub', // Points to the folder containing your index.html
  build: {
    outDir: '../dist' // Ensures built files are output in the correct location
  }
})
