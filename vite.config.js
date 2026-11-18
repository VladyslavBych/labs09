import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';



export default ({ command }) => ({
  base: command === 'build' ? '/landing-keepsake-vite/' : '/',
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': [],
        },
      },
    }),
    pug({ root: './src' }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
});