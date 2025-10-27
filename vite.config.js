import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-vite',
    emptyOutDir: false,
    lib: {
      entry: 'module-entry.js',
      formats: ['es'],
      fileName: () => 'module-entry.js',
    },
    rollupOptions: {
      output: {
        // Comment the next line in to work around the Safari top-level await bug
        // inlineDynamicImports: true,

        chunkFileNames: 'module-[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
