const { decode } = require('@webassemblyjs/wasm-parser');

/**
 * Converts a base64-encoded string to a byte array. Works in browser and Node
 * environments.
 *
 * @param strb64 base64 string
 * @returns Decoded byte array
 */
function base64StringToUint8Array(strb64: string): Uint8Array {
  if (typeof Buffer !== 'undefined') {
    // Node
    return Buffer.from(strb64, 'base64');
  } else {
    // Browser
    return new Uint8Array(
      atob(strb64.toString().trim())
        .split('')
        .map(c => c.charCodeAt(0)),
    );
  }
}

/**
 * Parse base64-encoded WASM into AST
 *
 * @param wasmb64 base64-encoded WASM binary
 * @returns WASM abstract syntax tree
 */
export function parseWasm(wasmb64: string): any {
  return decode(base64StringToUint8Array(wasmb64));
}
