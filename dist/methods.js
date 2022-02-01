(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  (function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
      var v = factory(require, exports);
      if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
      define(['require', 'exports', './parseWasm'], factory);
    }
  })(function (require, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.getMethodNames = void 0;
    var parseWasm_1 = require('./parseWasm');
    /**
     * Extracts exported functions from smart contract
     *
     * @param code_base64 Base64-encoded WASM binary (e.g. obtained from
     *  `near-api-js`)
     * @returns List of exported function names
     */
    function getMethodNames(code_base64) {
      var ast = (0, parseWasm_1.parseWasm)(code_base64);
      return ast.body[0].fields
        .filter(function (x) {
          return x.type === 'ModuleExport' && x.descr.exportType === 'Func';
        })
        .map(function (x) {
          return x.name;
        });
    }
    exports.getMethodNames = getMethodNames;
  });
});
