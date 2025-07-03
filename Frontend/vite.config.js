import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: [
    '**/*.JPG',
    '**/*.JPEG',
    '**/*.PNG',
    '**/*.SVG',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.png',
    '**/*.svg'
  ]
})