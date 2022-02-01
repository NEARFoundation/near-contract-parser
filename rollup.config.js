import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'lib/index.js',
	output: {
		file: 'dist/bundle.js',
		format: 'umd',
		name: 'nearContractParser',
		// globals: {'@webassemblyjs/wasm-parser': 'wasmParser'},
	},
	// external: ['@webassemblyjs/wasm-parser'], // <-- suppresses the warning
	plugins: [commonjs(), nodeResolve()]
};
