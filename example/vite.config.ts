import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';

export default defineConfig({
  plugins: [solid()],

  server: {
    port: 3000,
  },

  /** GitHub Pages deploy sub-path. */
  base: "/solid-boring-avatars/",

  build: {
    target: 'esnext',
  },
});
