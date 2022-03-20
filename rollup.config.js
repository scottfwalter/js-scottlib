import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.esm.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [nodeResolve()]
};
