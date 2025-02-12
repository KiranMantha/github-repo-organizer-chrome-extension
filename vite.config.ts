import preact from '@preact/preset-vite';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        content: 'src/content-script.tsx'
      },
      output: {
        format: 'iife',
        entryFileNames: '[name].js'
      }
    }
  },
  server: {
    port: 5100,
    strictPort: true
  }
});
