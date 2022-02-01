(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) : factory();
})(function () {
  'use strict';

  var __createBinding =
    (undefined && undefined.__createBinding) ||
    (Object.create
      ? function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          Object.defineProperty(o, k2, {
            enumerable: true,
            get: function () {
              return m[k];
            },
          });
        }
      : function (o, m, k, k2) {
          if (k2 === undefined) k2 = k;
          o[k2] = m[k];
        });
  var __exportStar =
    (undefined && undefined.__exportStar) ||
    function (m, exports) {
      for (var p in m)
        if (
          p !== 'default' &&
          !Object.prototype.hasOwnProperty.call(exports, p)
        )
          __createBinding(exports, m, p);
    };
  Object.defineProperty(exports, '__esModule', { value: true });
  __exportStar(require('./getProbableInterfaces'), exports);
  __exportStar(require('./interfaces'), exports);
  __exportStar(require('./JsonType'), exports);
  __exportStar(require('./methods'), exports);
  __exportStar(require('./parseContract'), exports);
  __exportStar(require('./ParsedContract'), exports);
  __exportStar(require('./parseWasm'), exports);
});
