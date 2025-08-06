import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// Konfigurasi ini akan mendeteksi perintah yang dijalankan (dev atau build)
export default defineConfig(({ command }) => ({
  // Ganti dengan username GitHub Anda
  site: 'https://kelar89.github.io',
  // 'base' hanya akan diterapkan saat 'npm run deploy' (command === 'build')
  // Saat 'npm run dev', 'base' akan menjadi '/' (root)
  base: command === 'build' ? '/umroh-website/' : '/',
  integrations: [tailwind()]
}));