import { parseWasm } from './parseWasm';

export function getMethodNames(code_base64: string): string[] {
  try {
    const ast = parseWasm(code_base64);
    return ast.body[0].fields
      .filter(
        (x: any) => x.type === 'ModuleExport' && x.descr.exportType === 'Func',
      )
      .map((x: any) => x.name) as string[];
  } catch (e) {
    console.error('Could not parse WASM', e);
    return [];
  }
}
