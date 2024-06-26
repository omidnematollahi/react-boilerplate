import { fileURLToPath, URL } from 'node:url';
import path from 'path';
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import { reactScopedCssPlugin } from 'rollup-plugin-react-scoped-css';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), reactScopedCssPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~app': path.resolve('src/app'),
      '~entities': path.resolve('src/entities'),
      '~features': path.resolve('src/features'),
      '~pages': path.resolve('src/pages'),
      '~shared': path.resolve('src/shared'),
      '~widgets': path.resolve('src/widgets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/index.scss" as *;`,
      },
    },
  },
});
