import { getProbableInterfaces } from './getProbableInterfaces';
import { ParsedContract } from './ParsedContract';

export async function parseContract(
  wasmBase64: string,
): Promise<ParsedContract> {
  const bytes = base64StringToUint8Array(wasmBase64);
  const wasmModule = await WebAssembly.compile(bytes);
  const methodNames = await exportedFunctionNames(wasmModule);
  const probableInterfaces = getProbableInterfaces(methodNames);

  return {
    methodNames,
    ...probableInterfaces,
  };
}

/**
 * Converts a base64-encoded string to a byte array. Works in browser and Node
 * environments.
 *
 * @param strb64 base64 string
 * @returns Decoded byte array
 */
function base64StringToUint8Array(strb64: string): Uint8Array {
  return new Uint8Array(
    atob(strb64.toString().trim())
      .split('')
      .map(c => c.charCodeAt(0)),
  );
}

/**
 * Retrieves the names of all exported functions from a WebAssembly module.
 *
 * @param {WebAssembly.Module} wasmModule - The WebAssembly module to extract the exported function names from.
 * @return {Promise<string[]>} An array of strings containing the names of all exported functions.
 */
async function exportedFunctionNames(
  wasmModule: WebAssembly.Module,
): Promise<string[]> {
  const exports = WebAssembly.Module.exports(wasmModule);

  const exportedFunctionNames = exports
    .filter(e => e.kind === 'function')
    .map(e => e.name);

  return exportedFunctionNames;
}
