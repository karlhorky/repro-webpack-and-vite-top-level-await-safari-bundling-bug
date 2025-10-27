import { fileURLToPath } from 'url';

/** @type {import('webpack').Configuration} */
const config = {
  entry: './module-entry.js',
  target: 'web',
  output: {
    filename: 'bundle.js',
    path: fileURLToPath(new URL('./dist/', import.meta.url)),
    module: true,
    chunkFormat: 'module',
    chunkLoading: 'import',
    library: {
      type: 'module',
    },
    publicPath: './',
    clean: true,
  },
  experiments: {
    topLevelAwait: true,
    outputModule: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        type: 'javascript/esm',
      },
    ],
  },
};

export default config;
