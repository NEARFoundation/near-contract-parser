(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  Object.defineProperty(exports, '__esModule', { value: true });
  exports.parseWasm = void 0;
  var wasm_parser_1 = require('@webassemblyjs/wasm-parser');
  /**
   * Converts a base64-encoded string to a byte array. Works in browser and Node
   * environments.
   *
   * @param strb64 base64 string
   * @returns Decoded byte array
   */
  function base64StringToUint8Array(strb64) {
    if (typeof Buffer !== 'undefined') {
      // Node
      return Buffer.from(strb64, 'base64');
    } else {
      // Browser
      return new Uint8Array(
        atob(strb64.toString().trim())
          .split('')
          .map(function (c) {
            return c.charCodeAt(0);
          }),
      );
    }
  }
  /**
   * Parse base64-encoded WASM into AST
   *
   * @param wasmb64 base64-encoded WASM binary
   * @returns WASM abstract syntax tree
   */
  function parseWasm(wasmb64) {
    return (0, wasm_parser_1.decode)(base64StringToUint8Array(wasmb64));
  }
  exports.parseWasm = parseWasm;
});
