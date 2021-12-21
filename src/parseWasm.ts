import { decode } from '@webassemblyjs/wasm-parser';

function base64StringToUint8Array(str: string): Uint8Array {
  if (typeof Buffer !== 'undefined') {
    // Node
    return Buffer.from(str, 'base64');
  } else {
    // Browser
    return new Uint8Array(
      atob(str.toString().trim())
        .split('')
        .map(c => c.charCodeAt(0)),
    );
  }
}

export function parseWasm(wasmb64: string): any {
  return decode(base64StringToUint8Array(wasmb64));
}
