import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist-vite',
    emptyOutDir: true,
    lib: {
      entry: 'module-entry.js',
      formats: ['es'],
      fileName: () => 'module-entry.js',
    },
    rollupOptions: {
      output: {
        chunkFileNames: 'module-[name].js',
        assetFileNames: '[name][extname]',
      },
    },
  },
});
