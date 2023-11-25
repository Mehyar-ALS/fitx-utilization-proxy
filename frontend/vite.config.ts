import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        setHeaders: {
          'Access-Control-Allow-Origin': '*',
        },
        referrerPolicy: 'no-referrer-when-downgrade'
      },
    }
  }
})
