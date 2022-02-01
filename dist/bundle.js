(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(exports, require('@webassemblyjs/wasm-parser'))
    : typeof define === 'function' && define.amd
    ? define(['exports', '@webassemblyjs/wasm-parser'], factory)
    : ((global =
        typeof globalThis !== 'undefined' ? globalThis : global || self),
      factory((global.nearContractParser = {}), global.wasmParser));
})(this, function (exports, wasmParser) {
  'use strict';

  var _a;
  exports.StandardInterfaceId = void 0;
  (function (StandardInterfaceId) {
    StandardInterfaceId['NEP141'] = 'nep141';
    StandardInterfaceId['NEP148'] = 'nep148';
    StandardInterfaceId['NEP171'] = 'nep171';
    StandardInterfaceId['NEP177'] = 'nep177';
    StandardInterfaceId['NEP178'] = 'nep178';
  })(exports.StandardInterfaceId || (exports.StandardInterfaceId = {}));
  /**
   * Mapping interface ID to interface specification
   */
  var interfaces = Object.freeze(
    ((_a = {}),
    (_a[exports.StandardInterfaceId.NEP141] = {
      id: exports.StandardInterfaceId.NEP141,
      name: 'FT Core (NEP-141)',
      methods: [
        {
          name: 'ft_transfer',
          args: [
            { name: 'receiver_id', type: 'string' },
            { name: 'amount', type: 'string' },
            { name: 'memo', type: ['string', 'null'] },
          ],
        },
        {
          name: 'ft_transfer_call',
          args: [
            { name: 'receiver_id', type: 'string' },
            { name: 'amount', type: 'string' },
            { name: 'memo', type: ['string', 'null'] },
            { name: 'msg', type: 'string' },
          ],
        },
        {
          name: 'ft_total_supply',
          args: [],
        },
        {
          name: 'ft_balance_of',
          args: [{ name: 'account_id', type: 'string' }],
        },
      ],
    }),
    (_a[exports.StandardInterfaceId.NEP148] = {
      id: exports.StandardInterfaceId.NEP148,
      name: 'FT Metadata (NEP-148)',
      methods: [
        {
          name: 'ft_metadata',
          args: [],
        },
      ],
    }),
    (_a[exports.StandardInterfaceId.NEP171] = {
      id: exports.StandardInterfaceId.NEP171,
      name: 'NFT Core (NEP-171)',
      methods: [
        {
          name: 'nft_transfer',
          args: [
            { name: 'receiver_id', type: 'string' },
            { name: 'token_id', type: 'string' },
            { name: 'approval_id', type: ['number', 'null'] },
            { name: 'memo', type: ['string', 'null'] },
          ],
        },
        {
          name: 'nft_transfer_call',
          args: [
            { name: 'receiver_id', type: 'string' },
            { name: 'token_id', type: 'string' },
            { name: 'approval_id', type: ['number', 'null'] },
            { name: 'memo', type: ['string', 'null'] },
            { name: 'msg', type: 'string' },
          ],
        },
        {
          name: 'nft_token',
          args: [{ name: 'token_id', type: 'string' }],
        },
      ],
    }),
    (_a[exports.StandardInterfaceId.NEP177] = {
      id: exports.StandardInterfaceId.NEP177,
      name: 'NFT Metadata (NEP-177)',
      methods: [
        {
          name: 'nft_metadata',
          args: [],
        },
      ],
    }),
    (_a[exports.StandardInterfaceId.NEP178] = {
      id: exports.StandardInterfaceId.NEP178,
      name: 'NFT Approval Management (NEP-178)',
      methods: [
        {
          name: 'nft_approve',
          args: [
            { name: 'token_id', type: 'string' },
            { name: 'account_id', type: 'string' },
            { name: 'msg', type: ['string', 'null'] },
          ],
        },
        {
          name: 'nft_revoke',
          args: [
            { name: 'token_id', type: 'string' },
            { name: 'account_id', type: 'string' },
          ],
        },
        {
          name: 'nft_revoke_all',
          args: [{ name: 'token_id', type: 'string' }],
        },
        {
          name: 'nft_is_approved',
          args: [
            { name: 'token_id', type: 'string' },
            { name: 'approved_account_id', type: 'string' },
            { name: 'approval_id', type: ['number', 'null'] },
          ],
        },
      ],
    }),
    _a),
  );

  /**
   * Guesses which standards a contract _probably_ implements based on exported
   * method names.
   *
   * @param methodNames Exported method names
   * @returns Interfaces the contract probably implements, as well as which
   *  methods likely constitute which interfaces
   */
  function getProbableInterfaces(methodNames) {
    var probableInterfaces = Object.keys(interfaces).filter(function (i) {
      return interfaces[i].methods.every(function (m) {
        return methodNames.indexOf(m.name) !== -1;
      });
    });
    var byMethod = {};
    methodNames.forEach(function (methodName) {
      byMethod[methodName] = probableInterfaces.filter(function (i) {
        return (
          interfaces[i].methods
            .map(function (m) {
              return m.name;
            })
            .indexOf(methodName) !== -1
        );
      });
    });
    return { probableInterfaces: probableInterfaces, byMethod: byMethod };
  }

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
    return wasmParser.decode(base64StringToUint8Array(wasmb64));
  }

  /**
   * Extracts exported functions from smart contract
   *
   * @param code_base64 Base64-encoded WASM binary (e.g. obtained from
   *  `near-api-js`)
   * @returns List of exported function names
   */
  function getMethodNames(code_base64) {
    var ast = parseWasm(code_base64);
    return ast.body[0].fields
      .filter(function (x) {
        return x.type === 'ModuleExport' && x.descr.exportType === 'Func';
      })
      .map(function (x) {
        return x.name;
      });
  }

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
  function parseContract(code_base64) {
    var methodNames = getMethodNames(code_base64);
    var probableInterfaces = getProbableInterfaces(methodNames);
    return __assign({ methodNames: methodNames }, probableInterfaces);
  }

  exports.getMethodNames = getMethodNames;
  exports.getProbableInterfaces = getProbableInterfaces;
  exports.interfaces = interfaces;
  exports.parseContract = parseContract;
  exports.parseWasm = parseWasm;

  Object.defineProperty(exports, '__esModule', { value: true });
});
