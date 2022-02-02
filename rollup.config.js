import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'lib/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'umd',
    name: 'nearContractParser',
  },
  plugins: [commonjs(), nodeResolve()],
};
