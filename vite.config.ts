
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // ssr: './src/lib/Counter.svelte',
  },
  plugins: [
    svelte({
      exclude: ['./src/lib/Clock.svelte'],
    }),
    svelte({
      exclude: ['./src/App.svelte', './src/lib/Counter.svelte'],
      compilerOptions: {
        customElement: true,
      }
    })
  ]
})