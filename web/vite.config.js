// Vite + Vue
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

// TODO: Vitejs configuration link ==> https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true,
      }
    })
  ],
  define: {
    "process.env": process.env,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@js": fileURLToPath(new URL("./src/assets/js", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@views": fileURLToPath(new URL("./src/views", import.meta.url)),
      "@plugins": fileURLToPath(new URL("./src/plugins", import.meta.url)),
      "@router": fileURLToPath(new URL("./src/router", import.meta.url)),
      "@store": fileURLToPath(new URL("./src/store", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@api": fileURLToPath(new URL("./src/api", import.meta.url)),
      "@data": fileURLToPath(new URL("./src/assets/data", import.meta.url)),
      "@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
      "@Imageconnexion": fileURLToPath(
        new URL("./src/assets/images/connexion", import.meta.url)
      ),
      "@locales": fileURLToPath(
        new URL("./src/locales", import.meta.url)
      ),
    },
  },
  extensions: [
    ".js",
    ".vue",
    ".json",
    ".ts",
    ".tsx",
    ".mjs",
    ".css",
    ".scss",
    ".sass",
    ".md",
  ],
  server: {
    host: true,
    port: 5174,
    strictPort: true,
    proxy: {
      '/api': `http://${process.env.VITE_API_SOURCE_HOST}:${process.env.VITE_API_SOURCE_PORT}`,
    },
  },
}
);