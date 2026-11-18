import path from 'path';
import { defineConfig } from 'vite';
import pugPlugin from 'vite-plugin-pug';

export default defineConfig({
  base: '/labs09/', // Заміни на '/landing-keepsake-vite/', якщо перейменуєш репозиторій
  plugins: [pugPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    devSourcemap: true,
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});