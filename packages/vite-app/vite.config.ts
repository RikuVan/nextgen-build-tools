import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  server: {
    port: 3002,
  },
  resolve: {
    alias: {
      '@vaisala/kit/dist/style.css': './node_modules/@vaisala/kit/dist/style.css',
    },
  },
})
