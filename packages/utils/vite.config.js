import { defineConfig } from 'vite'
import path from 'path'

const config = defineConfig({
  server: {
    port: 3001,
  },
  alias: [
    {
      find: '@',
      replacement: path.resolve(__dirname, 'src'),
    },
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'utils',
      formats: ['es', 'umd', 'cjs'],
    },
  },
})

export default config
