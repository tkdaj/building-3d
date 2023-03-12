import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  base: '/building-3d/',
  server: {
    port: 3000,
    open: true,
    hmr: false,
  },
});
