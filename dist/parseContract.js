(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  var __assign =
    (undefined && undefined.__assign) ||
    function () {
      __assign =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
      return __assign.apply(this, arguments);
    };
  Object.defineProperty(exports, '__esModule', { value: true });
  exports.parseContract = void 0;
  var getProbableInterfaces_1 = require('./getProbableInterfaces');
  var methods_1 = require('./methods');
  function parseContract(code_base64) {
    var methodNames = (0, methods_1.getMethodNames)(code_base64);
    var probableInterfaces = (0, getProbableInterfaces_1.getProbableInterfaces)(
      methodNames,
    );
    return __assign({ methodNames: methodNames }, probableInterfaces);
  }
  exports.parseContract = parseContract;
});
