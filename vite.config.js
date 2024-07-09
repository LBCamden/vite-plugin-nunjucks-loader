import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      'nunjucks': "nunjucks/browser/nunjucks-slim"
    },
  },
  define: {
    window: "globalThis"
  },
  build: {
    rollupOptions: {
      external: [/^node:/]
    },
    outDir: "dist",
    lib: {
      fileName: "bundle",
      entry: "./runtime/runtime.js",
      formats: ["es"]
    }
  }
})