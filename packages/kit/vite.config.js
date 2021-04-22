import { defineConfig } from 'vite'
import path from 'path'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const config = defineConfig({
  server: {
    port: 3001,
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'kit',
      formats: ['es', 'umd', 'cjs'],
    },
    rollupOptions: {
      plugins: [peerDepsExternal()],
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
})

export default config
