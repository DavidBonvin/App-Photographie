/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VERCEL 
    ? '/' 
    : (process.env.NODE_ENV === 'production' ? '/App-Photographie/' : '/'),
  plugins: [
    react(),
    legacy()
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ionic: ['@ionic/react', '@ionic/react-router'],
          router: ['react-router', 'react-router-dom']
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  }
})
