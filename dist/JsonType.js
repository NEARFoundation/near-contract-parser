(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  (function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
      var v = factory(require, exports);
      if (v !== undefined) module.exports = v;
    } else if (typeof define === 'function' && define.amd) {
      define(['require', 'exports'], factory);
    }
  })(function (require, exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
  });
});
