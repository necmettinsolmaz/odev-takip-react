import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // 1. Düzeltme: Base yolu (path) depo adı olarak ayarla
  base: `/${repoName}/`, 
  // base: '/odev-takip-react/', // Eğer depo adını biliyorsanız doğrudan yazabilirsiniz
           
})
