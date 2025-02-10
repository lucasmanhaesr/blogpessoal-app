import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { //Configiurações do servidor:
    host: '0.0.0.0', // Permite conexões de qualquer IP
    port: 3000, // Porta que o servidor vai usar
  },
})
