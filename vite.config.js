// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/': {
        target: 'https://cypher-test-backend.vercel.app',
        changeOrigin: true,
        rewrite: (path) => path,
      },
    },
  },
});
