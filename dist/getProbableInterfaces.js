(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  (function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
      var v = factory(require, exports);
      if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
      define(['require', 'exports', './interfaces'], factory);
    }
  })(function (require, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.getProbableInterfaces = void 0;
    var interfaces_1 = require('./interfaces');
    /**
     * Guesses which standards a contract _probably_ implements based on exported
     * method names.
     *
     * @param methodNames Exported method names
     * @returns Interfaces the contract probably implements, as well as which
     *  methods likely constitute which interfaces
     */
    function getProbableInterfaces(methodNames) {
      var probableInterfaces = Object.keys(interfaces_1.interfaces).filter(
        function (i) {
          return interfaces_1.interfaces[i].methods.every(function (m) {
            return methodNames.indexOf(m.name) !== -1;
          });
        },
      );
      var byMethod = {};
      methodNames.forEach(function (methodName) {
        byMethod[methodName] = probableInterfaces.filter(function (i) {
          return (
            interfaces_1.interfaces[i].methods
              .map(function (m) {
                return m.name;
              })
              .indexOf(methodName) !== -1
          );
        });
      });
      return { probableInterfaces: probableInterfaces, byMethod: byMethod };
    }
    exports.getProbableInterfaces = getProbableInterfaces;
  });
});
