import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Shim localStorage for Node environment to prevent devtools build crash
if (typeof globalThis.localStorage === 'undefined') {
  (globalThis as any).localStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
    key: () => null,
    length: 0
  };
}

const isBuild = process.argv.includes('build') || process.env.NODE_ENV === 'production';
const plugins: any[] = [vue()];

if (!isBuild) {
  try {
    const vueDevTools = (await import('vite-plugin-vue-devtools')).default;
    plugins.push(vueDevTools());
  } catch (e) {
    console.warn('Failed to load Vue DevTools plugin:', e);
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: plugins as any,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
