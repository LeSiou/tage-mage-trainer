import { defineConfig } from 'vite';

export default defineConfig({
  base: '/tage-mage-trainer/',
  server: {
    host: '0.0.0.0',
    port: 5173,
    open: false
  }
});
