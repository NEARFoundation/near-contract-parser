import { parseWasm } from './parseWasm';

/**
 * Extracts exported functions from smart contract
 *
 * @param code_base64 Base64-encoded WASM binary (e.g. obtained from
 *  `near-api-js`)
 * @returns List of exported function names
 */
export function getMethodNames(code_base64: string): string[] {
  const ast = parseWasm(code_base64);
  return ast.body[0].fields
    .filter(
      (x: any) => x.type === 'ModuleExport' && x.descr.exportType === 'Func',
    )
    .map((x: any) => x.name) as string[];
}
