(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.nearContractParser = factory());
})(this, (function () { 'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function getDefaultExportFromCjs (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function getAugmentedNamespace(n) {
		if (n.__esModule) return n;
		var a = Object.defineProperty({}, '__esModule', {value: true});
		Object.keys(n).forEach(function (k) {
			var d = Object.getOwnPropertyDescriptor(n, k);
			Object.defineProperty(a, k, d.get ? d : {
				enumerable: true,
				get: function () {
					return n[k];
				}
			});
		});
		return a;
	}

	var lib = {};

	var getProbableInterfaces$1 = {};

	var interfaces = {};

	(function (exports) {
	var _a;
	Object.defineProperty(exports, '__esModule', { value: true });
	exports.interfaces = exports.StandardInterfaceId = void 0;
	var StandardInterfaceId;
	(function (StandardInterfaceId) {
	  StandardInterfaceId['NEP141'] = 'nep141';
	  StandardInterfaceId['NEP148'] = 'nep148';
	  StandardInterfaceId['NEP171'] = 'nep171';
	  StandardInterfaceId['NEP177'] = 'nep177';
	  StandardInterfaceId['NEP178'] = 'nep178';
	})(
	  (StandardInterfaceId =
	    exports.StandardInterfaceId || (exports.StandardInterfaceId = {})),
	);
	/**
	 * Mapping interface ID to interface specification
	 */
	exports.interfaces = Object.freeze(
	  ((_a = {}),
	  (_a[StandardInterfaceId.NEP141] = {
	    id: StandardInterfaceId.NEP141,
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
	  (_a[StandardInterfaceId.NEP148] = {
	    id: StandardInterfaceId.NEP148,
	    name: 'FT Metadata (NEP-148)',
	    methods: [
	      {
	        name: 'ft_metadata',
	        args: [],
	      },
	    ],
	  }),
	  (_a[StandardInterfaceId.NEP171] = {
	    id: StandardInterfaceId.NEP171,
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
	  (_a[StandardInterfaceId.NEP177] = {
	    id: StandardInterfaceId.NEP177,
	    name: 'NFT Metadata (NEP-177)',
	    methods: [
	      {
	        name: 'nft_metadata',
	        args: [],
	      },
	    ],
	  }),
	  (_a[StandardInterfaceId.NEP178] = {
	    id: StandardInterfaceId.NEP178,
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

	}(interfaces));

	Object.defineProperty(getProbableInterfaces$1, '__esModule', { value: true });
	getProbableInterfaces$1.getProbableInterfaces = void 0;
	var interfaces_1 = interfaces;
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
	getProbableInterfaces$1.getProbableInterfaces = getProbableInterfaces;

	var JsonType = {};

	Object.defineProperty(JsonType, '__esModule', { value: true });

	var methods = {};

	var parseWasm$1 = {};

	function _typeof$1(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof$1 = function _typeof(obj) { return typeof obj; }; } else { _typeof$1 = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof$1(obj); }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (call && (_typeof$1(call) === "object" || typeof call === "function")) { return call; } if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	var CompileError =
	/*#__PURE__*/
	function (_Error2) {
	  _inherits(CompileError, _Error2);

	  function CompileError() {
	    _classCallCheck(this, CompileError);

	    return _possibleConstructorReturn(this, (CompileError.__proto__ || Object.getPrototypeOf(CompileError)).apply(this, arguments));
	  }

	  return CompileError;
	}(Error);

	function read(buffer, offset, isLE, mLen, nBytes) {
	  var e, m;
	  var eLen = (nBytes * 8) - mLen - 1;
	  var eMax = (1 << eLen) - 1;
	  var eBias = eMax >> 1;
	  var nBits = -7;
	  var i = isLE ? (nBytes - 1) : 0;
	  var d = isLE ? -1 : 1;
	  var s = buffer[offset + i];

	  i += d;

	  e = s & ((1 << (-nBits)) - 1);
	  s >>= (-nBits);
	  nBits += eLen;
	  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1);
	  e >>= (-nBits);
	  nBits += mLen;
	  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias;
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen);
	    e = e - eBias;
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	/**
	 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
	 * n = 32/8
	 */

	var NUMBER_OF_BYTE_F32 = 4;
	/**
	 * According to https://webassembly.github.io/spec/binary/values.html#binary-float
	 * n = 64/8
	 */

	var NUMBER_OF_BYTE_F64 = 8;
	var SINGLE_PRECISION_MANTISSA = 23;
	var DOUBLE_PRECISION_MANTISSA = 52;
	function decodeF32(bytes) {
	  var buffer = Buffer.from(bytes);
	  return read(buffer, 0, true, SINGLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F32);
	}
	function decodeF64(bytes) {
	  var buffer = Buffer.from(bytes);
	  return read(buffer, 0, true, DOUBLE_PRECISION_MANTISSA, NUMBER_OF_BYTE_F64);
	}

	function _toConsumableArray$1(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

	function con(b) {
	  if ((b & 0xc0) === 0x80) {
	    return b & 0x3f;
	  } else {
	    throw new Error("invalid UTF-8 encoding");
	  }
	}

	function code(min, n) {
	  if (n < min || 0xd800 <= n && n < 0xe000 || n >= 0x10000) {
	    throw new Error("invalid UTF-8 encoding");
	  } else {
	    return n;
	  }
	}

	function decode$2(bytes) {
	  return _decode(bytes).map(function (x) {
	    return String.fromCharCode(x);
	  }).join("");
	}

	function _decode(bytes) {
	  if (bytes.length === 0) {
	    return [];
	  }
	  /**
	   * 1 byte
	   */


	  {
	    var _bytes = _toArray(bytes),
	        b1 = _bytes[0],
	        bs = _bytes.slice(1);

	    if (b1 < 0x80) {
	      return [code(0x0, b1)].concat(_toConsumableArray$1(_decode(bs)));
	    }

	    if (b1 < 0xc0) {
	      throw new Error("invalid UTF-8 encoding");
	    }
	  }
	  /**
	   * 2 bytes
	   */

	  {
	    var _bytes2 = _toArray(bytes),
	        _b = _bytes2[0],
	        b2 = _bytes2[1],
	        _bs = _bytes2.slice(2);

	    if (_b < 0xe0) {
	      return [code(0x80, ((_b & 0x1f) << 6) + con(b2))].concat(_toConsumableArray$1(_decode(_bs)));
	    }
	  }
	  /**
	   * 3 bytes
	   */

	  {
	    var _bytes3 = _toArray(bytes),
	        _b2 = _bytes3[0],
	        _b3 = _bytes3[1],
	        b3 = _bytes3[2],
	        _bs2 = _bytes3.slice(3);

	    if (_b2 < 0xf0) {
	      return [code(0x800, ((_b2 & 0x0f) << 12) + (con(_b3) << 6) + con(b3))].concat(_toConsumableArray$1(_decode(_bs2)));
	    }
	  }
	  /**
	   * 4 bytes
	   */

	  {
	    var _bytes4 = _toArray(bytes),
	        _b4 = _bytes4[0],
	        _b5 = _bytes4[1],
	        _b6 = _bytes4[2],
	        b4 = _bytes4[3],
	        _bs3 = _bytes4.slice(4);

	    if (_b4 < 0xf8) {
	      return [code(0x10000, (((_b4 & 0x07) << 18) + con(_b5) << 12) + (con(_b6) << 6) + con(b4))].concat(_toConsumableArray$1(_decode(_bs3)));
	    }
	  }
	  throw new Error("invalid UTF-8 encoding");
	}

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

	function module(id, fields, metadata) {
	  if (id !== null && id !== undefined) {
	    if (!(typeof id === "string")) {
	      throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
	    }
	  }

	  if (!(_typeof(fields) === "object" && typeof fields.length !== "undefined")) {
	    throw new Error('typeof fields === "object" && typeof fields.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "Module",
	    id: id,
	    fields: fields
	  };

	  if (typeof metadata !== "undefined") {
	    node.metadata = metadata;
	  }

	  return node;
	}
	function moduleMetadata(sections, functionNames, localNames, producers) {
	  if (!(_typeof(sections) === "object" && typeof sections.length !== "undefined")) {
	    throw new Error('typeof sections === "object" && typeof sections.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  if (functionNames !== null && functionNames !== undefined) {
	    if (!(_typeof(functionNames) === "object" && typeof functionNames.length !== "undefined")) {
	      throw new Error('typeof functionNames === "object" && typeof functionNames.length !== "undefined"' + " error: " + ("unknown"));
	    }
	  }

	  if (localNames !== null && localNames !== undefined) {
	    if (!(_typeof(localNames) === "object" && typeof localNames.length !== "undefined")) {
	      throw new Error('typeof localNames === "object" && typeof localNames.length !== "undefined"' + " error: " + ("unknown"));
	    }
	  }

	  if (producers !== null && producers !== undefined) {
	    if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
	      throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + ("unknown"));
	    }
	  }

	  var node = {
	    type: "ModuleMetadata",
	    sections: sections
	  };

	  if (typeof functionNames !== "undefined" && functionNames.length > 0) {
	    node.functionNames = functionNames;
	  }

	  if (typeof localNames !== "undefined" && localNames.length > 0) {
	    node.localNames = localNames;
	  }

	  if (typeof producers !== "undefined" && producers.length > 0) {
	    node.producers = producers;
	  }

	  return node;
	}
	function functionNameMetadata(value, index) {
	  if (!(typeof value === "string")) {
	    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
	  }

	  if (!(typeof index === "number")) {
	    throw new Error('typeof index === "number"' + " error: " + ("Argument index must be of type number, given: " + _typeof(index) || "unknown"));
	  }

	  var node = {
	    type: "FunctionNameMetadata",
	    value: value,
	    index: index
	  };
	  return node;
	}
	function localNameMetadata(value, localIndex, functionIndex) {
	  if (!(typeof value === "string")) {
	    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
	  }

	  if (!(typeof localIndex === "number")) {
	    throw new Error('typeof localIndex === "number"' + " error: " + ("Argument localIndex must be of type number, given: " + _typeof(localIndex) || "unknown"));
	  }

	  if (!(typeof functionIndex === "number")) {
	    throw new Error('typeof functionIndex === "number"' + " error: " + ("Argument functionIndex must be of type number, given: " + _typeof(functionIndex) || "unknown"));
	  }

	  var node = {
	    type: "LocalNameMetadata",
	    value: value,
	    localIndex: localIndex,
	    functionIndex: functionIndex
	  };
	  return node;
	}
	function sectionMetadata(section, startOffset, size, vectorOfSize) {
	  if (!(typeof startOffset === "number")) {
	    throw new Error('typeof startOffset === "number"' + " error: " + ("Argument startOffset must be of type number, given: " + _typeof(startOffset) || "unknown"));
	  }

	  var node = {
	    type: "SectionMetadata",
	    section: section,
	    startOffset: startOffset,
	    size: size,
	    vectorOfSize: vectorOfSize
	  };
	  return node;
	}
	function producersSectionMetadata(producers) {
	  if (!(_typeof(producers) === "object" && typeof producers.length !== "undefined")) {
	    throw new Error('typeof producers === "object" && typeof producers.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "ProducersSectionMetadata",
	    producers: producers
	  };
	  return node;
	}
	function producerMetadataVersionedName(name, version) {
	  if (!(typeof name === "string")) {
	    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
	  }

	  if (!(typeof version === "string")) {
	    throw new Error('typeof version === "string"' + " error: " + ("Argument version must be of type string, given: " + _typeof(version) || "unknown"));
	  }

	  var node = {
	    type: "ProducerMetadataVersionedName",
	    name: name,
	    version: version
	  };
	  return node;
	}
	function loopInstruction(label, resulttype, instr) {
	  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
	    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "LoopInstruction",
	    id: "loop",
	    label: label,
	    resulttype: resulttype,
	    instr: instr
	  };
	  return node;
	}
	function instr(id, object, args, namedArgs) {
	  if (!(typeof id === "string")) {
	    throw new Error('typeof id === "string"' + " error: " + ("Argument id must be of type string, given: " + _typeof(id) || "unknown"));
	  }

	  if (!(_typeof(args) === "object" && typeof args.length !== "undefined")) {
	    throw new Error('typeof args === "object" && typeof args.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "Instr",
	    id: id,
	    args: args
	  };

	  if (typeof object !== "undefined") {
	    node.object = object;
	  }

	  if (typeof namedArgs !== "undefined" && Object.keys(namedArgs).length !== 0) {
	    node.namedArgs = namedArgs;
	  }

	  return node;
	}
	function ifInstruction(testLabel, test, result, consequent, alternate) {
	  if (!(_typeof(test) === "object" && typeof test.length !== "undefined")) {
	    throw new Error('typeof test === "object" && typeof test.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  if (!(_typeof(consequent) === "object" && typeof consequent.length !== "undefined")) {
	    throw new Error('typeof consequent === "object" && typeof consequent.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  if (!(_typeof(alternate) === "object" && typeof alternate.length !== "undefined")) {
	    throw new Error('typeof alternate === "object" && typeof alternate.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "IfInstruction",
	    id: "if",
	    testLabel: testLabel,
	    test: test,
	    result: result,
	    consequent: consequent,
	    alternate: alternate
	  };
	  return node;
	}
	function numberLiteral(value, raw) {
	  if (!(typeof value === "number")) {
	    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
	  }

	  if (!(typeof raw === "string")) {
	    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
	  }

	  var node = {
	    type: "NumberLiteral",
	    value: value,
	    raw: raw
	  };
	  return node;
	}
	function longNumberLiteral(value, raw) {
	  if (!(typeof raw === "string")) {
	    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
	  }

	  var node = {
	    type: "LongNumberLiteral",
	    value: value,
	    raw: raw
	  };
	  return node;
	}
	function floatLiteral(value, nan, inf, raw) {
	  if (!(typeof value === "number")) {
	    throw new Error('typeof value === "number"' + " error: " + ("Argument value must be of type number, given: " + _typeof(value) || "unknown"));
	  }

	  if (nan !== null && nan !== undefined) {
	    if (!(typeof nan === "boolean")) {
	      throw new Error('typeof nan === "boolean"' + " error: " + ("Argument nan must be of type boolean, given: " + _typeof(nan) || "unknown"));
	    }
	  }

	  if (inf !== null && inf !== undefined) {
	    if (!(typeof inf === "boolean")) {
	      throw new Error('typeof inf === "boolean"' + " error: " + ("Argument inf must be of type boolean, given: " + _typeof(inf) || "unknown"));
	    }
	  }

	  if (!(typeof raw === "string")) {
	    throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
	  }

	  var node = {
	    type: "FloatLiteral",
	    value: value,
	    raw: raw
	  };

	  if (nan === true) {
	    node.nan = true;
	  }

	  if (inf === true) {
	    node.inf = true;
	  }

	  return node;
	}
	function elem(table, offset, funcs) {
	  if (!(_typeof(offset) === "object" && typeof offset.length !== "undefined")) {
	    throw new Error('typeof offset === "object" && typeof offset.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  if (!(_typeof(funcs) === "object" && typeof funcs.length !== "undefined")) {
	    throw new Error('typeof funcs === "object" && typeof funcs.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "Elem",
	    table: table,
	    offset: offset,
	    funcs: funcs
	  };
	  return node;
	}
	function valtypeLiteral(name) {
	  var node = {
	    type: "ValtypeLiteral",
	    name: name
	  };
	  return node;
	}
	function typeInstruction(id, functype) {
	  var node = {
	    type: "TypeInstruction",
	    id: id,
	    functype: functype
	  };
	  return node;
	}
	function start(index) {
	  var node = {
	    type: "Start",
	    index: index
	  };
	  return node;
	}
	function globalType(valtype, mutability) {
	  var node = {
	    type: "GlobalType",
	    valtype: valtype,
	    mutability: mutability
	  };
	  return node;
	}
	function data(memoryIndex, offset, init) {
	  var node = {
	    type: "Data",
	    memoryIndex: memoryIndex,
	    offset: offset,
	    init: init
	  };
	  return node;
	}
	function global$1(globalType, init, name) {
	  if (!(_typeof(init) === "object" && typeof init.length !== "undefined")) {
	    throw new Error('typeof init === "object" && typeof init.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "Global",
	    globalType: globalType,
	    init: init,
	    name: name
	  };
	  return node;
	}
	function table(elementType, limits, name, elements) {
	  if (!(limits.type === "Limit")) {
	    throw new Error('limits.type === "Limit"' + " error: " + ("Argument limits must be of type Limit, given: " + limits.type || "unknown"));
	  }

	  if (elements !== null && elements !== undefined) {
	    if (!(_typeof(elements) === "object" && typeof elements.length !== "undefined")) {
	      throw new Error('typeof elements === "object" && typeof elements.length !== "undefined"' + " error: " + ("unknown"));
	    }
	  }

	  var node = {
	    type: "Table",
	    elementType: elementType,
	    limits: limits,
	    name: name
	  };

	  if (typeof elements !== "undefined" && elements.length > 0) {
	    node.elements = elements;
	  }

	  return node;
	}
	function memory(limits, id) {
	  var node = {
	    type: "Memory",
	    limits: limits,
	    id: id
	  };
	  return node;
	}
	function funcImportDescr(id, signature) {
	  var node = {
	    type: "FuncImportDescr",
	    id: id,
	    signature: signature
	  };
	  return node;
	}
	function moduleImport(module, name, descr) {
	  if (!(typeof module === "string")) {
	    throw new Error('typeof module === "string"' + " error: " + ("Argument module must be of type string, given: " + _typeof(module) || "unknown"));
	  }

	  if (!(typeof name === "string")) {
	    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
	  }

	  var node = {
	    type: "ModuleImport",
	    module: module,
	    name: name,
	    descr: descr
	  };
	  return node;
	}
	function moduleExportDescr(exportType, id) {
	  var node = {
	    type: "ModuleExportDescr",
	    exportType: exportType,
	    id: id
	  };
	  return node;
	}
	function moduleExport(name, descr) {
	  if (!(typeof name === "string")) {
	    throw new Error('typeof name === "string"' + " error: " + ("Argument name must be of type string, given: " + _typeof(name) || "unknown"));
	  }

	  var node = {
	    type: "ModuleExport",
	    name: name,
	    descr: descr
	  };
	  return node;
	}
	function limit(min, max, shared) {
	  if (!(typeof min === "number")) {
	    throw new Error('typeof min === "number"' + " error: " + ("Argument min must be of type number, given: " + _typeof(min) || "unknown"));
	  }

	  if (max !== null && max !== undefined) {
	    if (!(typeof max === "number")) {
	      throw new Error('typeof max === "number"' + " error: " + ("Argument max must be of type number, given: " + _typeof(max) || "unknown"));
	    }
	  }

	  if (shared !== null && shared !== undefined) {
	    if (!(typeof shared === "boolean")) {
	      throw new Error('typeof shared === "boolean"' + " error: " + ("Argument shared must be of type boolean, given: " + _typeof(shared) || "unknown"));
	    }
	  }

	  var node = {
	    type: "Limit",
	    min: min
	  };

	  if (typeof max !== "undefined") {
	    node.max = max;
	  }

	  if (shared === true) {
	    node.shared = true;
	  }

	  return node;
	}
	function signature(params, results) {
	  if (!(_typeof(params) === "object" && typeof params.length !== "undefined")) {
	    throw new Error('typeof params === "object" && typeof params.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  if (!(_typeof(results) === "object" && typeof results.length !== "undefined")) {
	    throw new Error('typeof results === "object" && typeof results.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "Signature",
	    params: params,
	    results: results
	  };
	  return node;
	}
	function program(body) {
	  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
	    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "Program",
	    body: body
	  };
	  return node;
	}
	function identifier(value, raw) {
	  if (!(typeof value === "string")) {
	    throw new Error('typeof value === "string"' + " error: " + ("Argument value must be of type string, given: " + _typeof(value) || "unknown"));
	  }

	  if (raw !== null && raw !== undefined) {
	    if (!(typeof raw === "string")) {
	      throw new Error('typeof raw === "string"' + " error: " + ("Argument raw must be of type string, given: " + _typeof(raw) || "unknown"));
	    }
	  }

	  var node = {
	    type: "Identifier",
	    value: value
	  };

	  if (typeof raw !== "undefined") {
	    node.raw = raw;
	  }

	  return node;
	}
	function blockInstruction(label, instr, result) {
	  if (!(_typeof(instr) === "object" && typeof instr.length !== "undefined")) {
	    throw new Error('typeof instr === "object" && typeof instr.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "BlockInstruction",
	    id: "block",
	    label: label,
	    instr: instr,
	    result: result
	  };
	  return node;
	}
	function callInstruction(index, instrArgs, numeric) {
	  if (instrArgs !== null && instrArgs !== undefined) {
	    if (!(_typeof(instrArgs) === "object" && typeof instrArgs.length !== "undefined")) {
	      throw new Error('typeof instrArgs === "object" && typeof instrArgs.length !== "undefined"' + " error: " + ("unknown"));
	    }
	  }

	  var node = {
	    type: "CallInstruction",
	    id: "call",
	    index: index
	  };

	  if (typeof instrArgs !== "undefined" && instrArgs.length > 0) {
	    node.instrArgs = instrArgs;
	  }

	  if (typeof numeric !== "undefined") {
	    node.numeric = numeric;
	  }

	  return node;
	}
	function callIndirectInstruction(signature, intrs) {
	  if (intrs !== null && intrs !== undefined) {
	    if (!(_typeof(intrs) === "object" && typeof intrs.length !== "undefined")) {
	      throw new Error('typeof intrs === "object" && typeof intrs.length !== "undefined"' + " error: " + ("unknown"));
	    }
	  }

	  var node = {
	    type: "CallIndirectInstruction",
	    id: "call_indirect",
	    signature: signature
	  };

	  if (typeof intrs !== "undefined" && intrs.length > 0) {
	    node.intrs = intrs;
	  }

	  return node;
	}
	function byteArray(values) {
	  if (!(_typeof(values) === "object" && typeof values.length !== "undefined")) {
	    throw new Error('typeof values === "object" && typeof values.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  var node = {
	    type: "ByteArray",
	    values: values
	  };
	  return node;
	}
	function func(name, signature, body, isExternal, metadata) {
	  if (!(_typeof(body) === "object" && typeof body.length !== "undefined")) {
	    throw new Error('typeof body === "object" && typeof body.length !== "undefined"' + " error: " + ("unknown"));
	  }

	  if (isExternal !== null && isExternal !== undefined) {
	    if (!(typeof isExternal === "boolean")) {
	      throw new Error('typeof isExternal === "boolean"' + " error: " + ("Argument isExternal must be of type boolean, given: " + _typeof(isExternal) || "unknown"));
	    }
	  }

	  var node = {
	    type: "Func",
	    name: name,
	    signature: signature,
	    body: body
	  };

	  if (isExternal === true) {
	    node.isExternal = true;
	  }

	  if (typeof metadata !== "undefined") {
	    node.metadata = metadata;
	  }

	  return node;
	}
	var unionTypesMap = {
	  Module: ["Node"],
	  ModuleMetadata: ["Node"],
	  ModuleNameMetadata: ["Node"],
	  FunctionNameMetadata: ["Node"],
	  LocalNameMetadata: ["Node"],
	  BinaryModule: ["Node"],
	  QuoteModule: ["Node"],
	  SectionMetadata: ["Node"],
	  ProducersSectionMetadata: ["Node"],
	  ProducerMetadata: ["Node"],
	  ProducerMetadataVersionedName: ["Node"],
	  LoopInstruction: ["Node", "Block", "Instruction"],
	  Instr: ["Node", "Expression", "Instruction"],
	  IfInstruction: ["Node", "Instruction"],
	  StringLiteral: ["Node", "Expression"],
	  NumberLiteral: ["Node", "NumericLiteral", "Expression"],
	  LongNumberLiteral: ["Node", "NumericLiteral", "Expression"],
	  FloatLiteral: ["Node", "NumericLiteral", "Expression"],
	  Elem: ["Node"],
	  IndexInFuncSection: ["Node"],
	  ValtypeLiteral: ["Node", "Expression"],
	  TypeInstruction: ["Node", "Instruction"],
	  Start: ["Node"],
	  GlobalType: ["Node", "ImportDescr"],
	  LeadingComment: ["Node"],
	  BlockComment: ["Node"],
	  Data: ["Node"],
	  Global: ["Node"],
	  Table: ["Node", "ImportDescr"],
	  Memory: ["Node", "ImportDescr"],
	  FuncImportDescr: ["Node", "ImportDescr"],
	  ModuleImport: ["Node"],
	  ModuleExportDescr: ["Node"],
	  ModuleExport: ["Node"],
	  Limit: ["Node"],
	  Signature: ["Node"],
	  Program: ["Node"],
	  Identifier: ["Node", "Expression"],
	  BlockInstruction: ["Node", "Block", "Instruction"],
	  CallInstruction: ["Node", "Instruction"],
	  CallIndirectInstruction: ["Node", "Instruction"],
	  ByteArray: ["Node"],
	  Func: ["Node", "Block"],
	  InternalBrUnless: ["Node", "Intrinsic"],
	  InternalGoto: ["Node", "Intrinsic"],
	  InternalCallExtern: ["Node", "Intrinsic"],
	  InternalEndAndReturn: ["Node", "Intrinsic"]
	};
	var nodeAndUnionTypes = ["Module", "ModuleMetadata", "ModuleNameMetadata", "FunctionNameMetadata", "LocalNameMetadata", "BinaryModule", "QuoteModule", "SectionMetadata", "ProducersSectionMetadata", "ProducerMetadata", "ProducerMetadataVersionedName", "LoopInstruction", "Instr", "IfInstruction", "StringLiteral", "NumberLiteral", "LongNumberLiteral", "FloatLiteral", "Elem", "IndexInFuncSection", "ValtypeLiteral", "TypeInstruction", "Start", "GlobalType", "LeadingComment", "BlockComment", "Data", "Global", "Table", "Memory", "FuncImportDescr", "ModuleImport", "ModuleExportDescr", "ModuleExport", "Limit", "Signature", "Program", "Identifier", "BlockInstruction", "CallInstruction", "CallIndirectInstruction", "ByteArray", "Func", "InternalBrUnless", "InternalGoto", "InternalCallExtern", "InternalEndAndReturn", "Node", "Block", "Instruction", "Expression", "NumericLiteral", "ImportDescr", "Intrinsic"];

	var long = Long;

	/**
	 * wasm optimizations, to do native i64 multiplication and divide
	 */
	var wasm = null;

	try {
	  wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
	    0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
	  ])), {}).exports;
	} catch (e) {
	  // no wasm support :(
	}

	/**
	 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
	 *  See the from* functions below for more convenient ways of constructing Longs.
	 * @exports Long
	 * @class A Long class for representing a 64 bit two's-complement integer value.
	 * @param {number} low The low (signed) 32 bits of the long
	 * @param {number} high The high (signed) 32 bits of the long
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @constructor
	 */
	function Long(low, high, unsigned) {

	    /**
	     * The low 32 bits as a signed value.
	     * @type {number}
	     */
	    this.low = low | 0;

	    /**
	     * The high 32 bits as a signed value.
	     * @type {number}
	     */
	    this.high = high | 0;

	    /**
	     * Whether unsigned or not.
	     * @type {boolean}
	     */
	    this.unsigned = !!unsigned;
	}

	// The internal representation of a long is the two given signed, 32-bit values.
	// We use 32-bit pieces because these are the size of integers on which
	// Javascript performs bit-operations.  For operations like addition and
	// multiplication, we split each number into 16 bit pieces, which can easily be
	// multiplied within Javascript's floating-point representation without overflow
	// or change in sign.
	//
	// In the algorithms below, we frequently reduce the negative case to the
	// positive case by negating the input(s) and then post-processing the result.
	// Note that we must ALWAYS check specially whether those values are MIN_VALUE
	// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
	// a positive number, it overflows back into a negative).  Not handling this
	// case would often result in infinite recursion.
	//
	// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
	// methods on which they depend.

	/**
	 * An indicator used to reliably determine if an object is a Long or not.
	 * @type {boolean}
	 * @const
	 * @private
	 */
	Long.prototype.__isLong__;

	Object.defineProperty(Long.prototype, "__isLong__", { value: true });

	/**
	 * @function
	 * @param {*} obj Object
	 * @returns {boolean}
	 * @inner
	 */
	function isLong(obj) {
	    return (obj && obj["__isLong__"]) === true;
	}

	/**
	 * Tests if the specified object is a Long.
	 * @function
	 * @param {*} obj Object
	 * @returns {boolean}
	 */
	Long.isLong = isLong;

	/**
	 * A cache of the Long representations of small integer values.
	 * @type {!Object}
	 * @inner
	 */
	var INT_CACHE = {};

	/**
	 * A cache of the Long representations of small unsigned integer values.
	 * @type {!Object}
	 * @inner
	 */
	var UINT_CACHE = {};

	/**
	 * @param {number} value
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 */
	function fromInt(value, unsigned) {
	    var obj, cachedObj, cache;
	    if (unsigned) {
	        value >>>= 0;
	        if (cache = (0 <= value && value < 256)) {
	            cachedObj = UINT_CACHE[value];
	            if (cachedObj)
	                return cachedObj;
	        }
	        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	        if (cache)
	            UINT_CACHE[value] = obj;
	        return obj;
	    } else {
	        value |= 0;
	        if (cache = (-128 <= value && value < 128)) {
	            cachedObj = INT_CACHE[value];
	            if (cachedObj)
	                return cachedObj;
	        }
	        obj = fromBits(value, value < 0 ? -1 : 0, false);
	        if (cache)
	            INT_CACHE[value] = obj;
	        return obj;
	    }
	}

	/**
	 * Returns a Long representing the given 32 bit integer value.
	 * @function
	 * @param {number} value The 32 bit integer in question
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @returns {!Long} The corresponding Long value
	 */
	Long.fromInt = fromInt;

	/**
	 * @param {number} value
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 */
	function fromNumber(value, unsigned) {
	    if (isNaN(value))
	        return unsigned ? UZERO : ZERO;
	    if (unsigned) {
	        if (value < 0)
	            return UZERO;
	        if (value >= TWO_PWR_64_DBL)
	            return MAX_UNSIGNED_VALUE;
	    } else {
	        if (value <= -TWO_PWR_63_DBL)
	            return MIN_VALUE;
	        if (value + 1 >= TWO_PWR_63_DBL)
	            return MAX_VALUE;
	    }
	    if (value < 0)
	        return fromNumber(-value, unsigned).neg();
	    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
	}

	/**
	 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
	 * @function
	 * @param {number} value The number in question
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @returns {!Long} The corresponding Long value
	 */
	Long.fromNumber = fromNumber;

	/**
	 * @param {number} lowBits
	 * @param {number} highBits
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 */
	function fromBits(lowBits, highBits, unsigned) {
	    return new Long(lowBits, highBits, unsigned);
	}

	/**
	 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
	 *  assumed to use 32 bits.
	 * @function
	 * @param {number} lowBits The low 32 bits
	 * @param {number} highBits The high 32 bits
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @returns {!Long} The corresponding Long value
	 */
	Long.fromBits = fromBits;

	/**
	 * @function
	 * @param {number} base
	 * @param {number} exponent
	 * @returns {number}
	 * @inner
	 */
	var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

	/**
	 * @param {string} str
	 * @param {(boolean|number)=} unsigned
	 * @param {number=} radix
	 * @returns {!Long}
	 * @inner
	 */
	function fromString(str, unsigned, radix) {
	    if (str.length === 0)
	        throw Error('empty string');
	    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	        return ZERO;
	    if (typeof unsigned === 'number') {
	        // For goog.math.long compatibility
	        radix = unsigned,
	        unsigned = false;
	    } else {
	        unsigned = !! unsigned;
	    }
	    radix = radix || 10;
	    if (radix < 2 || 36 < radix)
	        throw RangeError('radix');

	    var p;
	    if ((p = str.indexOf('-')) > 0)
	        throw Error('interior hyphen');
	    else if (p === 0) {
	        return fromString(str.substring(1), unsigned, radix).neg();
	    }

	    // Do several (8) digits each time through the loop, so as to
	    // minimize the calls to the very expensive emulated div.
	    var radixToPower = fromNumber(pow_dbl(radix, 8));

	    var result = ZERO;
	    for (var i = 0; i < str.length; i += 8) {
	        var size = Math.min(8, str.length - i),
	            value = parseInt(str.substring(i, i + size), radix);
	        if (size < 8) {
	            var power = fromNumber(pow_dbl(radix, size));
	            result = result.mul(power).add(fromNumber(value));
	        } else {
	            result = result.mul(radixToPower);
	            result = result.add(fromNumber(value));
	        }
	    }
	    result.unsigned = unsigned;
	    return result;
	}

	/**
	 * Returns a Long representation of the given string, written using the specified radix.
	 * @function
	 * @param {string} str The textual representation of the Long
	 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
	 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
	 * @returns {!Long} The corresponding Long value
	 */
	Long.fromString = fromString;

	/**
	 * @function
	 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	 * @param {boolean=} unsigned
	 * @returns {!Long}
	 * @inner
	 */
	function fromValue(val, unsigned) {
	    if (typeof val === 'number')
	        return fromNumber(val, unsigned);
	    if (typeof val === 'string')
	        return fromString(val, unsigned);
	    // Throws for non-objects, converts non-instanceof Long:
	    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
	}

	/**
	 * Converts the specified value to a Long using the appropriate from* function for its type.
	 * @function
	 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @returns {!Long}
	 */
	Long.fromValue = fromValue;

	// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
	// no runtime penalty for these.

	/**
	 * @type {number}
	 * @const
	 * @inner
	 */
	var TWO_PWR_16_DBL = 1 << 16;

	/**
	 * @type {number}
	 * @const
	 * @inner
	 */
	var TWO_PWR_24_DBL = 1 << 24;

	/**
	 * @type {number}
	 * @const
	 * @inner
	 */
	var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

	/**
	 * @type {number}
	 * @const
	 * @inner
	 */
	var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

	/**
	 * @type {number}
	 * @const
	 * @inner
	 */
	var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

	/**
	 * @type {!Long}
	 * @const
	 * @inner
	 */
	var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

	/**
	 * @type {!Long}
	 * @inner
	 */
	var ZERO = fromInt(0);

	/**
	 * Signed zero.
	 * @type {!Long}
	 */
	Long.ZERO = ZERO;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var UZERO = fromInt(0, true);

	/**
	 * Unsigned zero.
	 * @type {!Long}
	 */
	Long.UZERO = UZERO;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var ONE = fromInt(1);

	/**
	 * Signed one.
	 * @type {!Long}
	 */
	Long.ONE = ONE;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var UONE = fromInt(1, true);

	/**
	 * Unsigned one.
	 * @type {!Long}
	 */
	Long.UONE = UONE;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var NEG_ONE = fromInt(-1);

	/**
	 * Signed negative one.
	 * @type {!Long}
	 */
	Long.NEG_ONE = NEG_ONE;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

	/**
	 * Maximum signed value.
	 * @type {!Long}
	 */
	Long.MAX_VALUE = MAX_VALUE;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

	/**
	 * Maximum unsigned value.
	 * @type {!Long}
	 */
	Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

	/**
	 * @type {!Long}
	 * @inner
	 */
	var MIN_VALUE = fromBits(0, 0x80000000|0, false);

	/**
	 * Minimum signed value.
	 * @type {!Long}
	 */
	Long.MIN_VALUE = MIN_VALUE;

	/**
	 * @alias Long.prototype
	 * @inner
	 */
	var LongPrototype = Long.prototype;

	/**
	 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	 * @this {!Long}
	 * @returns {number}
	 */
	LongPrototype.toInt = function toInt() {
	    return this.unsigned ? this.low >>> 0 : this.low;
	};

	/**
	 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	 * @this {!Long}
	 * @returns {number}
	 */
	LongPrototype.toNumber = function toNumber() {
	    if (this.unsigned)
	        return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
	};

	/**
	 * Converts the Long to a string written in the specified radix.
	 * @this {!Long}
	 * @param {number=} radix Radix (2-36), defaults to 10
	 * @returns {string}
	 * @override
	 * @throws {RangeError} If `radix` is out of range
	 */
	LongPrototype.toString = function toString(radix) {
	    radix = radix || 10;
	    if (radix < 2 || 36 < radix)
	        throw RangeError('radix');
	    if (this.isZero())
	        return '0';
	    if (this.isNegative()) { // Unsigned Longs are never negative
	        if (this.eq(MIN_VALUE)) {
	            // We need to change the Long value before it can be negated, so we remove
	            // the bottom-most digit in this base and then recurse to do the rest.
	            var radixLong = fromNumber(radix),
	                div = this.div(radixLong),
	                rem1 = div.mul(radixLong).sub(this);
	            return div.toString(radix) + rem1.toInt().toString(radix);
	        } else
	            return '-' + this.neg().toString(radix);
	    }

	    // Do several (6) digits each time through the loop, so as to
	    // minimize the calls to the very expensive emulated div.
	    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
	        rem = this;
	    var result = '';
	    while (true) {
	        var remDiv = rem.div(radixToPower),
	            intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
	            digits = intval.toString(radix);
	        rem = remDiv;
	        if (rem.isZero())
	            return digits + result;
	        else {
	            while (digits.length < 6)
	                digits = '0' + digits;
	            result = '' + digits + result;
	        }
	    }
	};

	/**
	 * Gets the high 32 bits as a signed integer.
	 * @this {!Long}
	 * @returns {number} Signed high bits
	 */
	LongPrototype.getHighBits = function getHighBits() {
	    return this.high;
	};

	/**
	 * Gets the high 32 bits as an unsigned integer.
	 * @this {!Long}
	 * @returns {number} Unsigned high bits
	 */
	LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	    return this.high >>> 0;
	};

	/**
	 * Gets the low 32 bits as a signed integer.
	 * @this {!Long}
	 * @returns {number} Signed low bits
	 */
	LongPrototype.getLowBits = function getLowBits() {
	    return this.low;
	};

	/**
	 * Gets the low 32 bits as an unsigned integer.
	 * @this {!Long}
	 * @returns {number} Unsigned low bits
	 */
	LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	    return this.low >>> 0;
	};

	/**
	 * Gets the number of bits needed to represent the absolute value of this Long.
	 * @this {!Long}
	 * @returns {number}
	 */
	LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	    if (this.isNegative()) // Unsigned Longs are never negative
	        return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	    var val = this.high != 0 ? this.high : this.low;
	    for (var bit = 31; bit > 0; bit--)
	        if ((val & (1 << bit)) != 0)
	            break;
	    return this.high != 0 ? bit + 33 : bit + 1;
	};

	/**
	 * Tests if this Long's value equals zero.
	 * @this {!Long}
	 * @returns {boolean}
	 */
	LongPrototype.isZero = function isZero() {
	    return this.high === 0 && this.low === 0;
	};

	/**
	 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
	 * @returns {boolean}
	 */
	LongPrototype.eqz = LongPrototype.isZero;

	/**
	 * Tests if this Long's value is negative.
	 * @this {!Long}
	 * @returns {boolean}
	 */
	LongPrototype.isNegative = function isNegative() {
	    return !this.unsigned && this.high < 0;
	};

	/**
	 * Tests if this Long's value is positive.
	 * @this {!Long}
	 * @returns {boolean}
	 */
	LongPrototype.isPositive = function isPositive() {
	    return this.unsigned || this.high >= 0;
	};

	/**
	 * Tests if this Long's value is odd.
	 * @this {!Long}
	 * @returns {boolean}
	 */
	LongPrototype.isOdd = function isOdd() {
	    return (this.low & 1) === 1;
	};

	/**
	 * Tests if this Long's value is even.
	 * @this {!Long}
	 * @returns {boolean}
	 */
	LongPrototype.isEven = function isEven() {
	    return (this.low & 1) === 0;
	};

	/**
	 * Tests if this Long's value equals the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.equals = function equals(other) {
	    if (!isLong(other))
	        other = fromValue(other);
	    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	        return false;
	    return this.high === other.high && this.low === other.low;
	};

	/**
	 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.eq = LongPrototype.equals;

	/**
	 * Tests if this Long's value differs from the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.notEquals = function notEquals(other) {
	    return !this.eq(/* validates */ other);
	};

	/**
	 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.neq = LongPrototype.notEquals;

	/**
	 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.ne = LongPrototype.notEquals;

	/**
	 * Tests if this Long's value is less than the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.lessThan = function lessThan(other) {
	    return this.comp(/* validates */ other) < 0;
	};

	/**
	 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.lt = LongPrototype.lessThan;

	/**
	 * Tests if this Long's value is less than or equal the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	    return this.comp(/* validates */ other) <= 0;
	};

	/**
	 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.lte = LongPrototype.lessThanOrEqual;

	/**
	 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.le = LongPrototype.lessThanOrEqual;

	/**
	 * Tests if this Long's value is greater than the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.greaterThan = function greaterThan(other) {
	    return this.comp(/* validates */ other) > 0;
	};

	/**
	 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.gt = LongPrototype.greaterThan;

	/**
	 * Tests if this Long's value is greater than or equal the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	    return this.comp(/* validates */ other) >= 0;
	};

	/**
	 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.gte = LongPrototype.greaterThanOrEqual;

	/**
	 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {boolean}
	 */
	LongPrototype.ge = LongPrototype.greaterThanOrEqual;

	/**
	 * Compares this Long's value with the specified's.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other value
	 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	 *  if the given one is greater
	 */
	LongPrototype.compare = function compare(other) {
	    if (!isLong(other))
	        other = fromValue(other);
	    if (this.eq(other))
	        return 0;
	    var thisNeg = this.isNegative(),
	        otherNeg = other.isNegative();
	    if (thisNeg && !otherNeg)
	        return -1;
	    if (!thisNeg && otherNeg)
	        return 1;
	    // At this point the sign bits are the same
	    if (!this.unsigned)
	        return this.sub(other).isNegative() ? -1 : 1;
	    // Both are positive if at least one is unsigned
	    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
	};

	/**
	 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
	 * @function
	 * @param {!Long|number|string} other Other value
	 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	 *  if the given one is greater
	 */
	LongPrototype.comp = LongPrototype.compare;

	/**
	 * Negates this Long's value.
	 * @this {!Long}
	 * @returns {!Long} Negated Long
	 */
	LongPrototype.negate = function negate() {
	    if (!this.unsigned && this.eq(MIN_VALUE))
	        return MIN_VALUE;
	    return this.not().add(ONE);
	};

	/**
	 * Negates this Long's value. This is an alias of {@link Long#negate}.
	 * @function
	 * @returns {!Long} Negated Long
	 */
	LongPrototype.neg = LongPrototype.negate;

	/**
	 * Returns the sum of this and the specified Long.
	 * @this {!Long}
	 * @param {!Long|number|string} addend Addend
	 * @returns {!Long} Sum
	 */
	LongPrototype.add = function add(addend) {
	    if (!isLong(addend))
	        addend = fromValue(addend);

	    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

	    var a48 = this.high >>> 16;
	    var a32 = this.high & 0xFFFF;
	    var a16 = this.low >>> 16;
	    var a00 = this.low & 0xFFFF;

	    var b48 = addend.high >>> 16;
	    var b32 = addend.high & 0xFFFF;
	    var b16 = addend.low >>> 16;
	    var b00 = addend.low & 0xFFFF;

	    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	    c00 += a00 + b00;
	    c16 += c00 >>> 16;
	    c00 &= 0xFFFF;
	    c16 += a16 + b16;
	    c32 += c16 >>> 16;
	    c16 &= 0xFFFF;
	    c32 += a32 + b32;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c48 += a48 + b48;
	    c48 &= 0xFFFF;
	    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	};

	/**
	 * Returns the difference of this and the specified Long.
	 * @this {!Long}
	 * @param {!Long|number|string} subtrahend Subtrahend
	 * @returns {!Long} Difference
	 */
	LongPrototype.subtract = function subtract(subtrahend) {
	    if (!isLong(subtrahend))
	        subtrahend = fromValue(subtrahend);
	    return this.add(subtrahend.neg());
	};

	/**
	 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
	 * @function
	 * @param {!Long|number|string} subtrahend Subtrahend
	 * @returns {!Long} Difference
	 */
	LongPrototype.sub = LongPrototype.subtract;

	/**
	 * Returns the product of this and the specified Long.
	 * @this {!Long}
	 * @param {!Long|number|string} multiplier Multiplier
	 * @returns {!Long} Product
	 */
	LongPrototype.multiply = function multiply(multiplier) {
	    if (this.isZero())
	        return ZERO;
	    if (!isLong(multiplier))
	        multiplier = fromValue(multiplier);

	    // use wasm support if present
	    if (wasm) {
	        var low = wasm["mul"](this.low,
	                              this.high,
	                              multiplier.low,
	                              multiplier.high);
	        return fromBits(low, wasm["get_high"](), this.unsigned);
	    }

	    if (multiplier.isZero())
	        return ZERO;
	    if (this.eq(MIN_VALUE))
	        return multiplier.isOdd() ? MIN_VALUE : ZERO;
	    if (multiplier.eq(MIN_VALUE))
	        return this.isOdd() ? MIN_VALUE : ZERO;

	    if (this.isNegative()) {
	        if (multiplier.isNegative())
	            return this.neg().mul(multiplier.neg());
	        else
	            return this.neg().mul(multiplier).neg();
	    } else if (multiplier.isNegative())
	        return this.mul(multiplier.neg()).neg();

	    // If both longs are small, use float multiplication
	    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	        return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

	    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	    // We can skip products that would overflow.

	    var a48 = this.high >>> 16;
	    var a32 = this.high & 0xFFFF;
	    var a16 = this.low >>> 16;
	    var a00 = this.low & 0xFFFF;

	    var b48 = multiplier.high >>> 16;
	    var b32 = multiplier.high & 0xFFFF;
	    var b16 = multiplier.low >>> 16;
	    var b00 = multiplier.low & 0xFFFF;

	    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	    c00 += a00 * b00;
	    c16 += c00 >>> 16;
	    c00 &= 0xFFFF;
	    c16 += a16 * b00;
	    c32 += c16 >>> 16;
	    c16 &= 0xFFFF;
	    c16 += a00 * b16;
	    c32 += c16 >>> 16;
	    c16 &= 0xFFFF;
	    c32 += a32 * b00;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c32 += a16 * b16;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c32 += a00 * b32;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	    c48 &= 0xFFFF;
	    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	};

	/**
	 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
	 * @function
	 * @param {!Long|number|string} multiplier Multiplier
	 * @returns {!Long} Product
	 */
	LongPrototype.mul = LongPrototype.multiply;

	/**
	 * Returns this Long divided by the specified. The result is signed if this Long is signed or
	 *  unsigned if this Long is unsigned.
	 * @this {!Long}
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Quotient
	 */
	LongPrototype.divide = function divide(divisor) {
	    if (!isLong(divisor))
	        divisor = fromValue(divisor);
	    if (divisor.isZero())
	        throw Error('division by zero');

	    // use wasm support if present
	    if (wasm) {
	        // guard against signed division overflow: the largest
	        // negative number / -1 would be 1 larger than the largest
	        // positive number, due to two's complement.
	        if (!this.unsigned &&
	            this.high === -0x80000000 &&
	            divisor.low === -1 && divisor.high === -1) {
	            // be consistent with non-wasm code path
	            return this;
	        }
	        var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(
	            this.low,
	            this.high,
	            divisor.low,
	            divisor.high
	        );
	        return fromBits(low, wasm["get_high"](), this.unsigned);
	    }

	    if (this.isZero())
	        return this.unsigned ? UZERO : ZERO;
	    var approx, rem, res;
	    if (!this.unsigned) {
	        // This section is only relevant for signed longs and is derived from the
	        // closure library as a whole.
	        if (this.eq(MIN_VALUE)) {
	            if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	                return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
	            else if (divisor.eq(MIN_VALUE))
	                return ONE;
	            else {
	                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	                var halfThis = this.shr(1);
	                approx = halfThis.div(divisor).shl(1);
	                if (approx.eq(ZERO)) {
	                    return divisor.isNegative() ? ONE : NEG_ONE;
	                } else {
	                    rem = this.sub(divisor.mul(approx));
	                    res = approx.add(rem.div(divisor));
	                    return res;
	                }
	            }
	        } else if (divisor.eq(MIN_VALUE))
	            return this.unsigned ? UZERO : ZERO;
	        if (this.isNegative()) {
	            if (divisor.isNegative())
	                return this.neg().div(divisor.neg());
	            return this.neg().div(divisor).neg();
	        } else if (divisor.isNegative())
	            return this.div(divisor.neg()).neg();
	        res = ZERO;
	    } else {
	        // The algorithm below has not been made for unsigned longs. It's therefore
	        // required to take special care of the MSB prior to running it.
	        if (!divisor.unsigned)
	            divisor = divisor.toUnsigned();
	        if (divisor.gt(this))
	            return UZERO;
	        if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	            return UONE;
	        res = UZERO;
	    }

	    // Repeat the following until the remainder is less than other:  find a
	    // floating-point that approximates remainder / other *from below*, add this
	    // into the result, and subtract it from the remainder.  It is critical that
	    // the approximate value is less than or equal to the real value so that the
	    // remainder never becomes negative.
	    rem = this;
	    while (rem.gte(divisor)) {
	        // Approximate the result of division. This may be a little greater or
	        // smaller than the actual value.
	        approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

	        // We will tweak the approximate result by changing it in the 48-th digit or
	        // the smallest non-fractional digit, whichever is larger.
	        var log2 = Math.ceil(Math.log(approx) / Math.LN2),
	            delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

	        // Decrease the approximation until it is smaller than the remainder.  Note
	        // that if it is too large, the product overflows and is negative.
	            approxRes = fromNumber(approx),
	            approxRem = approxRes.mul(divisor);
	        while (approxRem.isNegative() || approxRem.gt(rem)) {
	            approx -= delta;
	            approxRes = fromNumber(approx, this.unsigned);
	            approxRem = approxRes.mul(divisor);
	        }

	        // We know the answer can't be zero... and actually, zero would cause
	        // infinite recursion since we would make no progress.
	        if (approxRes.isZero())
	            approxRes = ONE;

	        res = res.add(approxRes);
	        rem = rem.sub(approxRem);
	    }
	    return res;
	};

	/**
	 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
	 * @function
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Quotient
	 */
	LongPrototype.div = LongPrototype.divide;

	/**
	 * Returns this Long modulo the specified.
	 * @this {!Long}
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Remainder
	 */
	LongPrototype.modulo = function modulo(divisor) {
	    if (!isLong(divisor))
	        divisor = fromValue(divisor);

	    // use wasm support if present
	    if (wasm) {
	        var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(
	            this.low,
	            this.high,
	            divisor.low,
	            divisor.high
	        );
	        return fromBits(low, wasm["get_high"](), this.unsigned);
	    }

	    return this.sub(this.div(divisor).mul(divisor));
	};

	/**
	 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	 * @function
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Remainder
	 */
	LongPrototype.mod = LongPrototype.modulo;

	/**
	 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	 * @function
	 * @param {!Long|number|string} divisor Divisor
	 * @returns {!Long} Remainder
	 */
	LongPrototype.rem = LongPrototype.modulo;

	/**
	 * Returns the bitwise NOT of this Long.
	 * @this {!Long}
	 * @returns {!Long}
	 */
	LongPrototype.not = function not() {
	    return fromBits(~this.low, ~this.high, this.unsigned);
	};

	/**
	 * Returns the bitwise AND of this Long and the specified.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other Long
	 * @returns {!Long}
	 */
	LongPrototype.and = function and(other) {
	    if (!isLong(other))
	        other = fromValue(other);
	    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
	};

	/**
	 * Returns the bitwise OR of this Long and the specified.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other Long
	 * @returns {!Long}
	 */
	LongPrototype.or = function or(other) {
	    if (!isLong(other))
	        other = fromValue(other);
	    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
	};

	/**
	 * Returns the bitwise XOR of this Long and the given one.
	 * @this {!Long}
	 * @param {!Long|number|string} other Other Long
	 * @returns {!Long}
	 */
	LongPrototype.xor = function xor(other) {
	    if (!isLong(other))
	        other = fromValue(other);
	    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
	};

	/**
	 * Returns this Long with bits shifted to the left by the given amount.
	 * @this {!Long}
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shiftLeft = function shiftLeft(numBits) {
	    if (isLong(numBits))
	        numBits = numBits.toInt();
	    if ((numBits &= 63) === 0)
	        return this;
	    else if (numBits < 32)
	        return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	    else
	        return fromBits(0, this.low << (numBits - 32), this.unsigned);
	};

	/**
	 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
	 * @function
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shl = LongPrototype.shiftLeft;

	/**
	 * Returns this Long with bits arithmetically shifted to the right by the given amount.
	 * @this {!Long}
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shiftRight = function shiftRight(numBits) {
	    if (isLong(numBits))
	        numBits = numBits.toInt();
	    if ((numBits &= 63) === 0)
	        return this;
	    else if (numBits < 32)
	        return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	    else
	        return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
	};

	/**
	 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
	 * @function
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shr = LongPrototype.shiftRight;

	/**
	 * Returns this Long with bits logically shifted to the right by the given amount.
	 * @this {!Long}
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	    if (isLong(numBits)) numBits = numBits.toInt();
	    if ((numBits &= 63) === 0) return this;
	    if (numBits < 32) return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >>> numBits, this.unsigned);
	    if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
	    return fromBits(this.high >>> (numBits - 32), 0, this.unsigned);
	};

	/**
	 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	 * @function
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shru = LongPrototype.shiftRightUnsigned;

	/**
	 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	 * @function
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Shifted Long
	 */
	LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;

	/**
	 * Returns this Long with bits rotated to the left by the given amount.
	 * @this {!Long}
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Rotated Long
	 */
	LongPrototype.rotateLeft = function rotateLeft(numBits) {
	    var b;
	    if (isLong(numBits)) numBits = numBits.toInt();
	    if ((numBits &= 63) === 0) return this;
	    if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
	    if (numBits < 32) {
	        b = (32 - numBits);
	        return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
	    }
	    numBits -= 32;
	    b = (32 - numBits);
	    return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
	};
	/**
	 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
	 * @function
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Rotated Long
	 */
	LongPrototype.rotl = LongPrototype.rotateLeft;

	/**
	 * Returns this Long with bits rotated to the right by the given amount.
	 * @this {!Long}
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Rotated Long
	 */
	LongPrototype.rotateRight = function rotateRight(numBits) {
	    var b;
	    if (isLong(numBits)) numBits = numBits.toInt();
	    if ((numBits &= 63) === 0) return this;
	    if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
	    if (numBits < 32) {
	        b = (32 - numBits);
	        return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
	    }
	    numBits -= 32;
	    b = (32 - numBits);
	    return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
	};
	/**
	 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
	 * @function
	 * @param {number|!Long} numBits Number of bits
	 * @returns {!Long} Rotated Long
	 */
	LongPrototype.rotr = LongPrototype.rotateRight;

	/**
	 * Converts this Long to signed.
	 * @this {!Long}
	 * @returns {!Long} Signed long
	 */
	LongPrototype.toSigned = function toSigned() {
	    if (!this.unsigned)
	        return this;
	    return fromBits(this.low, this.high, false);
	};

	/**
	 * Converts this Long to unsigned.
	 * @this {!Long}
	 * @returns {!Long} Unsigned long
	 */
	LongPrototype.toUnsigned = function toUnsigned() {
	    if (this.unsigned)
	        return this;
	    return fromBits(this.low, this.high, true);
	};

	/**
	 * Converts this Long to its byte representation.
	 * @param {boolean=} le Whether little or big endian, defaults to big endian
	 * @this {!Long}
	 * @returns {!Array.<number>} Byte representation
	 */
	LongPrototype.toBytes = function toBytes(le) {
	    return le ? this.toBytesLE() : this.toBytesBE();
	};

	/**
	 * Converts this Long to its little endian byte representation.
	 * @this {!Long}
	 * @returns {!Array.<number>} Little endian byte representation
	 */
	LongPrototype.toBytesLE = function toBytesLE() {
	    var hi = this.high,
	        lo = this.low;
	    return [
	        lo        & 0xff,
	        lo >>>  8 & 0xff,
	        lo >>> 16 & 0xff,
	        lo >>> 24       ,
	        hi        & 0xff,
	        hi >>>  8 & 0xff,
	        hi >>> 16 & 0xff,
	        hi >>> 24
	    ];
	};

	/**
	 * Converts this Long to its big endian byte representation.
	 * @this {!Long}
	 * @returns {!Array.<number>} Big endian byte representation
	 */
	LongPrototype.toBytesBE = function toBytesBE() {
	    var hi = this.high,
	        lo = this.low;
	    return [
	        hi >>> 24       ,
	        hi >>> 16 & 0xff,
	        hi >>>  8 & 0xff,
	        hi        & 0xff,
	        lo >>> 24       ,
	        lo >>> 16 & 0xff,
	        lo >>>  8 & 0xff,
	        lo        & 0xff
	    ];
	};

	/**
	 * Creates a Long from its byte representation.
	 * @param {!Array.<number>} bytes Byte representation
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @param {boolean=} le Whether little or big endian, defaults to big endian
	 * @returns {Long} The corresponding Long value
	 */
	Long.fromBytes = function fromBytes(bytes, unsigned, le) {
	    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
	};

	/**
	 * Creates a Long from its little endian byte representation.
	 * @param {!Array.<number>} bytes Little endian byte representation
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @returns {Long} The corresponding Long value
	 */
	Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
	    return new Long(
	        bytes[0]       |
	        bytes[1] <<  8 |
	        bytes[2] << 16 |
	        bytes[3] << 24,
	        bytes[4]       |
	        bytes[5] <<  8 |
	        bytes[6] << 16 |
	        bytes[7] << 24,
	        unsigned
	    );
	};

	/**
	 * Creates a Long from its big endian byte representation.
	 * @param {!Array.<number>} bytes Big endian byte representation
	 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	 * @returns {Long} The corresponding Long value
	 */
	Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
	    return new Long(
	        bytes[4] << 24 |
	        bytes[5] << 16 |
	        bytes[6] <<  8 |
	        bytes[7],
	        bytes[0] << 24 |
	        bytes[1] << 16 |
	        bytes[2] <<  8 |
	        bytes[3],
	        unsigned
	    );
	};

	function parse(input) {
	  input = input.toUpperCase();
	  var splitIndex = input.indexOf("P");
	  var mantissa, exponent;

	  if (splitIndex !== -1) {
	    mantissa = input.substring(0, splitIndex);
	    exponent = parseInt(input.substring(splitIndex + 1));
	  } else {
	    mantissa = input;
	    exponent = 0;
	  }

	  var dotIndex = mantissa.indexOf(".");

	  if (dotIndex !== -1) {
	    var integerPart = parseInt(mantissa.substring(0, dotIndex), 16);
	    var sign = Math.sign(integerPart);
	    integerPart = sign * integerPart;
	    var fractionLength = mantissa.length - dotIndex - 1;
	    var fractionalPart = parseInt(mantissa.substring(dotIndex + 1), 16);
	    var fraction = fractionLength > 0 ? fractionalPart / Math.pow(16, fractionLength) : 0;

	    if (sign === 0) {
	      if (fraction === 0) {
	        mantissa = sign;
	      } else {
	        if (Object.is(sign, -0)) {
	          mantissa = -fraction;
	        } else {
	          mantissa = fraction;
	        }
	      }
	    } else {
	      mantissa = sign * (integerPart + fraction);
	    }
	  } else {
	    mantissa = parseInt(mantissa, 16);
	  }

	  return mantissa * (splitIndex !== -1 ? Math.pow(2, exponent) : 1);
	}

	function parse32F(sourceString) {
	  if (isHexLiteral(sourceString)) {
	    return parse(sourceString);
	  }

	  if (isInfLiteral(sourceString)) {
	    return sourceString[0] === "-" ? -1 : 1;
	  }

	  if (isNanLiteral(sourceString)) {
	    return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 0x400000);
	  }

	  return parseFloat(sourceString);
	}
	function parse64F(sourceString) {
	  if (isHexLiteral(sourceString)) {
	    return parse(sourceString);
	  }

	  if (isInfLiteral(sourceString)) {
	    return sourceString[0] === "-" ? -1 : 1;
	  }

	  if (isNanLiteral(sourceString)) {
	    return (sourceString[0] === "-" ? -1 : 1) * (sourceString.includes(":") ? parseInt(sourceString.substring(sourceString.indexOf(":") + 1), 16) : 0x8000000000000);
	  }

	  if (isHexLiteral(sourceString)) {
	    return parse(sourceString);
	  }

	  return parseFloat(sourceString);
	}
	function parse32I(sourceString) {
	  var value = 0;

	  if (isHexLiteral(sourceString)) {
	    value = ~~parseInt(sourceString, 16);
	  } else if (isDecimalExponentLiteral(sourceString)) {
	    throw new Error("This number literal format is yet to be implemented.");
	  } else {
	    value = parseInt(sourceString, 10);
	  }

	  return value;
	}
	function parseU32(sourceString) {
	  var value = parse32I(sourceString);

	  if (value < 0) {
	    throw new CompileError("Illegal value for u32: " + sourceString);
	  }

	  return value;
	}
	function parse64I(sourceString) {
	  var long$1;

	  if (isHexLiteral(sourceString)) {
	    long$1 = long.fromString(sourceString, false, 16);
	  } else if (isDecimalExponentLiteral(sourceString)) {
	    throw new Error("This number literal format is yet to be implemented.");
	  } else {
	    long$1 = long.fromString(sourceString);
	  }

	  return {
	    high: long$1.high,
	    low: long$1.low
	  };
	}
	var NAN_WORD = /^\+?-?nan/;
	var INF_WORD = /^\+?-?inf/;
	function isInfLiteral(sourceString) {
	  return INF_WORD.test(sourceString.toLowerCase());
	}
	function isNanLiteral(sourceString) {
	  return NAN_WORD.test(sourceString.toLowerCase());
	}

	function isDecimalExponentLiteral(sourceString) {
	  return !isHexLiteral(sourceString) && sourceString.toUpperCase().includes("E");
	}

	function isHexLiteral(sourceString) {
	  return sourceString.substring(0, 2).toUpperCase() === "0X" || sourceString.substring(0, 3).toUpperCase() === "-0X";
	}

	function numberLiteralFromRaw(rawValue) {
	  var instructionType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "i32";
	  var original = rawValue; // Remove numeric separators _

	  if (typeof rawValue === "string") {
	    rawValue = rawValue.replace(/_/g, "");
	  }

	  if (typeof rawValue === "number") {
	    return numberLiteral(rawValue, String(original));
	  } else {
	    switch (instructionType) {
	      case "i32":
	        {
	          return numberLiteral(parse32I(rawValue), String(original));
	        }

	      case "u32":
	        {
	          return numberLiteral(parseU32(rawValue), String(original));
	        }

	      case "i64":
	        {
	          return longNumberLiteral(parse64I(rawValue), String(original));
	        }

	      case "f32":
	        {
	          return floatLiteral(parse32F(rawValue), isNanLiteral(rawValue), isInfLiteral(rawValue), String(original));
	        }
	      // f64

	      default:
	        {
	          return floatLiteral(parse64F(rawValue), isNanLiteral(rawValue), isInfLiteral(rawValue), String(original));
	        }
	    }
	  }
	}
	function instruction(id) {
	  var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
	  var namedArgs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	  return instr(id, undefined, args, namedArgs);
	}
	function objectInstruction(id, object) {
	  var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
	  var namedArgs = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  return instr(id, object, args, namedArgs);
	}
	/**
	 * Decorators
	 */

	function withLoc(n, end, start) {
	  var loc = {
	    start: start,
	    end: end
	  };
	  n.loc = loc;
	  return n;
	}
	function withRaw(n, raw) {
	  n.raw = raw;
	  return n;
	}
	function funcParam(valtype, id) {
	  return {
	    id: id,
	    valtype: valtype
	  };
	}
	function indexLiteral(value) {
	  // $FlowIgnore
	  var x = numberLiteralFromRaw(value, "u32");
	  return x;
	}
	function memIndexLiteral(value) {
	  // $FlowIgnore
	  var x = numberLiteralFromRaw(value, "u32");
	  return x;
	}

	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

	function findParent(_ref, cb) {
	  var parentPath = _ref.parentPath;

	  if (parentPath == null) {
	    throw new Error("node is root");
	  }

	  var currentPath = parentPath;

	  while (cb(currentPath) !== false) {
	    // Hit the root node, stop
	    // $FlowIgnore
	    if (currentPath.parentPath == null) {
	      return null;
	    } // $FlowIgnore


	    currentPath = currentPath.parentPath;
	  }

	  return currentPath.node;
	}

	function insertBefore(context, newNode) {
	  return insert(context, newNode);
	}

	function insertAfter(context, newNode) {
	  return insert(context, newNode, 1);
	}

	function insert(_ref2, newNode) {
	  var node = _ref2.node,
	      inList = _ref2.inList,
	      parentPath = _ref2.parentPath,
	      parentKey = _ref2.parentKey;
	  var indexOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

	  if (!inList) {
	    throw new Error('inList' + " error: " + ("insert can only be used for nodes that are within lists" ));
	  }

	  if (!(parentPath != null)) {
	    throw new Error('parentPath != null' + " error: " + ("Can not remove root node" ));
	  }

	  // $FlowIgnore
	  var parentList = parentPath.node[parentKey];
	  var indexInList = parentList.findIndex(function (n) {
	    return n === node;
	  });
	  parentList.splice(indexInList + indexOffset, 0, newNode);
	}

	function remove(_ref3) {
	  var node = _ref3.node,
	      parentKey = _ref3.parentKey,
	      parentPath = _ref3.parentPath;

	  if (!(parentPath != null)) {
	    throw new Error('parentPath != null' + " error: " + ("Can not remove root node" ));
	  }

	  // $FlowIgnore
	  var parentNode = parentPath.node; // $FlowIgnore

	  var parentProperty = parentNode[parentKey];

	  if (Array.isArray(parentProperty)) {
	    // $FlowIgnore
	    parentNode[parentKey] = parentProperty.filter(function (n) {
	      return n !== node;
	    });
	  } else {
	    // $FlowIgnore
	    delete parentNode[parentKey];
	  }

	  node._deleted = true;
	}

	function stop(context) {
	  context.shouldStop = true;
	}

	function replaceWith(context, newNode) {
	  // $FlowIgnore
	  var parentNode = context.parentPath.node; // $FlowIgnore

	  var parentProperty = parentNode[context.parentKey];

	  if (Array.isArray(parentProperty)) {
	    var indexInList = parentProperty.findIndex(function (n) {
	      return n === context.node;
	    });
	    parentProperty.splice(indexInList, 1, newNode);
	  } else {
	    // $FlowIgnore
	    parentNode[context.parentKey] = newNode;
	  }

	  context.node._deleted = true;
	  context.node = newNode;
	} // bind the context to the first argument of node operations


	function bindNodeOperations(operations, context) {
	  var keys = Object.keys(operations);
	  var boundOperations = {};
	  keys.forEach(function (key) {
	    boundOperations[key] = operations[key].bind(null, context);
	  });
	  return boundOperations;
	}

	function createPathOperations(context) {
	  // $FlowIgnore
	  return bindNodeOperations({
	    findParent: findParent,
	    replaceWith: replaceWith,
	    remove: remove,
	    insertBefore: insertBefore,
	    insertAfter: insertAfter,
	    stop: stop
	  }, context);
	}

	function createPath(context) {
	  var path = _extends({}, context); // $FlowIgnore


	  Object.assign(path, createPathOperations(path)); // $FlowIgnore

	  return path;
	}

	// and object that has a 'type' property.

	function walk(context, callback) {
	  var stop = false;

	  function innerWalk(context, callback) {
	    if (stop) {
	      return;
	    }

	    var node = context.node;

	    if (node === undefined) {
	      console.warn("traversing with an empty context");
	      return;
	    }

	    if (node._deleted === true) {
	      return;
	    }

	    var path = createPath(context);
	    callback(node.type, path);

	    if (path.shouldStop) {
	      stop = true;
	      return;
	    }

	    Object.keys(node).forEach(function (prop) {
	      var value = node[prop];

	      if (value === null || value === undefined) {
	        return;
	      }

	      var valueAsArray = Array.isArray(value) ? value : [value];
	      valueAsArray.forEach(function (childNode) {
	        if (typeof childNode.type === "string") {
	          var childContext = {
	            node: childNode,
	            parentKey: prop,
	            parentPath: path,
	            shouldStop: false,
	            inList: Array.isArray(value)
	          };
	          innerWalk(childContext, callback);
	        }
	      });
	    });
	  }

	  innerWalk(context, callback);
	}

	var noop = function noop() {};

	function traverse(node, visitors) {
	  var before = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : noop;
	  var after = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : noop;
	  Object.keys(visitors).forEach(function (visitor) {
	    if (!nodeAndUnionTypes.includes(visitor)) {
	      throw new Error("Unexpected visitor ".concat(visitor));
	    }
	  });
	  var context = {
	    node: node,
	    inList: false,
	    shouldStop: false,
	    parentPath: null,
	    parentKey: null
	  };
	  walk(context, function (type, path) {
	    if (typeof visitors[type] === "function") {
	      before(type, path);
	      visitors[type](path);
	      after(type, path);
	    }

	    var unionTypes = unionTypesMap[type];

	    if (!unionTypes) {
	      throw new Error("Unexpected node type ".concat(type));
	    }

	    unionTypes.forEach(function (unionType) {
	      if (typeof visitors[unionType] === "function") {
	        before(unionType, path);
	        visitors[unionType](path);
	        after(unionType, path);
	      }
	    });
	  });
	}

	function sign(input, output) {
	  return [input, output];
	}

	var u32 = "u32";
	var i32 = "i32";
	var i64 = "i64";
	var f32 = "f32";
	var f64 = "f64";

	var vector = function vector(t) {
	  var vecType = [t]; // $FlowIgnore

	  vecType.vector = true;
	  return vecType;
	};

	var controlInstructions = {
	  unreachable: sign([], []),
	  nop: sign([], []),
	  // block ?
	  // loop ?
	  // if ?
	  // if else ?
	  br: sign([u32], []),
	  br_if: sign([u32], []),
	  br_table: sign(vector(u32), []),
	  return: sign([], []),
	  call: sign([u32], []),
	  call_indirect: sign([u32], [])
	};
	var parametricInstructions = {
	  drop: sign([], []),
	  select: sign([], [])
	};
	var variableInstructions = {
	  get_local: sign([u32], []),
	  set_local: sign([u32], []),
	  tee_local: sign([u32], []),
	  get_global: sign([u32], []),
	  set_global: sign([u32], [])
	};
	var memoryInstructions = {
	  "i32.load": sign([u32, u32], [i32]),
	  "i64.load": sign([u32, u32], []),
	  "f32.load": sign([u32, u32], []),
	  "f64.load": sign([u32, u32], []),
	  "i32.load8_s": sign([u32, u32], [i32]),
	  "i32.load8_u": sign([u32, u32], [i32]),
	  "i32.load16_s": sign([u32, u32], [i32]),
	  "i32.load16_u": sign([u32, u32], [i32]),
	  "i64.load8_s": sign([u32, u32], [i64]),
	  "i64.load8_u": sign([u32, u32], [i64]),
	  "i64.load16_s": sign([u32, u32], [i64]),
	  "i64.load16_u": sign([u32, u32], [i64]),
	  "i64.load32_s": sign([u32, u32], [i64]),
	  "i64.load32_u": sign([u32, u32], [i64]),
	  "i32.store": sign([u32, u32], []),
	  "i64.store": sign([u32, u32], []),
	  "f32.store": sign([u32, u32], []),
	  "f64.store": sign([u32, u32], []),
	  "i32.store8": sign([u32, u32], []),
	  "i32.store16": sign([u32, u32], []),
	  "i64.store8": sign([u32, u32], []),
	  "i64.store16": sign([u32, u32], []),
	  "i64.store32": sign([u32, u32], []),
	  current_memory: sign([], []),
	  grow_memory: sign([], [])
	};
	var numericInstructions = {
	  "i32.const": sign([i32], [i32]),
	  "i64.const": sign([i64], [i64]),
	  "f32.const": sign([f32], [f32]),
	  "f64.const": sign([f64], [f64]),
	  "i32.eqz": sign([i32], [i32]),
	  "i32.eq": sign([i32, i32], [i32]),
	  "i32.ne": sign([i32, i32], [i32]),
	  "i32.lt_s": sign([i32, i32], [i32]),
	  "i32.lt_u": sign([i32, i32], [i32]),
	  "i32.gt_s": sign([i32, i32], [i32]),
	  "i32.gt_u": sign([i32, i32], [i32]),
	  "i32.le_s": sign([i32, i32], [i32]),
	  "i32.le_u": sign([i32, i32], [i32]),
	  "i32.ge_s": sign([i32, i32], [i32]),
	  "i32.ge_u": sign([i32, i32], [i32]),
	  "i64.eqz": sign([i64], [i64]),
	  "i64.eq": sign([i64, i64], [i32]),
	  "i64.ne": sign([i64, i64], [i32]),
	  "i64.lt_s": sign([i64, i64], [i32]),
	  "i64.lt_u": sign([i64, i64], [i32]),
	  "i64.gt_s": sign([i64, i64], [i32]),
	  "i64.gt_u": sign([i64, i64], [i32]),
	  "i64.le_s": sign([i64, i64], [i32]),
	  "i64.le_u": sign([i64, i64], [i32]),
	  "i64.ge_s": sign([i64, i64], [i32]),
	  "i64.ge_u": sign([i64, i64], [i32]),
	  "f32.eq": sign([f32, f32], [i32]),
	  "f32.ne": sign([f32, f32], [i32]),
	  "f32.lt": sign([f32, f32], [i32]),
	  "f32.gt": sign([f32, f32], [i32]),
	  "f32.le": sign([f32, f32], [i32]),
	  "f32.ge": sign([f32, f32], [i32]),
	  "f64.eq": sign([f64, f64], [i32]),
	  "f64.ne": sign([f64, f64], [i32]),
	  "f64.lt": sign([f64, f64], [i32]),
	  "f64.gt": sign([f64, f64], [i32]),
	  "f64.le": sign([f64, f64], [i32]),
	  "f64.ge": sign([f64, f64], [i32]),
	  "i32.clz": sign([i32], [i32]),
	  "i32.ctz": sign([i32], [i32]),
	  "i32.popcnt": sign([i32], [i32]),
	  "i32.add": sign([i32, i32], [i32]),
	  "i32.sub": sign([i32, i32], [i32]),
	  "i32.mul": sign([i32, i32], [i32]),
	  "i32.div_s": sign([i32, i32], [i32]),
	  "i32.div_u": sign([i32, i32], [i32]),
	  "i32.rem_s": sign([i32, i32], [i32]),
	  "i32.rem_u": sign([i32, i32], [i32]),
	  "i32.and": sign([i32, i32], [i32]),
	  "i32.or": sign([i32, i32], [i32]),
	  "i32.xor": sign([i32, i32], [i32]),
	  "i32.shl": sign([i32, i32], [i32]),
	  "i32.shr_s": sign([i32, i32], [i32]),
	  "i32.shr_u": sign([i32, i32], [i32]),
	  "i32.rotl": sign([i32, i32], [i32]),
	  "i32.rotr": sign([i32, i32], [i32]),
	  "i64.clz": sign([i64], [i64]),
	  "i64.ctz": sign([i64], [i64]),
	  "i64.popcnt": sign([i64], [i64]),
	  "i64.add": sign([i64, i64], [i64]),
	  "i64.sub": sign([i64, i64], [i64]),
	  "i64.mul": sign([i64, i64], [i64]),
	  "i64.div_s": sign([i64, i64], [i64]),
	  "i64.div_u": sign([i64, i64], [i64]),
	  "i64.rem_s": sign([i64, i64], [i64]),
	  "i64.rem_u": sign([i64, i64], [i64]),
	  "i64.and": sign([i64, i64], [i64]),
	  "i64.or": sign([i64, i64], [i64]),
	  "i64.xor": sign([i64, i64], [i64]),
	  "i64.shl": sign([i64, i64], [i64]),
	  "i64.shr_s": sign([i64, i64], [i64]),
	  "i64.shr_u": sign([i64, i64], [i64]),
	  "i64.rotl": sign([i64, i64], [i64]),
	  "i64.rotr": sign([i64, i64], [i64]),
	  "f32.abs": sign([f32], [f32]),
	  "f32.neg": sign([f32], [f32]),
	  "f32.ceil": sign([f32], [f32]),
	  "f32.floor": sign([f32], [f32]),
	  "f32.trunc": sign([f32], [f32]),
	  "f32.nearest": sign([f32], [f32]),
	  "f32.sqrt": sign([f32], [f32]),
	  "f32.add": sign([f32, f32], [f32]),
	  "f32.sub": sign([f32, f32], [f32]),
	  "f32.mul": sign([f32, f32], [f32]),
	  "f32.div": sign([f32, f32], [f32]),
	  "f32.min": sign([f32, f32], [f32]),
	  "f32.max": sign([f32, f32], [f32]),
	  "f32.copysign": sign([f32, f32], [f32]),
	  "f64.abs": sign([f64], [f64]),
	  "f64.neg": sign([f64], [f64]),
	  "f64.ceil": sign([f64], [f64]),
	  "f64.floor": sign([f64], [f64]),
	  "f64.trunc": sign([f64], [f64]),
	  "f64.nearest": sign([f64], [f64]),
	  "f64.sqrt": sign([f64], [f64]),
	  "f64.add": sign([f64, f64], [f64]),
	  "f64.sub": sign([f64, f64], [f64]),
	  "f64.mul": sign([f64, f64], [f64]),
	  "f64.div": sign([f64, f64], [f64]),
	  "f64.min": sign([f64, f64], [f64]),
	  "f64.max": sign([f64, f64], [f64]),
	  "f64.copysign": sign([f64, f64], [f64]),
	  "i32.wrap/i64": sign([i64], [i32]),
	  "i32.trunc_s/f32": sign([f32], [i32]),
	  "i32.trunc_u/f32": sign([f32], [i32]),
	  "i32.trunc_s/f64": sign([f32], [i32]),
	  "i32.trunc_u/f64": sign([f64], [i32]),
	  "i64.extend_s/i32": sign([i32], [i64]),
	  "i64.extend_u/i32": sign([i32], [i64]),
	  "i64.trunc_s/f32": sign([f32], [i64]),
	  "i64.trunc_u/f32": sign([f32], [i64]),
	  "i64.trunc_s/f64": sign([f64], [i64]),
	  "i64.trunc_u/f64": sign([f64], [i64]),
	  "f32.convert_s/i32": sign([i32], [f32]),
	  "f32.convert_u/i32": sign([i32], [f32]),
	  "f32.convert_s/i64": sign([i64], [f32]),
	  "f32.convert_u/i64": sign([i64], [f32]),
	  "f32.demote/f64": sign([f64], [f32]),
	  "f64.convert_s/i32": sign([i32], [f64]),
	  "f64.convert_u/i32": sign([i32], [f64]),
	  "f64.convert_s/i64": sign([i64], [f64]),
	  "f64.convert_u/i64": sign([i64], [f64]),
	  "f64.promote/f32": sign([f32], [f64]),
	  "i32.reinterpret/f32": sign([f32], [i32]),
	  "i64.reinterpret/f64": sign([f64], [i64]),
	  "f32.reinterpret/i32": sign([i32], [f32]),
	  "f64.reinterpret/i64": sign([i64], [f64])
	};
	Object.assign({}, controlInstructions, parametricInstructions, variableInstructions, memoryInstructions, numericInstructions);

	var illegalop = "illegal";
	var magicModuleHeader = [0x00, 0x61, 0x73, 0x6d];
	var moduleVersion = [0x01, 0x00, 0x00, 0x00];

	function invertMap(obj) {
	  var keyModifierFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (k) {
	    return k;
	  };
	  var result = {};
	  var keys = Object.keys(obj);

	  for (var i = 0, length = keys.length; i < length; i++) {
	    result[keyModifierFn(obj[keys[i]])] = keys[i];
	  }

	  return result;
	}

	function createSymbolObject(name
	/*: string */
	, object
	/*: string */
	)
	/*: Symbol*/
	{
	  var numberOfArgs
	  /*: number*/
	  = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	  return {
	    name: name,
	    object: object,
	    numberOfArgs: numberOfArgs
	  };
	}

	function createSymbol(name
	/*: string */
	)
	/*: Symbol*/
	{
	  var numberOfArgs
	  /*: number*/
	  = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	  return {
	    name: name,
	    numberOfArgs: numberOfArgs
	  };
	}

	var types = {
	  func: 0x60,
	  result: 0x40
	};
	var exportTypes = {
	  0x00: "Func",
	  0x01: "Table",
	  0x02: "Mem",
	  0x03: "Global"
	};
	var exportTypesByName = invertMap(exportTypes);
	var valtypes = {
	  0x7f: "i32",
	  0x7e: "i64",
	  0x7d: "f32",
	  0x7c: "f64",
	  0x7b: "v128"
	};
	var valtypesByString = invertMap(valtypes);
	var tableTypes = {
	  0x70: "anyfunc"
	};
	var blockTypes = Object.assign({}, valtypes, {
	  // https://webassembly.github.io/spec/core/binary/types.html#binary-blocktype
	  0x40: null,
	  // https://webassembly.github.io/spec/core/binary/types.html#binary-valtype
	  0x7f: "i32",
	  0x7e: "i64",
	  0x7d: "f32",
	  0x7c: "f64"
	});
	var globalTypes = {
	  0x00: "const",
	  0x01: "var"
	};
	var globalTypesByString = invertMap(globalTypes);
	var importTypes = {
	  0x00: "func",
	  0x01: "table",
	  0x02: "mem",
	  0x03: "global"
	};
	var sections = {
	  custom: 0,
	  type: 1,
	  import: 2,
	  func: 3,
	  table: 4,
	  memory: 5,
	  global: 6,
	  export: 7,
	  start: 8,
	  element: 9,
	  code: 10,
	  data: 11
	};
	var symbolsByByte = {
	  0x00: createSymbol("unreachable"),
	  0x01: createSymbol("nop"),
	  0x02: createSymbol("block"),
	  0x03: createSymbol("loop"),
	  0x04: createSymbol("if"),
	  0x05: createSymbol("else"),
	  0x06: illegalop,
	  0x07: illegalop,
	  0x08: illegalop,
	  0x09: illegalop,
	  0x0a: illegalop,
	  0x0b: createSymbol("end"),
	  0x0c: createSymbol("br", 1),
	  0x0d: createSymbol("br_if", 1),
	  0x0e: createSymbol("br_table"),
	  0x0f: createSymbol("return"),
	  0x10: createSymbol("call", 1),
	  0x11: createSymbol("call_indirect", 2),
	  0x12: illegalop,
	  0x13: illegalop,
	  0x14: illegalop,
	  0x15: illegalop,
	  0x16: illegalop,
	  0x17: illegalop,
	  0x18: illegalop,
	  0x19: illegalop,
	  0x1a: createSymbol("drop"),
	  0x1b: createSymbol("select"),
	  0x1c: illegalop,
	  0x1d: illegalop,
	  0x1e: illegalop,
	  0x1f: illegalop,
	  0x20: createSymbol("get_local", 1),
	  0x21: createSymbol("set_local", 1),
	  0x22: createSymbol("tee_local", 1),
	  0x23: createSymbol("get_global", 1),
	  0x24: createSymbol("set_global", 1),
	  0x25: illegalop,
	  0x26: illegalop,
	  0x27: illegalop,
	  0x28: createSymbolObject("load", "u32", 1),
	  0x29: createSymbolObject("load", "u64", 1),
	  0x2a: createSymbolObject("load", "f32", 1),
	  0x2b: createSymbolObject("load", "f64", 1),
	  0x2c: createSymbolObject("load8_s", "u32", 1),
	  0x2d: createSymbolObject("load8_u", "u32", 1),
	  0x2e: createSymbolObject("load16_s", "u32", 1),
	  0x2f: createSymbolObject("load16_u", "u32", 1),
	  0x30: createSymbolObject("load8_s", "u64", 1),
	  0x31: createSymbolObject("load8_u", "u64", 1),
	  0x32: createSymbolObject("load16_s", "u64", 1),
	  0x33: createSymbolObject("load16_u", "u64", 1),
	  0x34: createSymbolObject("load32_s", "u64", 1),
	  0x35: createSymbolObject("load32_u", "u64", 1),
	  0x36: createSymbolObject("store", "u32", 1),
	  0x37: createSymbolObject("store", "u64", 1),
	  0x38: createSymbolObject("store", "f32", 1),
	  0x39: createSymbolObject("store", "f64", 1),
	  0x3a: createSymbolObject("store8", "u32", 1),
	  0x3b: createSymbolObject("store16", "u32", 1),
	  0x3c: createSymbolObject("store8", "u64", 1),
	  0x3d: createSymbolObject("store16", "u64", 1),
	  0x3e: createSymbolObject("store32", "u64", 1),
	  0x3f: createSymbolObject("current_memory"),
	  0x40: createSymbolObject("grow_memory"),
	  0x41: createSymbolObject("const", "i32", 1),
	  0x42: createSymbolObject("const", "i64", 1),
	  0x43: createSymbolObject("const", "f32", 1),
	  0x44: createSymbolObject("const", "f64", 1),
	  0x45: createSymbolObject("eqz", "i32"),
	  0x46: createSymbolObject("eq", "i32"),
	  0x47: createSymbolObject("ne", "i32"),
	  0x48: createSymbolObject("lt_s", "i32"),
	  0x49: createSymbolObject("lt_u", "i32"),
	  0x4a: createSymbolObject("gt_s", "i32"),
	  0x4b: createSymbolObject("gt_u", "i32"),
	  0x4c: createSymbolObject("le_s", "i32"),
	  0x4d: createSymbolObject("le_u", "i32"),
	  0x4e: createSymbolObject("ge_s", "i32"),
	  0x4f: createSymbolObject("ge_u", "i32"),
	  0x50: createSymbolObject("eqz", "i64"),
	  0x51: createSymbolObject("eq", "i64"),
	  0x52: createSymbolObject("ne", "i64"),
	  0x53: createSymbolObject("lt_s", "i64"),
	  0x54: createSymbolObject("lt_u", "i64"),
	  0x55: createSymbolObject("gt_s", "i64"),
	  0x56: createSymbolObject("gt_u", "i64"),
	  0x57: createSymbolObject("le_s", "i64"),
	  0x58: createSymbolObject("le_u", "i64"),
	  0x59: createSymbolObject("ge_s", "i64"),
	  0x5a: createSymbolObject("ge_u", "i64"),
	  0x5b: createSymbolObject("eq", "f32"),
	  0x5c: createSymbolObject("ne", "f32"),
	  0x5d: createSymbolObject("lt", "f32"),
	  0x5e: createSymbolObject("gt", "f32"),
	  0x5f: createSymbolObject("le", "f32"),
	  0x60: createSymbolObject("ge", "f32"),
	  0x61: createSymbolObject("eq", "f64"),
	  0x62: createSymbolObject("ne", "f64"),
	  0x63: createSymbolObject("lt", "f64"),
	  0x64: createSymbolObject("gt", "f64"),
	  0x65: createSymbolObject("le", "f64"),
	  0x66: createSymbolObject("ge", "f64"),
	  0x67: createSymbolObject("clz", "i32"),
	  0x68: createSymbolObject("ctz", "i32"),
	  0x69: createSymbolObject("popcnt", "i32"),
	  0x6a: createSymbolObject("add", "i32"),
	  0x6b: createSymbolObject("sub", "i32"),
	  0x6c: createSymbolObject("mul", "i32"),
	  0x6d: createSymbolObject("div_s", "i32"),
	  0x6e: createSymbolObject("div_u", "i32"),
	  0x6f: createSymbolObject("rem_s", "i32"),
	  0x70: createSymbolObject("rem_u", "i32"),
	  0x71: createSymbolObject("and", "i32"),
	  0x72: createSymbolObject("or", "i32"),
	  0x73: createSymbolObject("xor", "i32"),
	  0x74: createSymbolObject("shl", "i32"),
	  0x75: createSymbolObject("shr_s", "i32"),
	  0x76: createSymbolObject("shr_u", "i32"),
	  0x77: createSymbolObject("rotl", "i32"),
	  0x78: createSymbolObject("rotr", "i32"),
	  0x79: createSymbolObject("clz", "i64"),
	  0x7a: createSymbolObject("ctz", "i64"),
	  0x7b: createSymbolObject("popcnt", "i64"),
	  0x7c: createSymbolObject("add", "i64"),
	  0x7d: createSymbolObject("sub", "i64"),
	  0x7e: createSymbolObject("mul", "i64"),
	  0x7f: createSymbolObject("div_s", "i64"),
	  0x80: createSymbolObject("div_u", "i64"),
	  0x81: createSymbolObject("rem_s", "i64"),
	  0x82: createSymbolObject("rem_u", "i64"),
	  0x83: createSymbolObject("and", "i64"),
	  0x84: createSymbolObject("or", "i64"),
	  0x85: createSymbolObject("xor", "i64"),
	  0x86: createSymbolObject("shl", "i64"),
	  0x87: createSymbolObject("shr_s", "i64"),
	  0x88: createSymbolObject("shr_u", "i64"),
	  0x89: createSymbolObject("rotl", "i64"),
	  0x8a: createSymbolObject("rotr", "i64"),
	  0x8b: createSymbolObject("abs", "f32"),
	  0x8c: createSymbolObject("neg", "f32"),
	  0x8d: createSymbolObject("ceil", "f32"),
	  0x8e: createSymbolObject("floor", "f32"),
	  0x8f: createSymbolObject("trunc", "f32"),
	  0x90: createSymbolObject("nearest", "f32"),
	  0x91: createSymbolObject("sqrt", "f32"),
	  0x92: createSymbolObject("add", "f32"),
	  0x93: createSymbolObject("sub", "f32"),
	  0x94: createSymbolObject("mul", "f32"),
	  0x95: createSymbolObject("div", "f32"),
	  0x96: createSymbolObject("min", "f32"),
	  0x97: createSymbolObject("max", "f32"),
	  0x98: createSymbolObject("copysign", "f32"),
	  0x99: createSymbolObject("abs", "f64"),
	  0x9a: createSymbolObject("neg", "f64"),
	  0x9b: createSymbolObject("ceil", "f64"),
	  0x9c: createSymbolObject("floor", "f64"),
	  0x9d: createSymbolObject("trunc", "f64"),
	  0x9e: createSymbolObject("nearest", "f64"),
	  0x9f: createSymbolObject("sqrt", "f64"),
	  0xa0: createSymbolObject("add", "f64"),
	  0xa1: createSymbolObject("sub", "f64"),
	  0xa2: createSymbolObject("mul", "f64"),
	  0xa3: createSymbolObject("div", "f64"),
	  0xa4: createSymbolObject("min", "f64"),
	  0xa5: createSymbolObject("max", "f64"),
	  0xa6: createSymbolObject("copysign", "f64"),
	  0xa7: createSymbolObject("wrap/i64", "i32"),
	  0xa8: createSymbolObject("trunc_s/f32", "i32"),
	  0xa9: createSymbolObject("trunc_u/f32", "i32"),
	  0xaa: createSymbolObject("trunc_s/f64", "i32"),
	  0xab: createSymbolObject("trunc_u/f64", "i32"),
	  0xac: createSymbolObject("extend_s/i32", "i64"),
	  0xad: createSymbolObject("extend_u/i32", "i64"),
	  0xae: createSymbolObject("trunc_s/f32", "i64"),
	  0xaf: createSymbolObject("trunc_u/f32", "i64"),
	  0xb0: createSymbolObject("trunc_s/f64", "i64"),
	  0xb1: createSymbolObject("trunc_u/f64", "i64"),
	  0xb2: createSymbolObject("convert_s/i32", "f32"),
	  0xb3: createSymbolObject("convert_u/i32", "f32"),
	  0xb4: createSymbolObject("convert_s/i64", "f32"),
	  0xb5: createSymbolObject("convert_u/i64", "f32"),
	  0xb6: createSymbolObject("demote/f64", "f32"),
	  0xb7: createSymbolObject("convert_s/i32", "f64"),
	  0xb8: createSymbolObject("convert_u/i32", "f64"),
	  0xb9: createSymbolObject("convert_s/i64", "f64"),
	  0xba: createSymbolObject("convert_u/i64", "f64"),
	  0xbb: createSymbolObject("promote/f32", "f64"),
	  0xbc: createSymbolObject("reinterpret/f32", "i32"),
	  0xbd: createSymbolObject("reinterpret/f64", "i64"),
	  0xbe: createSymbolObject("reinterpret/i32", "f32"),
	  0xbf: createSymbolObject("reinterpret/i64", "f64"),
	  // Atomic Memory Instructions
	  0xfe00: createSymbol("memory.atomic.notify", 1),
	  0xfe01: createSymbol("memory.atomic.wait32", 1),
	  0xfe02: createSymbol("memory.atomic.wait64", 1),
	  0xfe10: createSymbolObject("atomic.load", "i32", 1),
	  0xfe11: createSymbolObject("atomic.load", "i64", 1),
	  0xfe12: createSymbolObject("atomic.load8_u", "i32", 1),
	  0xfe13: createSymbolObject("atomic.load16_u", "i32", 1),
	  0xfe14: createSymbolObject("atomic.load8_u", "i64", 1),
	  0xfe15: createSymbolObject("atomic.load16_u", "i64", 1),
	  0xfe16: createSymbolObject("atomic.load32_u", "i64", 1),
	  0xfe17: createSymbolObject("atomic.store", "i32", 1),
	  0xfe18: createSymbolObject("atomic.store", "i64", 1),
	  0xfe19: createSymbolObject("atomic.store8_u", "i32", 1),
	  0xfe1a: createSymbolObject("atomic.store16_u", "i32", 1),
	  0xfe1b: createSymbolObject("atomic.store8_u", "i64", 1),
	  0xfe1c: createSymbolObject("atomic.store16_u", "i64", 1),
	  0xfe1d: createSymbolObject("atomic.store32_u", "i64", 1),
	  0xfe1e: createSymbolObject("atomic.rmw.add", "i32", 1),
	  0xfe1f: createSymbolObject("atomic.rmw.add", "i64", 1),
	  0xfe20: createSymbolObject("atomic.rmw8_u.add_u", "i32", 1),
	  0xfe21: createSymbolObject("atomic.rmw16_u.add_u", "i32", 1),
	  0xfe22: createSymbolObject("atomic.rmw8_u.add_u", "i64", 1),
	  0xfe23: createSymbolObject("atomic.rmw16_u.add_u", "i64", 1),
	  0xfe24: createSymbolObject("atomic.rmw32_u.add_u", "i64", 1),
	  0xfe25: createSymbolObject("atomic.rmw.sub", "i32", 1),
	  0xfe26: createSymbolObject("atomic.rmw.sub", "i64", 1),
	  0xfe27: createSymbolObject("atomic.rmw8_u.sub_u", "i32", 1),
	  0xfe28: createSymbolObject("atomic.rmw16_u.sub_u", "i32", 1),
	  0xfe29: createSymbolObject("atomic.rmw8_u.sub_u", "i64", 1),
	  0xfe2a: createSymbolObject("atomic.rmw16_u.sub_u", "i64", 1),
	  0xfe2b: createSymbolObject("atomic.rmw32_u.sub_u", "i64", 1),
	  0xfe2c: createSymbolObject("atomic.rmw.and", "i32", 1),
	  0xfe2d: createSymbolObject("atomic.rmw.and", "i64", 1),
	  0xfe2e: createSymbolObject("atomic.rmw8_u.and_u", "i32", 1),
	  0xfe2f: createSymbolObject("atomic.rmw16_u.and_u", "i32", 1),
	  0xfe30: createSymbolObject("atomic.rmw8_u.and_u", "i64", 1),
	  0xfe31: createSymbolObject("atomic.rmw16_u.and_u", "i64", 1),
	  0xfe32: createSymbolObject("atomic.rmw32_u.and_u", "i64", 1),
	  0xfe33: createSymbolObject("atomic.rmw.or", "i32", 1),
	  0xfe34: createSymbolObject("atomic.rmw.or", "i64", 1),
	  0xfe35: createSymbolObject("atomic.rmw8_u.or_u", "i32", 1),
	  0xfe36: createSymbolObject("atomic.rmw16_u.or_u", "i32", 1),
	  0xfe37: createSymbolObject("atomic.rmw8_u.or_u", "i64", 1),
	  0xfe38: createSymbolObject("atomic.rmw16_u.or_u", "i64", 1),
	  0xfe39: createSymbolObject("atomic.rmw32_u.or_u", "i64", 1),
	  0xfe3a: createSymbolObject("atomic.rmw.xor", "i32", 1),
	  0xfe3b: createSymbolObject("atomic.rmw.xor", "i64", 1),
	  0xfe3c: createSymbolObject("atomic.rmw8_u.xor_u", "i32", 1),
	  0xfe3d: createSymbolObject("atomic.rmw16_u.xor_u", "i32", 1),
	  0xfe3e: createSymbolObject("atomic.rmw8_u.xor_u", "i64", 1),
	  0xfe3f: createSymbolObject("atomic.rmw16_u.xor_u", "i64", 1),
	  0xfe40: createSymbolObject("atomic.rmw32_u.xor_u", "i64", 1),
	  0xfe41: createSymbolObject("atomic.rmw.xchg", "i32", 1),
	  0xfe42: createSymbolObject("atomic.rmw.xchg", "i64", 1),
	  0xfe43: createSymbolObject("atomic.rmw8_u.xchg_u", "i32", 1),
	  0xfe44: createSymbolObject("atomic.rmw16_u.xchg_u", "i32", 1),
	  0xfe45: createSymbolObject("atomic.rmw8_u.xchg_u", "i64", 1),
	  0xfe46: createSymbolObject("atomic.rmw16_u.xchg_u", "i64", 1),
	  0xfe47: createSymbolObject("atomic.rmw32_u.xchg_u", "i64", 1),
	  0xfe48: createSymbolObject("atomic.rmw.cmpxchg", "i32", 1),
	  0xfe49: createSymbolObject("atomic.rmw.cmpxchg", "i64", 1),
	  0xfe4a: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i32", 1),
	  0xfe4b: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i32", 1),
	  0xfe4c: createSymbolObject("atomic.rmw8_u.cmpxchg_u", "i64", 1),
	  0xfe4d: createSymbolObject("atomic.rmw16_u.cmpxchg_u", "i64", 1),
	  0xfe4e: createSymbolObject("atomic.rmw32_u.cmpxchg_u", "i64", 1)
	};
	var symbolsByName = invertMap(symbolsByByte, function (obj) {
	  if (typeof obj.object === "string") {
	    return "".concat(obj.object, ".").concat(obj.name);
	  }

	  return obj.name;
	});
	var constants = {
	  symbolsByByte: symbolsByByte,
	  sections: sections,
	  magicModuleHeader: magicModuleHeader,
	  moduleVersion: moduleVersion,
	  types: types,
	  valtypes: valtypes,
	  exportTypes: exportTypes,
	  blockTypes: blockTypes,
	  tableTypes: tableTypes,
	  globalTypes: globalTypes,
	  importTypes: importTypes,
	  valtypesByString: valtypesByString,
	  globalTypesByString: globalTypesByString,
	  exportTypesByName: exportTypesByName,
	  symbolsByName: symbolsByName
	};

	function getUniqueNameGenerator() {
	  var inc = {};
	  return function () {
	    var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "temp";

	    if (!(prefix in inc)) {
	      inc[prefix] = 0;
	    } else {
	      inc[prefix] = inc[prefix] + 1;
	    }

	    return prefix + "_" + inc[prefix];
	  };
	}

	// Copyright 2012 The Obvious Corporation.
	/*
	 * Exported bindings
	 */

	/**
	 * Extracts the given number of bits from the buffer at the indicated
	 * index, returning a simple number as the result. If bits are requested
	 * that aren't covered by the buffer, the `defaultBit` is used as their
	 * value.
	 *
	 * The `bitLength` must be no more than 32. The `defaultBit` if not
	 * specified is taken to be `0`.
	 */

	function extract(buffer, bitIndex, bitLength, defaultBit) {
	  if (bitLength < 0 || bitLength > 32) {
	    throw new Error("Bad value for bitLength.");
	  }

	  if (defaultBit === undefined) {
	    defaultBit = 0;
	  } else if (defaultBit !== 0 && defaultBit !== 1) {
	    throw new Error("Bad value for defaultBit.");
	  }

	  var defaultByte = defaultBit * 0xff;
	  var result = 0; // All starts are inclusive. The {endByte, endBit} pair is exclusive, but
	  // if endBit !== 0, then endByte is inclusive.

	  var lastBit = bitIndex + bitLength;
	  var startByte = Math.floor(bitIndex / 8);
	  var startBit = bitIndex % 8;
	  var endByte = Math.floor(lastBit / 8);
	  var endBit = lastBit % 8;

	  if (endBit !== 0) {
	    // `(1 << endBit) - 1` is the mask of all bits up to but not including
	    // the endBit.
	    result = get(endByte) & (1 << endBit) - 1;
	  }

	  while (endByte > startByte) {
	    endByte--;
	    result = result << 8 | get(endByte);
	  }

	  result >>>= startBit;
	  return result;

	  function get(index) {
	    var result = buffer[index];
	    return result === undefined ? defaultByte : result;
	  }
	}
	/**
	 * Injects the given bits into the given buffer at the given index. Any
	 * bits in the value beyond the length to set are ignored.
	 */

	function inject(buffer, bitIndex, bitLength, value) {
	  if (bitLength < 0 || bitLength > 32) {
	    throw new Error("Bad value for bitLength.");
	  }

	  var lastByte = Math.floor((bitIndex + bitLength - 1) / 8);

	  if (bitIndex < 0 || lastByte >= buffer.length) {
	    throw new Error("Index out of range.");
	  } // Just keeping it simple, until / unless profiling shows that this
	  // is a problem.


	  var atByte = Math.floor(bitIndex / 8);
	  var atBit = bitIndex % 8;

	  while (bitLength > 0) {
	    if (value & 1) {
	      buffer[atByte] |= 1 << atBit;
	    } else {
	      buffer[atByte] &= ~(1 << atBit);
	    }

	    value >>= 1;
	    bitLength--;
	    atBit = (atBit + 1) % 8;

	    if (atBit === 0) {
	      atByte++;
	    }
	  }
	}
	/**
	 * Gets the sign bit of the given buffer.
	 */

	function getSign(buffer) {
	  return buffer[buffer.length - 1] >>> 7;
	}
	/**
	 * Gets the zero-based bit number of the highest-order bit with the
	 * given value in the given buffer.
	 *
	 * If the buffer consists entirely of the other bit value, then this returns
	 * `-1`.
	 */

	function highOrder(bit, buffer) {
	  var length = buffer.length;
	  var fullyWrongByte = (bit ^ 1) * 0xff; // the other-bit extended to a full byte

	  while (length > 0 && buffer[length - 1] === fullyWrongByte) {
	    length--;
	  }

	  if (length === 0) {
	    // Degenerate case. The buffer consists entirely of ~bit.
	    return -1;
	  }

	  var byteToCheck = buffer[length - 1];
	  var result = length * 8 - 1;

	  for (var i = 7; i > 0; i--) {
	    if ((byteToCheck >> i & 1) === bit) {
	      break;
	    }

	    result--;
	  }

	  return result;
	}

	// Copyright 2012 The Obvious Corporation.

	/*
	 * bufs: Buffer utilities.
	 */

	/*
	 * Module variables
	 */

	/** Pool of buffers, where `bufPool[x].length === x`. */
	var bufPool = [];
	/** Maximum length of kept temporary buffers. */

	var TEMP_BUF_MAXIMUM_LENGTH = 20;
	/** Minimum exactly-representable 64-bit int. */

	var MIN_EXACT_INT64 = -0x8000000000000000;
	/** Maximum exactly-representable 64-bit int. */

	var MAX_EXACT_INT64 = 0x7ffffffffffffc00;
	/** Maximum exactly-representable 64-bit uint. */

	var MAX_EXACT_UINT64 = 0xfffffffffffff800;
	/**
	 * The int value consisting just of a 1 in bit #32 (that is, one more
	 * than the maximum 32-bit unsigned value).
	 */

	var BIT_32 = 0x100000000;
	/**
	 * The int value consisting just of a 1 in bit #64 (that is, one more
	 * than the maximum 64-bit unsigned value).
	 */

	var BIT_64 = 0x10000000000000000;
	/*
	 * Helper functions
	 */

	/**
	 * Masks off all but the lowest bit set of the given number.
	 */

	function lowestBit(num) {
	  return num & -num;
	}
	/**
	 * Gets whether trying to add the second number to the first is lossy
	 * (inexact). The first number is meant to be an accumulated result.
	 */


	function isLossyToAdd(accum, num) {
	  if (num === 0) {
	    return false;
	  }

	  var lowBit = lowestBit(num);
	  var added = accum + lowBit;

	  if (added === accum) {
	    return true;
	  }

	  if (added - lowBit !== accum) {
	    return true;
	  }

	  return false;
	}
	/*
	 * Exported functions
	 */

	/**
	 * Allocates a buffer of the given length, which is initialized
	 * with all zeroes. This returns a buffer from the pool if it is
	 * available, or a freshly-allocated buffer if not.
	 */


	function alloc(length) {
	  var result = bufPool[length];

	  if (result) {
	    bufPool[length] = undefined;
	  } else {
	    result = new Buffer(length);
	  }

	  result.fill(0);
	  return result;
	}
	/**
	 * Releases a buffer back to the pool.
	 */

	function free(buffer) {
	  var length = buffer.length;

	  if (length < TEMP_BUF_MAXIMUM_LENGTH) {
	    bufPool[length] = buffer;
	  }
	}
	/**
	 * Resizes a buffer, returning a new buffer. Returns the argument if
	 * the length wouldn't actually change. This function is only safe to
	 * use if the given buffer was allocated within this module (since
	 * otherwise the buffer might possibly be shared externally).
	 */

	function resize(buffer, length) {
	  if (length === buffer.length) {
	    return buffer;
	  }

	  var newBuf = alloc(length);
	  buffer.copy(newBuf);
	  free(buffer);
	  return newBuf;
	}
	/**
	 * Reads an arbitrary signed int from a buffer.
	 */

	function readInt(buffer) {
	  var length = buffer.length;
	  var positive = buffer[length - 1] < 0x80;
	  var result = positive ? 0 : -1;
	  var lossy = false; // Note: We can't use bit manipulation here, since that stops
	  // working if the result won't fit in a 32-bit int.

	  if (length < 7) {
	    // Common case which can't possibly be lossy (because the result has
	    // no more than 48 bits, and loss only happens with 54 or more).
	    for (var i = length - 1; i >= 0; i--) {
	      result = result * 0x100 + buffer[i];
	    }
	  } else {
	    for (var _i = length - 1; _i >= 0; _i--) {
	      var one = buffer[_i];
	      result *= 0x100;

	      if (isLossyToAdd(result, one)) {
	        lossy = true;
	      }

	      result += one;
	    }
	  }

	  return {
	    value: result,
	    lossy: lossy
	  };
	}
	/**
	 * Reads an arbitrary unsigned int from a buffer.
	 */

	function readUInt(buffer) {
	  var length = buffer.length;
	  var result = 0;
	  var lossy = false; // Note: See above in re bit manipulation.

	  if (length < 7) {
	    // Common case which can't possibly be lossy (see above).
	    for (var i = length - 1; i >= 0; i--) {
	      result = result * 0x100 + buffer[i];
	    }
	  } else {
	    for (var _i2 = length - 1; _i2 >= 0; _i2--) {
	      var one = buffer[_i2];
	      result *= 0x100;

	      if (isLossyToAdd(result, one)) {
	        lossy = true;
	      }

	      result += one;
	    }
	  }

	  return {
	    value: result,
	    lossy: lossy
	  };
	}
	/**
	 * Writes a little-endian 64-bit signed int into a buffer.
	 */

	function writeInt64(value, buffer) {
	  if (value < MIN_EXACT_INT64 || value > MAX_EXACT_INT64) {
	    throw new Error("Value out of range.");
	  }

	  if (value < 0) {
	    value += BIT_64;
	  }

	  writeUInt64(value, buffer);
	}
	/**
	 * Writes a little-endian 64-bit unsigned int into a buffer.
	 */

	function writeUInt64(value, buffer) {
	  if (value < 0 || value > MAX_EXACT_UINT64) {
	    throw new Error("Value out of range.");
	  }

	  var lowWord = value % BIT_32;
	  var highWord = Math.floor(value / BIT_32);
	  buffer.writeUInt32LE(lowWord, 0);
	  buffer.writeUInt32LE(highWord, 4);
	}

	// Copyright 2012 The Obvious Corporation.
	/*
	 * Module variables
	 */

	/** The minimum possible 32-bit signed int. */

	var MIN_INT32 = -0x80000000;
	/** The maximum possible 32-bit signed int. */

	var MAX_INT32 = 0x7fffffff;
	/** The maximum possible 32-bit unsigned int. */

	var MAX_UINT32 = 0xffffffff;
	/** The minimum possible 64-bit signed int. */
	// const MIN_INT64 = -0x8000000000000000;

	/**
	 * The maximum possible 64-bit signed int that is representable as a
	 * JavaScript number.
	 */
	// const MAX_INT64 = 0x7ffffffffffffc00;

	/**
	 * The maximum possible 64-bit unsigned int that is representable as a
	 * JavaScript number.
	 */
	// const MAX_UINT64 = 0xfffffffffffff800;

	/*
	 * Helper functions
	 */

	/**
	 * Determines the number of bits required to encode the number
	 * represented in the given buffer as a signed value. The buffer is
	 * taken to represent a signed number in little-endian form.
	 *
	 * The number of bits to encode is the (zero-based) bit number of the
	 * highest-order non-sign-matching bit, plus two. For example:
	 *
	 *   11111011 01110101
	 *   high          low
	 *
	 * The sign bit here is 1 (that is, it's a negative number). The highest
	 * bit number that doesn't match the sign is bit #10 (where the lowest-order
	 * bit is bit #0). So, we have to encode at least 12 bits total.
	 *
	 * As a special degenerate case, the numbers 0 and -1 each require just one bit.
	 */

	function signedBitCount(buffer) {
	  return highOrder(getSign(buffer) ^ 1, buffer) + 2;
	}
	/**
	 * Determines the number of bits required to encode the number
	 * represented in the given buffer as an unsigned value. The buffer is
	 * taken to represent an unsigned number in little-endian form.
	 *
	 * The number of bits to encode is the (zero-based) bit number of the
	 * highest-order 1 bit, plus one. For example:
	 *
	 *   00011000 01010011
	 *   high          low
	 *
	 * The highest-order 1 bit here is bit #12 (where the lowest-order bit
	 * is bit #0). So, we have to encode at least 13 bits total.
	 *
	 * As a special degenerate case, the number 0 requires 1 bit.
	 */


	function unsignedBitCount(buffer) {
	  var result = highOrder(1, buffer) + 1;
	  return result ? result : 1;
	}
	/**
	 * Common encoder for both signed and unsigned ints. This takes a
	 * bigint-ish buffer, returning an LEB128-encoded buffer.
	 */


	function encodeBufferCommon(buffer, signed) {
	  var signBit;
	  var bitCount;

	  if (signed) {
	    signBit = getSign(buffer);
	    bitCount = signedBitCount(buffer);
	  } else {
	    signBit = 0;
	    bitCount = unsignedBitCount(buffer);
	  }

	  var byteCount = Math.ceil(bitCount / 7);
	  var result = alloc(byteCount);

	  for (var i = 0; i < byteCount; i++) {
	    var payload = extract(buffer, i * 7, 7, signBit);
	    result[i] = payload | 0x80;
	  } // Mask off the top bit of the last byte, to indicate the end of the
	  // encoding.


	  result[byteCount - 1] &= 0x7f;
	  return result;
	}
	/**
	 * Gets the byte-length of the value encoded in the given buffer at
	 * the given index.
	 */


	function encodedLength(encodedBuffer, index) {
	  var result = 0;

	  while (encodedBuffer[index + result] >= 0x80) {
	    result++;
	  }

	  result++; // to account for the last byte

	  if (index + result > encodedBuffer.length) ;

	  return result;
	}
	/**
	 * Common decoder for both signed and unsigned ints. This takes an
	 * LEB128-encoded buffer, returning a bigint-ish buffer.
	 */


	function decodeBufferCommon(encodedBuffer, index, signed) {
	  index = index === undefined ? 0 : index;
	  var length = encodedLength(encodedBuffer, index);
	  var bitLength = length * 7;
	  var byteLength = Math.ceil(bitLength / 8);
	  var result = alloc(byteLength);
	  var outIndex = 0;

	  while (length > 0) {
	    inject(result, outIndex, 7, encodedBuffer[index]);
	    outIndex += 7;
	    index++;
	    length--;
	  }

	  var signBit;
	  var signByte;

	  if (signed) {
	    // Sign-extend the last byte.
	    var lastByte = result[byteLength - 1];
	    var endBit = outIndex % 8;

	    if (endBit !== 0) {
	      var shift = 32 - endBit; // 32 because JS bit ops work on 32-bit ints.

	      lastByte = result[byteLength - 1] = lastByte << shift >> shift & 0xff;
	    }

	    signBit = lastByte >> 7;
	    signByte = signBit * 0xff;
	  } else {
	    signBit = 0;
	    signByte = 0;
	  } // Slice off any superfluous bytes, that is, ones that add no meaningful
	  // bits (because the value would be the same if they were removed).


	  while (byteLength > 1 && result[byteLength - 1] === signByte && (!signed || result[byteLength - 2] >> 7 === signBit)) {
	    byteLength--;
	  }

	  result = resize(result, byteLength);
	  return {
	    value: result,
	    nextIndex: index
	  };
	}
	/*
	 * Exported bindings
	 */


	function encodeIntBuffer(buffer) {
	  return encodeBufferCommon(buffer, true);
	}

	function decodeIntBuffer(encodedBuffer, index) {
	  return decodeBufferCommon(encodedBuffer, index, true);
	}

	function encodeInt32(num) {
	  var buf = alloc(4);
	  buf.writeInt32LE(num, 0);
	  var result = encodeIntBuffer(buf);
	  free(buf);
	  return result;
	}

	function decodeInt32$1(encodedBuffer, index) {
	  var result = decodeIntBuffer(encodedBuffer, index);
	  var parsed = readInt(result.value);
	  var value = parsed.value;
	  free(result.value);

	  if (value < MIN_INT32 || value > MAX_INT32) {
	    throw new Error("integer too large");
	  }

	  return {
	    value: value,
	    nextIndex: result.nextIndex
	  };
	}

	function encodeInt64(num) {
	  var buf = alloc(8);
	  writeInt64(num, buf);
	  var result = encodeIntBuffer(buf);
	  free(buf);
	  return result;
	}

	function decodeInt64$1(encodedBuffer, index) {
	  var result = decodeIntBuffer(encodedBuffer, index);
	  var value = long.fromBytesLE(result.value, false);
	  free(result.value);
	  return {
	    value: value,
	    nextIndex: result.nextIndex,
	    lossy: false
	  };
	}

	function encodeUIntBuffer(buffer) {
	  return encodeBufferCommon(buffer, false);
	}

	function decodeUIntBuffer(encodedBuffer, index) {
	  return decodeBufferCommon(encodedBuffer, index, false);
	}

	function encodeUInt32(num) {
	  var buf = alloc(4);
	  buf.writeUInt32LE(num, 0);
	  var result = encodeUIntBuffer(buf);
	  free(buf);
	  return result;
	}

	function decodeUInt32$1(encodedBuffer, index) {
	  var result = decodeUIntBuffer(encodedBuffer, index);
	  var parsed = readUInt(result.value);
	  var value = parsed.value;
	  free(result.value);

	  if (value > MAX_UINT32) {
	    throw new Error("integer too large");
	  }

	  return {
	    value: value,
	    nextIndex: result.nextIndex
	  };
	}

	function encodeUInt64(num) {
	  var buf = alloc(8);
	  writeUInt64(num, buf);
	  var result = encodeUIntBuffer(buf);
	  free(buf);
	  return result;
	}

	function decodeUInt64$1(encodedBuffer, index) {
	  var result = decodeUIntBuffer(encodedBuffer, index);
	  var value = long.fromBytesLE(result.value, true);
	  free(result.value);
	  return {
	    value: value,
	    nextIndex: result.nextIndex,
	    lossy: false
	  };
	}

	var leb = {
	  decodeInt32: decodeInt32$1,
	  decodeInt64: decodeInt64$1,
	  decodeIntBuffer: decodeIntBuffer,
	  decodeUInt32: decodeUInt32$1,
	  decodeUInt64: decodeUInt64$1,
	  decodeUIntBuffer: decodeUIntBuffer,
	  encodeInt32: encodeInt32,
	  encodeInt64: encodeInt64,
	  encodeIntBuffer: encodeIntBuffer,
	  encodeUInt32: encodeUInt32,
	  encodeUInt64: encodeUInt64,
	  encodeUIntBuffer: encodeUIntBuffer
	};

	/**
	 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
	 * max = ceil(32/7)
	 */

	var MAX_NUMBER_OF_BYTE_U32 = 5;
	/**
	 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
	 * max = ceil(64/7)
	 */

	var MAX_NUMBER_OF_BYTE_U64 = 10;
	function decodeInt64(encodedBuffer, index) {
	  return leb.decodeInt64(encodedBuffer, index);
	}
	function decodeUInt64(encodedBuffer, index) {
	  return leb.decodeUInt64(encodedBuffer, index);
	}
	function decodeInt32(encodedBuffer, index) {
	  return leb.decodeInt32(encodedBuffer, index);
	}
	function decodeUInt32(encodedBuffer, index) {
	  return leb.decodeUInt32(encodedBuffer, index);
	}

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function toHex(n) {
	  return "0x" + Number(n).toString(16);
	}

	function byteArrayEq(l, r) {
	  if (l.length !== r.length) {
	    return false;
	  }

	  for (var i = 0; i < l.length; i++) {
	    if (l[i] !== r[i]) {
	      return false;
	    }
	  }

	  return true;
	}

	function decode$1(ab, opts) {
	  var buf = new Uint8Array(ab);
	  var getUniqueName = getUniqueNameGenerator();
	  var offset = 0;

	  function getPosition() {
	    return {
	      line: -1,
	      column: offset
	    };
	  }

	  function dump(b, msg) {
	    if (opts.dump === false) return;
	    var pad = "\t\t\t\t\t\t\t\t\t\t";
	    var str = "";

	    if (b.length < 5) {
	      str = b.map(toHex).join(" ");
	    } else {
	      str = "...";
	    }

	    console.log(toHex(offset) + ":\t", str, pad, ";", msg);
	  }

	  function dumpSep(msg) {
	    if (opts.dump === false) return;
	    console.log(";", msg);
	  }
	  /**
	   * TODO(sven): we can atually use a same structure
	   * we are adding incrementally new features
	   */


	  var state = {
	    elementsInFuncSection: [],
	    elementsInExportSection: [],
	    elementsInCodeSection: [],

	    /**
	     * Decode memory from:
	     * - Memory section
	     */
	    memoriesInModule: [],

	    /**
	     * Decoded types from:
	     * - Type section
	     */
	    typesInModule: [],

	    /**
	     * Decoded functions from:
	     * - Function section
	     * - Import section
	     */
	    functionsInModule: [],

	    /**
	     * Decoded tables from:
	     * - Table section
	     */
	    tablesInModule: [],

	    /**
	     * Decoded globals from:
	     * - Global section
	     */
	    globalsInModule: []
	  };

	  function isEOF() {
	    return offset >= buf.length;
	  }

	  function eatBytes(n) {
	    offset = offset + n;
	  }

	  function readBytesAtOffset(_offset, numberOfBytes) {
	    var arr = [];

	    for (var i = 0; i < numberOfBytes; i++) {
	      arr.push(buf[_offset + i]);
	    }

	    return arr;
	  }

	  function readBytes(numberOfBytes) {
	    return readBytesAtOffset(offset, numberOfBytes);
	  }

	  function readF64() {
	    var bytes = readBytes(NUMBER_OF_BYTE_F64);
	    var value = decodeF64(bytes);

	    if (Math.sign(value) * value === Infinity) {
	      return {
	        value: Math.sign(value),
	        inf: true,
	        nextIndex: NUMBER_OF_BYTE_F64
	      };
	    }

	    if (isNaN(value)) {
	      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
	      var mantissa = 0;

	      for (var i = 0; i < bytes.length - 2; ++i) {
	        mantissa += bytes[i] * Math.pow(256, i);
	      }

	      mantissa += bytes[bytes.length - 2] % 16 * Math.pow(256, bytes.length - 2);
	      return {
	        value: sign * mantissa,
	        nan: true,
	        nextIndex: NUMBER_OF_BYTE_F64
	      };
	    }

	    return {
	      value: value,
	      nextIndex: NUMBER_OF_BYTE_F64
	    };
	  }

	  function readF32() {
	    var bytes = readBytes(NUMBER_OF_BYTE_F32);
	    var value = decodeF32(bytes);

	    if (Math.sign(value) * value === Infinity) {
	      return {
	        value: Math.sign(value),
	        inf: true,
	        nextIndex: NUMBER_OF_BYTE_F32
	      };
	    }

	    if (isNaN(value)) {
	      var sign = bytes[bytes.length - 1] >> 7 ? -1 : 1;
	      var mantissa = 0;

	      for (var i = 0; i < bytes.length - 2; ++i) {
	        mantissa += bytes[i] * Math.pow(256, i);
	      }

	      mantissa += bytes[bytes.length - 2] % 128 * Math.pow(256, bytes.length - 2);
	      return {
	        value: sign * mantissa,
	        nan: true,
	        nextIndex: NUMBER_OF_BYTE_F32
	      };
	    }

	    return {
	      value: value,
	      nextIndex: NUMBER_OF_BYTE_F32
	    };
	  }

	  function readUTF8String() {
	    var lenu32 = readU32(); // Don't eat any bytes. Instead, peek ahead of the current offset using
	    // readBytesAtOffset below. This keeps readUTF8String neutral with respect
	    // to the current offset, just like the other readX functions.

	    var strlen = lenu32.value;
	    dump([strlen], "string length");
	    var bytes = readBytesAtOffset(offset + lenu32.nextIndex, strlen);
	    var value = decode$2(bytes);
	    return {
	      value: value,
	      nextIndex: strlen + lenu32.nextIndex
	    };
	  }
	  /**
	   * Decode an unsigned 32bits integer
	   *
	   * The length will be handled by the leb librairy, we pass the max number of
	   * byte.
	   */


	  function readU32() {
	    var bytes = readBytes(MAX_NUMBER_OF_BYTE_U32);
	    var buffer = Buffer.from(bytes);
	    return decodeUInt32(buffer);
	  }

	  function readVaruint32() {
	    // where 32 bits = max 4 bytes
	    var bytes = readBytes(4);
	    var buffer = Buffer.from(bytes);
	    return decodeUInt32(buffer);
	  }

	  function readVaruint7() {
	    // where 7 bits = max 1 bytes
	    var bytes = readBytes(1);
	    var buffer = Buffer.from(bytes);
	    return decodeUInt32(buffer);
	  }
	  /**
	   * Decode a signed 32bits interger
	   */


	  function read32() {
	    var bytes = readBytes(MAX_NUMBER_OF_BYTE_U32);
	    var buffer = Buffer.from(bytes);
	    return decodeInt32(buffer);
	  }
	  /**
	   * Decode a signed 64bits integer
	   */


	  function read64() {
	    var bytes = readBytes(MAX_NUMBER_OF_BYTE_U64);
	    var buffer = Buffer.from(bytes);
	    return decodeInt64(buffer);
	  }

	  function readU64() {
	    var bytes = readBytes(MAX_NUMBER_OF_BYTE_U64);
	    var buffer = Buffer.from(bytes);
	    return decodeUInt64(buffer);
	  }

	  function readByte() {
	    return readBytes(1)[0];
	  }

	  function parseModuleHeader() {
	    if (isEOF() === true || offset + 4 > buf.length) {
	      throw new Error("unexpected end");
	    }

	    var header = readBytes(4);

	    if (byteArrayEq(constants.magicModuleHeader, header) === false) {
	      throw new CompileError("magic header not detected");
	    }

	    dump(header, "wasm magic header");
	    eatBytes(4);
	  }

	  function parseVersion() {
	    if (isEOF() === true || offset + 4 > buf.length) {
	      throw new Error("unexpected end");
	    }

	    var version = readBytes(4);

	    if (byteArrayEq(constants.moduleVersion, version) === false) {
	      throw new CompileError("unknown binary version");
	    }

	    dump(version, "wasm version");
	    eatBytes(4);
	  }

	  function parseVec(cast) {
	    var u32 = readU32();
	    var length = u32.value;
	    eatBytes(u32.nextIndex);
	    dump([length], "number");

	    if (length === 0) {
	      return [];
	    }

	    var elements = [];

	    for (var i = 0; i < length; i++) {
	      var byte = readByte();
	      eatBytes(1);
	      var value = cast(byte);
	      dump([byte], value);

	      if (typeof value === "undefined") {
	        throw new CompileError("Internal failure: parseVec could not cast the value");
	      }

	      elements.push(value);
	    }

	    return elements;
	  } // Type section
	  // https://webassembly.github.io/spec/binary/modules.html#binary-typesec


	  function parseTypeSection(numberOfTypes) {
	    var typeInstructionNodes = [];
	    dump([numberOfTypes], "num types");

	    for (var i = 0; i < numberOfTypes; i++) {
	      var _startLoc = getPosition();

	      dumpSep("type " + i);
	      var type = readByte();
	      eatBytes(1);

	      if (type == constants.types.func) {
	        dump([type], "func");
	        var paramValtypes = parseVec(function (b) {
	          return constants.valtypes[b];
	        });
	        var params = paramValtypes.map(function (v) {
	          return funcParam(
	          /*valtype*/
	          v);
	        });
	        var result = parseVec(function (b) {
	          return constants.valtypes[b];
	        });
	        typeInstructionNodes.push(function () {
	          var endLoc = getPosition();
	          return withLoc(typeInstruction(undefined, signature(params, result)), endLoc, _startLoc);
	        }());
	        state.typesInModule.push({
	          params: params,
	          result: result
	        });
	      } else {
	        throw new Error("Unsupported type: " + toHex(type));
	      }
	    }

	    return typeInstructionNodes;
	  } // Import section
	  // https://webassembly.github.io/spec/binary/modules.html#binary-importsec


	  function parseImportSection(numberOfImports) {
	    var imports = [];

	    for (var i = 0; i < numberOfImports; i++) {
	      dumpSep("import header " + i);

	      var _startLoc2 = getPosition();
	      /**
	       * Module name
	       */


	      var moduleName = readUTF8String();
	      eatBytes(moduleName.nextIndex);
	      dump([], "module name (".concat(moduleName.value, ")"));
	      /**
	       * Name
	       */

	      var name = readUTF8String();
	      eatBytes(name.nextIndex);
	      dump([], "name (".concat(name.value, ")"));
	      /**
	       * Import descr
	       */

	      var descrTypeByte = readByte();
	      eatBytes(1);
	      var descrType = constants.importTypes[descrTypeByte];
	      dump([descrTypeByte], "import kind");

	      if (typeof descrType === "undefined") {
	        throw new CompileError("Unknown import description type: " + toHex(descrTypeByte));
	      }

	      var importDescr = void 0;

	      if (descrType === "func") {
	        var indexU32 = readU32();
	        var typeindex = indexU32.value;
	        eatBytes(indexU32.nextIndex);
	        dump([typeindex], "type index");
	        var signature$1 = state.typesInModule[typeindex];

	        if (typeof signature$1 === "undefined") {
	          throw new CompileError("function signature not found (".concat(typeindex, ")"));
	        }

	        var id = getUniqueName("func");
	        importDescr = funcImportDescr(id, signature(signature$1.params, signature$1.result));
	        state.functionsInModule.push({
	          id: identifier(name.value),
	          signature: signature$1,
	          isExternal: true
	        });
	      } else if (descrType === "global") {
	        importDescr = parseGlobalType();
	        var globalNode = global$1(importDescr, []);
	        state.globalsInModule.push(globalNode);
	      } else if (descrType === "table") {
	        importDescr = parseTableType(i);
	      } else if (descrType === "mem") {
	        var memoryNode = parseMemoryType(0);
	        state.memoriesInModule.push(memoryNode);
	        importDescr = memoryNode;
	      } else {
	        throw new CompileError("Unsupported import of type: " + descrType);
	      }

	      imports.push(function () {
	        var endLoc = getPosition();
	        return withLoc(moduleImport(moduleName.value, name.value, importDescr), endLoc, _startLoc2);
	      }());
	    }

	    return imports;
	  } // Function section
	  // https://webassembly.github.io/spec/binary/modules.html#function-section


	  function parseFuncSection(numberOfFunctions) {
	    dump([numberOfFunctions], "num funcs");

	    for (var i = 0; i < numberOfFunctions; i++) {
	      var indexU32 = readU32();
	      var typeindex = indexU32.value;
	      eatBytes(indexU32.nextIndex);
	      dump([typeindex], "type index");
	      var signature = state.typesInModule[typeindex];

	      if (typeof signature === "undefined") {
	        throw new CompileError("function signature not found (".concat(typeindex, ")"));
	      } // preserve anonymous, a name might be resolved later


	      var id = withRaw(identifier(getUniqueName("func")), "");
	      state.functionsInModule.push({
	        id: id,
	        signature: signature,
	        isExternal: false
	      });
	    }
	  } // Export section
	  // https://webassembly.github.io/spec/binary/modules.html#export-section


	  function parseExportSection(numberOfExport) {
	    dump([numberOfExport], "num exports"); // Parse vector of exports

	    for (var i = 0; i < numberOfExport; i++) {
	      var _startLoc3 = getPosition();
	      /**
	       * Name
	       */


	      var name = readUTF8String();
	      eatBytes(name.nextIndex);
	      dump([], "export name (".concat(name.value, ")"));
	      /**
	       * exportdescr
	       */

	      var typeIndex = readByte();
	      eatBytes(1);
	      dump([typeIndex], "export kind");
	      var indexu32 = readU32();
	      var index = indexu32.value;
	      eatBytes(indexu32.nextIndex);
	      dump([index], "export index");
	      var id = void 0,
	          signature = void 0;

	      if (constants.exportTypes[typeIndex] === "Func") {
	        var func = state.functionsInModule[index];

	        if (typeof func === "undefined") {
	          throw new CompileError("unknown function (".concat(index, ")"));
	        }

	        id = numberLiteralFromRaw(index, String(index));
	        signature = func.signature;
	      } else if (constants.exportTypes[typeIndex] === "Table") {
	        var table = state.tablesInModule[index];

	        if (typeof table === "undefined") {
	          throw new CompileError("unknown table ".concat(index));
	        }

	        id = numberLiteralFromRaw(index, String(index));
	        signature = null;
	      } else if (constants.exportTypes[typeIndex] === "Mem") {
	        var memNode = state.memoriesInModule[index];

	        if (typeof memNode === "undefined") {
	          throw new CompileError("unknown memory ".concat(index));
	        }

	        id = numberLiteralFromRaw(index, String(index));
	        signature = null;
	      } else if (constants.exportTypes[typeIndex] === "Global") {
	        var global = state.globalsInModule[index];

	        if (typeof global === "undefined") {
	          throw new CompileError("unknown global ".concat(index));
	        }

	        id = numberLiteralFromRaw(index, String(index));
	        signature = null;
	      } else {
	        console.warn("Unsupported export type: " + toHex(typeIndex));
	        return;
	      }

	      var endLoc = getPosition();
	      state.elementsInExportSection.push({
	        name: name.value,
	        type: constants.exportTypes[typeIndex],
	        signature: signature,
	        id: id,
	        index: index,
	        endLoc: endLoc,
	        startLoc: _startLoc3
	      });
	    }
	  } // Code section
	  // https://webassembly.github.io/spec/binary/modules.html#code-section


	  function parseCodeSection(numberOfFuncs) {
	    dump([numberOfFuncs], "number functions"); // Parse vector of function

	    for (var i = 0; i < numberOfFuncs; i++) {
	      var _startLoc4 = getPosition();

	      dumpSep("function body " + i); // the u32 size of the function code in bytes
	      // Ignore it for now

	      var bodySizeU32 = readU32();
	      eatBytes(bodySizeU32.nextIndex);
	      dump([bodySizeU32.value], "function body size");
	      var code = [];
	      /**
	       * Parse locals
	       */

	      var funcLocalNumU32 = readU32();
	      var funcLocalNum = funcLocalNumU32.value;
	      eatBytes(funcLocalNumU32.nextIndex);
	      dump([funcLocalNum], "num locals");
	      var locals = [];

	      for (var _i = 0; _i < funcLocalNum; _i++) {
	        var _startLoc5 = getPosition();

	        var localCountU32 = readU32();
	        var localCount = localCountU32.value;
	        eatBytes(localCountU32.nextIndex);
	        dump([localCount], "num local");
	        var valtypeByte = readByte();
	        eatBytes(1);
	        var type = constants.valtypes[valtypeByte];
	        var args = [];

	        for (var _i2 = 0; _i2 < localCount; _i2++) {
	          args.push(valtypeLiteral(type));
	        }

	        var localNode = function () {
	          var endLoc = getPosition();
	          return withLoc(instruction("local", args), endLoc, _startLoc5);
	        }();

	        locals.push(localNode);
	        dump([valtypeByte], type);

	        if (typeof type === "undefined") {
	          throw new CompileError("Unexpected valtype: " + toHex(valtypeByte));
	        }
	      }

	      code.push.apply(code, locals); // Decode instructions until the end

	      parseInstructionBlock(code);
	      var endLoc = getPosition();
	      state.elementsInCodeSection.push({
	        code: code,
	        locals: locals,
	        endLoc: endLoc,
	        startLoc: _startLoc4,
	        bodySize: bodySizeU32.value
	      });
	    }
	  }

	  function parseInstructionBlock(code) {
	    while (true) {
	      var _startLoc6 = getPosition();

	      var instructionAlreadyCreated = false;
	      var instructionByte = readByte();
	      eatBytes(1);

	      if (instructionByte === 0xfe) {
	        instructionByte = 0xfe00 + readByte();
	        eatBytes(1);
	      }

	      var instruction$1 = constants.symbolsByByte[instructionByte];

	      if (typeof instruction$1 === "undefined") {
	        throw new CompileError("Unexpected instruction: " + toHex(instructionByte));
	      }

	      if (typeof instruction$1.object === "string") {
	        dump([instructionByte], "".concat(instruction$1.object, ".").concat(instruction$1.name));
	      } else {
	        dump([instructionByte], instruction$1.name);
	      }
	      /**
	       * End of the function
	       */


	      if (instruction$1.name === "end") {
	        var node = function () {
	          var endLoc = getPosition();
	          return withLoc(instruction(instruction$1.name), endLoc, _startLoc6);
	        }();

	        code.push(node);
	        break;
	      }

	      var args = [];

	      if (instruction$1.name === "loop") {
	        var _startLoc7 = getPosition();

	        var blocktypeByte = readByte();
	        eatBytes(1);
	        var blocktype = constants.blockTypes[blocktypeByte];
	        dump([blocktypeByte], "blocktype");

	        if (typeof blocktype === "undefined") {
	          throw new CompileError("Unexpected blocktype: " + toHex(blocktypeByte));
	        }

	        var instr = [];
	        parseInstructionBlock(instr); // preserve anonymous

	        var label = withRaw(identifier(getUniqueName("loop")), "");

	        var loopNode = function () {
	          var endLoc = getPosition();
	          return withLoc(loopInstruction(label, blocktype, instr), endLoc, _startLoc7);
	        }();

	        code.push(loopNode);
	        instructionAlreadyCreated = true;
	      } else if (instruction$1.name === "if") {
	        var _startLoc8 = getPosition();

	        var _blocktypeByte = readByte();

	        eatBytes(1);
	        var _blocktype = constants.blockTypes[_blocktypeByte];
	        dump([_blocktypeByte], "blocktype");

	        if (typeof _blocktype === "undefined") {
	          throw new CompileError("Unexpected blocktype: " + toHex(_blocktypeByte));
	        }

	        var testIndex = withRaw(identifier(getUniqueName("if")), "");
	        var ifBody = [];
	        parseInstructionBlock(ifBody); // Defaults to no alternate

	        var elseIndex = 0;

	        for (elseIndex = 0; elseIndex < ifBody.length; ++elseIndex) {
	          var _instr = ifBody[elseIndex];

	          if (_instr.type === "Instr" && _instr.id === "else") {
	            break;
	          }
	        }

	        var consequentInstr = ifBody.slice(0, elseIndex);
	        var alternate = ifBody.slice(elseIndex + 1); // wast sugar

	        var testInstrs = [];

	        var ifNode = function () {
	          var endLoc = getPosition();
	          return withLoc(ifInstruction(testIndex, testInstrs, _blocktype, consequentInstr, alternate), endLoc, _startLoc8);
	        }();

	        code.push(ifNode);
	        instructionAlreadyCreated = true;
	      } else if (instruction$1.name === "block") {
	        var _startLoc9 = getPosition();

	        var _blocktypeByte2 = readByte();

	        eatBytes(1);
	        var _blocktype2 = constants.blockTypes[_blocktypeByte2];
	        dump([_blocktypeByte2], "blocktype");

	        if (typeof _blocktype2 === "undefined") {
	          throw new CompileError("Unexpected blocktype: " + toHex(_blocktypeByte2));
	        }

	        var _instr2 = [];
	        parseInstructionBlock(_instr2); // preserve anonymous

	        var _label = withRaw(identifier(getUniqueName("block")), "");

	        var blockNode = function () {
	          var endLoc = getPosition();
	          return withLoc(blockInstruction(_label, _instr2, _blocktype2), endLoc, _startLoc9);
	        }();

	        code.push(blockNode);
	        instructionAlreadyCreated = true;
	      } else if (instruction$1.name === "call") {
	        var indexu32 = readU32();
	        var index = indexu32.value;
	        eatBytes(indexu32.nextIndex);
	        dump([index], "index");

	        var callNode = function () {
	          var endLoc = getPosition();
	          return withLoc(callInstruction(indexLiteral(index)), endLoc, _startLoc6);
	        }();

	        code.push(callNode);
	        instructionAlreadyCreated = true;
	      } else if (instruction$1.name === "call_indirect") {
	        var _startLoc10 = getPosition();

	        var indexU32 = readU32();
	        var typeindex = indexU32.value;
	        eatBytes(indexU32.nextIndex);
	        dump([typeindex], "type index");
	        var signature$1 = state.typesInModule[typeindex];

	        if (typeof signature$1 === "undefined") {
	          throw new CompileError("call_indirect signature not found (".concat(typeindex, ")"));
	        }

	        var _callNode = callIndirectInstruction(signature(signature$1.params, signature$1.result), []);

	        var flagU32 = readU32();
	        var flag = flagU32.value; // 0x00 - reserved byte

	        eatBytes(flagU32.nextIndex);

	        if (flag !== 0) {
	          throw new CompileError("zero flag expected");
	        }

	        code.push(function () {
	          var endLoc = getPosition();
	          return withLoc(_callNode, endLoc, _startLoc10);
	        }());
	        instructionAlreadyCreated = true;
	      } else if (instruction$1.name === "br_table") {
	        var indicesu32 = readU32();
	        var indices = indicesu32.value;
	        eatBytes(indicesu32.nextIndex);
	        dump([indices], "num indices");

	        for (var i = 0; i <= indices; i++) {
	          var _indexu = readU32();

	          var _index = _indexu.value;
	          eatBytes(_indexu.nextIndex);
	          dump([_index], "index");
	          args.push(numberLiteralFromRaw(_indexu.value.toString(), "u32"));
	        }
	      } else if (instructionByte >= 0x28 && instructionByte <= 0x40) {
	        /**
	         * Memory instructions
	         */
	        if (instruction$1.name === "grow_memory" || instruction$1.name === "current_memory") {
	          var _indexU = readU32();

	          var _index2 = _indexU.value;
	          eatBytes(_indexU.nextIndex);

	          if (_index2 !== 0) {
	            throw new Error("zero flag expected");
	          }

	          dump([_index2], "index");
	        } else {
	          var aligun32 = readU32();
	          var align = aligun32.value;
	          eatBytes(aligun32.nextIndex);
	          dump([align], "align");
	          var offsetu32 = readU32();
	          var _offset2 = offsetu32.value;
	          eatBytes(offsetu32.nextIndex);
	          dump([_offset2], "offset");
	        }
	      } else if (instructionByte >= 0x41 && instructionByte <= 0x44) {
	        /**
	         * Numeric instructions
	         */
	        if (instruction$1.object === "i32") {
	          var value32 = read32();
	          var value = value32.value;
	          eatBytes(value32.nextIndex);
	          dump([value], "i32 value");
	          args.push(numberLiteralFromRaw(value));
	        }

	        if (instruction$1.object === "u32") {
	          var valueu32 = readU32();
	          var _value = valueu32.value;
	          eatBytes(valueu32.nextIndex);
	          dump([_value], "u32 value");
	          args.push(numberLiteralFromRaw(_value));
	        }

	        if (instruction$1.object === "i64") {
	          var value64 = read64();
	          var _value2 = value64.value;
	          eatBytes(value64.nextIndex);
	          dump([Number(_value2.toString())], "i64 value");
	          var high = _value2.high,
	              low = _value2.low;
	          var _node = {
	            type: "LongNumberLiteral",
	            value: {
	              high: high,
	              low: low
	            }
	          };
	          args.push(_node);
	        }

	        if (instruction$1.object === "u64") {
	          var valueu64 = readU64();
	          var _value3 = valueu64.value;
	          eatBytes(valueu64.nextIndex);
	          dump([Number(_value3.toString())], "u64 value");
	          var _high = _value3.high,
	              _low = _value3.low;
	          var _node2 = {
	            type: "LongNumberLiteral",
	            value: {
	              high: _high,
	              low: _low
	            }
	          };
	          args.push(_node2);
	        }

	        if (instruction$1.object === "f32") {
	          var valuef32 = readF32();
	          var _value4 = valuef32.value;
	          eatBytes(valuef32.nextIndex);
	          dump([_value4], "f32 value");
	          args.push( // $FlowIgnore
	          floatLiteral(_value4, valuef32.nan, valuef32.inf, String(_value4)));
	        }

	        if (instruction$1.object === "f64") {
	          var valuef64 = readF64();
	          var _value5 = valuef64.value;
	          eatBytes(valuef64.nextIndex);
	          dump([_value5], "f64 value");
	          args.push( // $FlowIgnore
	          floatLiteral(_value5, valuef64.nan, valuef64.inf, String(_value5)));
	        }
	      } else if (instructionByte >= 0xfe00 && instructionByte <= 0xfeff) {
	        /**
	         * Atomic memory instructions
	         */
	        var align32 = readU32();
	        var _align = align32.value;
	        eatBytes(align32.nextIndex);
	        dump([_align], "align");

	        var _offsetu = readU32();

	        var _offset3 = _offsetu.value;
	        eatBytes(_offsetu.nextIndex);
	        dump([_offset3], "offset");
	      } else {
	        for (var _i3 = 0; _i3 < instruction$1.numberOfArgs; _i3++) {
	          var u32 = readU32();
	          eatBytes(u32.nextIndex);
	          dump([u32.value], "argument " + _i3);
	          args.push(numberLiteralFromRaw(u32.value));
	        }
	      }

	      if (instructionAlreadyCreated === false) {
	        if (typeof instruction$1.object === "string") {
	          var _node3 = function () {
	            var endLoc = getPosition();
	            return withLoc(objectInstruction(instruction$1.name, instruction$1.object, args), endLoc, _startLoc6);
	          }();

	          code.push(_node3);
	        } else {
	          var _node4 = function () {
	            var endLoc = getPosition();
	            return withLoc(instruction(instruction$1.name, args), endLoc, _startLoc6);
	          }();

	          code.push(_node4);
	        }
	      }
	    }
	  } // https://webassembly.github.io/spec/core/binary/types.html#limits


	  function parseLimits() {
	    var limitType = readByte();
	    eatBytes(1);
	    var shared = limitType === 0x03;
	    dump([limitType], "limit type" + (shared ? " (shared)" : ""));
	    var min, max;

	    if (limitType === 0x01 || limitType === 0x03 // shared limits
	    ) {
	        var u32min = readU32();
	        min = parseInt(u32min.value);
	        eatBytes(u32min.nextIndex);
	        dump([min], "min");
	        var u32max = readU32();
	        max = parseInt(u32max.value);
	        eatBytes(u32max.nextIndex);
	        dump([max], "max");
	      }

	    if (limitType === 0x00) {
	      var _u32min = readU32();

	      min = parseInt(_u32min.value);
	      eatBytes(_u32min.nextIndex);
	      dump([min], "min");
	    }

	    return limit(min, max, shared);
	  } // https://webassembly.github.io/spec/core/binary/types.html#binary-tabletype


	  function parseTableType(index) {
	    var name = withRaw(identifier(getUniqueName("table")), String(index));
	    var elementTypeByte = readByte();
	    eatBytes(1);
	    dump([elementTypeByte], "element type");
	    var elementType = constants.tableTypes[elementTypeByte];

	    if (typeof elementType === "undefined") {
	      throw new CompileError("Unknown element type in table: " + toHex(elementType));
	    }

	    var limits = parseLimits();
	    return table(elementType, limits, name);
	  } // https://webassembly.github.io/spec/binary/types.html#global-types


	  function parseGlobalType() {
	    var valtypeByte = readByte();
	    eatBytes(1);
	    var type = constants.valtypes[valtypeByte];
	    dump([valtypeByte], type);

	    if (typeof type === "undefined") {
	      throw new CompileError("Unknown valtype: " + toHex(valtypeByte));
	    }

	    var globalTypeByte = readByte();
	    eatBytes(1);
	    var globalType$1 = constants.globalTypes[globalTypeByte];
	    dump([globalTypeByte], "global type (".concat(globalType$1, ")"));

	    if (typeof globalType$1 === "undefined") {
	      throw new CompileError("Invalid mutability: " + toHex(globalTypeByte));
	    }

	    return globalType(type, globalType$1);
	  } // function parseNameModule() {
	  //   const lenu32 = readVaruint32();
	  //   eatBytes(lenu32.nextIndex);
	  //   console.log("len", lenu32);
	  //   const strlen = lenu32.value;
	  //   dump([strlen], "string length");
	  //   const bytes = readBytes(strlen);
	  //   eatBytes(strlen);
	  //   const value = utf8.decode(bytes);
	  //   return [t.moduleNameMetadata(value)];
	  // }
	  // this section contains an array of function names and indices


	  function parseNameSectionFunctions() {
	    var functionNames = [];
	    var numberOfFunctionsu32 = readU32();
	    var numbeOfFunctions = numberOfFunctionsu32.value;
	    eatBytes(numberOfFunctionsu32.nextIndex);

	    for (var i = 0; i < numbeOfFunctions; i++) {
	      var indexu32 = readU32();
	      var index = indexu32.value;
	      eatBytes(indexu32.nextIndex);
	      var name = readUTF8String();
	      eatBytes(name.nextIndex);
	      functionNames.push(functionNameMetadata(name.value, index));
	    }

	    return functionNames;
	  }

	  function parseNameSectionLocals() {
	    var localNames = [];
	    var numbeOfFunctionsu32 = readU32();
	    var numbeOfFunctions = numbeOfFunctionsu32.value;
	    eatBytes(numbeOfFunctionsu32.nextIndex);

	    for (var i = 0; i < numbeOfFunctions; i++) {
	      var functionIndexu32 = readU32();
	      var functionIndex = functionIndexu32.value;
	      eatBytes(functionIndexu32.nextIndex);
	      var numLocalsu32 = readU32();
	      var numLocals = numLocalsu32.value;
	      eatBytes(numLocalsu32.nextIndex);

	      for (var _i4 = 0; _i4 < numLocals; _i4++) {
	        var localIndexu32 = readU32();
	        var localIndex = localIndexu32.value;
	        eatBytes(localIndexu32.nextIndex);
	        var name = readUTF8String();
	        eatBytes(name.nextIndex);
	        localNames.push(localNameMetadata(name.value, localIndex, functionIndex));
	      }
	    }

	    return localNames;
	  } // this is a custom section used for name resolution
	  // https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section


	  function parseNameSection(remainingBytes) {
	    var nameMetadata = [];
	    var initialOffset = offset;

	    while (offset - initialOffset < remainingBytes) {
	      // name_type
	      var sectionTypeByte = readVaruint7();
	      eatBytes(sectionTypeByte.nextIndex); // name_payload_len

	      var subSectionSizeInBytesu32 = readVaruint32();
	      eatBytes(subSectionSizeInBytesu32.nextIndex);

	      switch (sectionTypeByte.value) {
	        // case 0: {
	        // TODO(sven): re-enable that
	        // Current status: it seems that when we decode the module's name
	        // no name_payload_len is used.
	        //
	        // See https://github.com/WebAssembly/design/blob/master/BinaryEncoding.md#name-section
	        //
	        // nameMetadata.push(...parseNameModule());
	        // break;
	        // }
	        case 1:
	          {
	            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionFunctions()));
	            break;
	          }

	        case 2:
	          {
	            nameMetadata.push.apply(nameMetadata, _toConsumableArray(parseNameSectionLocals()));
	            break;
	          }

	        default:
	          {
	            // skip unknown subsection
	            eatBytes(subSectionSizeInBytesu32.value);
	          }
	      }
	    }

	    return nameMetadata;
	  } // this is a custom section used for information about the producers
	  // https://github.com/WebAssembly/tool-conventions/blob/master/ProducersSection.md


	  function parseProducersSection() {
	    var metadata = producersSectionMetadata([]); // field_count

	    var sectionTypeByte = readVaruint32();
	    eatBytes(sectionTypeByte.nextIndex);
	    dump([sectionTypeByte.value], "num of producers");
	    var fields = {
	      language: [],
	      "processed-by": [],
	      sdk: []
	    }; // fields

	    for (var fieldI = 0; fieldI < sectionTypeByte.value; fieldI++) {
	      // field_name
	      var fieldName = readUTF8String();
	      eatBytes(fieldName.nextIndex); // field_value_count

	      var valueCount = readVaruint32();
	      eatBytes(valueCount.nextIndex); // field_values

	      for (var producerI = 0; producerI < valueCount.value; producerI++) {
	        var producerName = readUTF8String();
	        eatBytes(producerName.nextIndex);
	        var producerVersion = readUTF8String();
	        eatBytes(producerVersion.nextIndex);
	        fields[fieldName.value].push(producerMetadataVersionedName(producerName.value, producerVersion.value));
	      }

	      metadata.producers.push(fields[fieldName.value]);
	    }

	    return metadata;
	  }

	  function parseGlobalSection(numberOfGlobals) {
	    var globals = [];
	    dump([numberOfGlobals], "num globals");

	    for (var i = 0; i < numberOfGlobals; i++) {
	      var _startLoc11 = getPosition();

	      var globalType = parseGlobalType();
	      /**
	       * Global expressions
	       */

	      var init = [];
	      parseInstructionBlock(init);

	      var node = function () {
	        var endLoc = getPosition();
	        return withLoc(global$1(globalType, init), endLoc, _startLoc11);
	      }();

	      globals.push(node);
	      state.globalsInModule.push(node);
	    }

	    return globals;
	  }

	  function parseElemSection(numberOfElements) {
	    var elems = [];
	    dump([numberOfElements], "num elements");

	    for (var i = 0; i < numberOfElements; i++) {
	      var _startLoc12 = getPosition();

	      var tableindexu32 = readU32();
	      var tableindex = tableindexu32.value;
	      eatBytes(tableindexu32.nextIndex);
	      dump([tableindex], "table index");
	      /**
	       * Parse instructions
	       */

	      var instr = [];
	      parseInstructionBlock(instr);
	      /**
	       * Parse ( vector function index ) *
	       */

	      var indicesu32 = readU32();
	      var indices = indicesu32.value;
	      eatBytes(indicesu32.nextIndex);
	      dump([indices], "num indices");
	      var indexValues = [];

	      for (var _i5 = 0; _i5 < indices; _i5++) {
	        var indexu32 = readU32();
	        var index = indexu32.value;
	        eatBytes(indexu32.nextIndex);
	        dump([index], "index");
	        indexValues.push(indexLiteral(index));
	      }

	      var elemNode = function () {
	        var endLoc = getPosition();
	        return withLoc(elem(indexLiteral(tableindex), instr, indexValues), endLoc, _startLoc12);
	      }();

	      elems.push(elemNode);
	    }

	    return elems;
	  } // https://webassembly.github.io/spec/core/binary/types.html#memory-types


	  function parseMemoryType(i) {
	    var limits = parseLimits();
	    return memory(limits, indexLiteral(i));
	  } // https://webassembly.github.io/spec/binary/modules.html#table-section


	  function parseTableSection(numberOfElements) {
	    var tables = [];
	    dump([numberOfElements], "num elements");

	    for (var i = 0; i < numberOfElements; i++) {
	      var tablesNode = parseTableType(i);
	      state.tablesInModule.push(tablesNode);
	      tables.push(tablesNode);
	    }

	    return tables;
	  } // https://webassembly.github.io/spec/binary/modules.html#memory-section


	  function parseMemorySection(numberOfElements) {
	    var memories = [];
	    dump([numberOfElements], "num elements");

	    for (var i = 0; i < numberOfElements; i++) {
	      var memoryNode = parseMemoryType(i);
	      state.memoriesInModule.push(memoryNode);
	      memories.push(memoryNode);
	    }

	    return memories;
	  } // https://webassembly.github.io/spec/binary/modules.html#binary-startsec


	  function parseStartSection() {
	    var startLoc = getPosition();
	    var u32 = readU32();
	    var startFuncIndex = u32.value;
	    eatBytes(u32.nextIndex);
	    dump([startFuncIndex], "index");
	    return function () {
	      var endLoc = getPosition();
	      return withLoc(start(indexLiteral(startFuncIndex)), endLoc, startLoc);
	    }();
	  } // https://webassembly.github.io/spec/binary/modules.html#data-section


	  function parseDataSection(numberOfElements) {
	    var dataEntries = [];
	    dump([numberOfElements], "num elements");

	    for (var i = 0; i < numberOfElements; i++) {
	      var memoryIndexu32 = readU32();
	      var memoryIndex = memoryIndexu32.value;
	      eatBytes(memoryIndexu32.nextIndex);
	      dump([memoryIndex], "memory index");
	      var instrs = [];
	      parseInstructionBlock(instrs);
	      var hasExtraInstrs = instrs.filter(function (i) {
	        return i.id !== "end";
	      }).length !== 1;

	      if (hasExtraInstrs) {
	        throw new CompileError("data section offset must be a single instruction");
	      }

	      var bytes = parseVec(function (b) {
	        return b;
	      });
	      dump([], "init");
	      dataEntries.push(data(memIndexLiteral(memoryIndex), instrs[0], byteArray(bytes)));
	    }

	    return dataEntries;
	  } // https://webassembly.github.io/spec/binary/modules.html#binary-section


	  function parseSection(sectionIndex) {
	    var sectionId = readByte();
	    eatBytes(1);

	    if (sectionId >= sectionIndex || sectionIndex === constants.sections.custom) {
	      sectionIndex = sectionId + 1;
	    } else {
	      if (sectionId !== constants.sections.custom) throw new CompileError("Unexpected section: " + toHex(sectionId));
	    }

	    var nextSectionIndex = sectionIndex;
	    var startOffset = offset;
	    var startLoc = getPosition();
	    var u32 = readU32();
	    var sectionSizeInBytes = u32.value;
	    eatBytes(u32.nextIndex);

	    var sectionSizeInBytesNode = function () {
	      var endLoc = getPosition();
	      return withLoc(numberLiteralFromRaw(sectionSizeInBytes), endLoc, startLoc);
	    }();

	    switch (sectionId) {
	      case constants.sections.type:
	        {
	          dumpSep("section Type");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc13 = getPosition();

	          var _u = readU32();

	          var numberOfTypes = _u.value;
	          eatBytes(_u.nextIndex);

	          var _metadata = sectionMetadata("type", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfTypes), endLoc, _startLoc13);
	          }());

	          var _nodes = parseTypeSection(numberOfTypes);

	          return {
	            nodes: _nodes,
	            metadata: _metadata,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.table:
	        {
	          dumpSep("section Table");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc14 = getPosition();

	          var _u2 = readU32();

	          var numberOfTable = _u2.value;
	          eatBytes(_u2.nextIndex);
	          dump([numberOfTable], "num tables");

	          var _metadata2 = sectionMetadata("table", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfTable), endLoc, _startLoc14);
	          }());

	          var _nodes2 = parseTableSection(numberOfTable);

	          return {
	            nodes: _nodes2,
	            metadata: _metadata2,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.import:
	        {
	          dumpSep("section Import");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc15 = getPosition();

	          var numberOfImportsu32 = readU32();
	          var numberOfImports = numberOfImportsu32.value;
	          eatBytes(numberOfImportsu32.nextIndex);
	          dump([numberOfImports], "number of imports");

	          var _metadata3 = sectionMetadata("import", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfImports), endLoc, _startLoc15);
	          }());

	          var _nodes3 = parseImportSection(numberOfImports);

	          return {
	            nodes: _nodes3,
	            metadata: _metadata3,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.func:
	        {
	          dumpSep("section Function");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc16 = getPosition();

	          var numberOfFunctionsu32 = readU32();
	          var numberOfFunctions = numberOfFunctionsu32.value;
	          eatBytes(numberOfFunctionsu32.nextIndex);

	          var _metadata4 = sectionMetadata("func", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfFunctions), endLoc, _startLoc16);
	          }());

	          parseFuncSection(numberOfFunctions);
	          var _nodes4 = [];
	          return {
	            nodes: _nodes4,
	            metadata: _metadata4,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.export:
	        {
	          dumpSep("section Export");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc17 = getPosition();

	          var _u3 = readU32();

	          var numberOfExport = _u3.value;
	          eatBytes(_u3.nextIndex);

	          var _metadata5 = sectionMetadata("export", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfExport), endLoc, _startLoc17);
	          }());

	          parseExportSection(numberOfExport);
	          var _nodes5 = [];
	          return {
	            nodes: _nodes5,
	            metadata: _metadata5,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.code:
	        {
	          dumpSep("section Code");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc18 = getPosition();

	          var _u4 = readU32();

	          var numberOfFuncs = _u4.value;
	          eatBytes(_u4.nextIndex);

	          var _metadata6 = sectionMetadata("code", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfFuncs), endLoc, _startLoc18);
	          }());

	          if (opts.ignoreCodeSection === true) {
	            var remainingBytes = sectionSizeInBytes - _u4.nextIndex;
	            eatBytes(remainingBytes); // eat the entire section
	          } else {
	            parseCodeSection(numberOfFuncs);
	          }

	          var _nodes6 = [];
	          return {
	            nodes: _nodes6,
	            metadata: _metadata6,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.start:
	        {
	          dumpSep("section Start");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _metadata7 = sectionMetadata("start", startOffset, sectionSizeInBytesNode);

	          var _nodes7 = [parseStartSection()];
	          return {
	            nodes: _nodes7,
	            metadata: _metadata7,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.element:
	        {
	          dumpSep("section Element");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc19 = getPosition();

	          var numberOfElementsu32 = readU32();
	          var numberOfElements = numberOfElementsu32.value;
	          eatBytes(numberOfElementsu32.nextIndex);

	          var _metadata8 = sectionMetadata("element", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfElements), endLoc, _startLoc19);
	          }());

	          var _nodes8 = parseElemSection(numberOfElements);

	          return {
	            nodes: _nodes8,
	            metadata: _metadata8,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.global:
	        {
	          dumpSep("section Global");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc20 = getPosition();

	          var numberOfGlobalsu32 = readU32();
	          var numberOfGlobals = numberOfGlobalsu32.value;
	          eatBytes(numberOfGlobalsu32.nextIndex);

	          var _metadata9 = sectionMetadata("global", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(numberOfGlobals), endLoc, _startLoc20);
	          }());

	          var _nodes9 = parseGlobalSection(numberOfGlobals);

	          return {
	            nodes: _nodes9,
	            metadata: _metadata9,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.memory:
	        {
	          dumpSep("section Memory");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _startLoc21 = getPosition();

	          var _numberOfElementsu = readU32();

	          var _numberOfElements = _numberOfElementsu.value;
	          eatBytes(_numberOfElementsu.nextIndex);

	          var _metadata10 = sectionMetadata("memory", startOffset, sectionSizeInBytesNode, function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(_numberOfElements), endLoc, _startLoc21);
	          }());

	          var _nodes10 = parseMemorySection(_numberOfElements);

	          return {
	            nodes: _nodes10,
	            metadata: _metadata10,
	            nextSectionIndex: nextSectionIndex
	          };
	        }

	      case constants.sections.data:
	        {
	          dumpSep("section Data");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");

	          var _metadata11 = sectionMetadata("data", startOffset, sectionSizeInBytesNode);

	          var _startLoc22 = getPosition();

	          var _numberOfElementsu2 = readU32();

	          var _numberOfElements2 = _numberOfElementsu2.value;
	          eatBytes(_numberOfElementsu2.nextIndex);

	          _metadata11.vectorOfSize = function () {
	            var endLoc = getPosition();
	            return withLoc(numberLiteralFromRaw(_numberOfElements2), endLoc, _startLoc22);
	          }();

	          if (opts.ignoreDataSection === true) {
	            var _remainingBytes = sectionSizeInBytes - _numberOfElementsu2.nextIndex;

	            eatBytes(_remainingBytes); // eat the entire section

	            dumpSep("ignore data (" + sectionSizeInBytes + " bytes)");
	            return {
	              nodes: [],
	              metadata: _metadata11,
	              nextSectionIndex: nextSectionIndex
	            };
	          } else {
	            var _nodes11 = parseDataSection(_numberOfElements2);

	            return {
	              nodes: _nodes11,
	              metadata: _metadata11,
	              nextSectionIndex: nextSectionIndex
	            };
	          }
	        }

	      case constants.sections.custom:
	        {
	          dumpSep("section Custom");
	          dump([sectionId], "section code");
	          dump([sectionSizeInBytes], "section size");
	          var _metadata12 = [sectionMetadata("custom", startOffset, sectionSizeInBytesNode)];
	          var sectionName = readUTF8String();
	          eatBytes(sectionName.nextIndex);
	          dump([], "section name (".concat(sectionName.value, ")"));

	          var _remainingBytes2 = sectionSizeInBytes - sectionName.nextIndex;

	          if (sectionName.value === "name") {
	            var initialOffset = offset;

	            try {
	              _metadata12.push.apply(_metadata12, _toConsumableArray(parseNameSection(_remainingBytes2)));
	            } catch (e) {
	              console.warn("Failed to decode custom \"name\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
	              eatBytes(offset - (initialOffset + _remainingBytes2));
	            }
	          } else if (sectionName.value === "producers") {
	            var _initialOffset = offset;

	            try {
	              _metadata12.push(parseProducersSection());
	            } catch (e) {
	              console.warn("Failed to decode custom \"producers\" section @".concat(offset, "; ignoring (").concat(e.message, ")."));
	              eatBytes(offset - (_initialOffset + _remainingBytes2));
	            }
	          } else {
	            // We don't parse the custom section
	            eatBytes(_remainingBytes2);
	            dumpSep("ignore custom " + JSON.stringify(sectionName.value) + " section (" + _remainingBytes2 + " bytes)");
	          }

	          return {
	            nodes: [],
	            metadata: _metadata12,
	            nextSectionIndex: nextSectionIndex
	          };
	        }
	    }

	    throw new CompileError("Unexpected section: " + toHex(sectionId));
	  }

	  parseModuleHeader();
	  parseVersion();
	  var moduleFields = [];
	  var sectionIndex = 0;
	  var moduleMetadata$1 = {
	    sections: [],
	    functionNames: [],
	    localNames: [],
	    producers: []
	  };
	  /**
	   * All the generate declaration are going to be stored in our state
	   */

	  while (offset < buf.length) {
	    var _parseSection = parseSection(sectionIndex),
	        _nodes12 = _parseSection.nodes,
	        _metadata13 = _parseSection.metadata,
	        nextSectionIndex = _parseSection.nextSectionIndex;

	    moduleFields.push.apply(moduleFields, _toConsumableArray(_nodes12));
	    var metadataArray = Array.isArray(_metadata13) ? _metadata13 : [_metadata13];
	    metadataArray.forEach(function (metadataItem) {
	      if (metadataItem.type === "FunctionNameMetadata") {
	        moduleMetadata$1.functionNames.push(metadataItem);
	      } else if (metadataItem.type === "LocalNameMetadata") {
	        moduleMetadata$1.localNames.push(metadataItem);
	      } else if (metadataItem.type === "ProducersSectionMetadata") {
	        moduleMetadata$1.producers.push(metadataItem);
	      } else {
	        moduleMetadata$1.sections.push(metadataItem);
	      }
	    }); // Ignore custom section

	    if (nextSectionIndex) {
	      sectionIndex = nextSectionIndex;
	    }
	  }
	  /**
	   * Transform the state into AST nodes
	   */


	  var funcIndex = 0;
	  state.functionsInModule.forEach(function (func$1) {
	    var params = func$1.signature.params;
	    var result = func$1.signature.result;
	    var body = []; // External functions doesn't provide any code, can skip it here

	    if (func$1.isExternal === true) {
	      return;
	    }

	    var decodedElementInCodeSection = state.elementsInCodeSection[funcIndex];

	    if (opts.ignoreCodeSection === false) {
	      if (typeof decodedElementInCodeSection === "undefined") {
	        throw new CompileError("func " + toHex(funcIndex) + " code not found");
	      }

	      body = decodedElementInCodeSection.code;
	    }

	    funcIndex++;
	    var funcNode = func(func$1.id, signature(params, result), body);

	    if (func$1.isExternal === true) {
	      funcNode.isExternal = func$1.isExternal;
	    } // Add function position in the binary if possible


	    if (opts.ignoreCodeSection === false) {
	      var _startLoc23 = decodedElementInCodeSection.startLoc,
	          endLoc = decodedElementInCodeSection.endLoc,
	          bodySize = decodedElementInCodeSection.bodySize;
	      funcNode = withLoc(funcNode, endLoc, _startLoc23);
	      funcNode.metadata = {
	        bodySize: bodySize
	      };
	    }

	    moduleFields.push(funcNode);
	  });
	  state.elementsInExportSection.forEach(function (moduleExport$1) {
	    /**
	     * If the export has no id, we won't be able to call it from the outside
	     * so we can omit it
	     */
	    if (moduleExport$1.id != null) {
	      moduleFields.push(withLoc(moduleExport(moduleExport$1.name, moduleExportDescr(moduleExport$1.type, moduleExport$1.id)), moduleExport$1.endLoc, moduleExport$1.startLoc));
	    }
	  });
	  dumpSep("end of program");
	  var module$1 = module(null, moduleFields, moduleMetadata(moduleMetadata$1.sections, moduleMetadata$1.functionNames, moduleMetadata$1.localNames, moduleMetadata$1.producers));
	  return program([module$1]);
	}

	/**
	 * TODO(sven): I added initial props, but we should rather fix
	 * https://github.com/xtuc/webassemblyjs/issues/405
	 */

	var defaultDecoderOpts = {
	  dump: false,
	  ignoreCodeSection: false,
	  ignoreDataSection: false,
	  ignoreCustomNameSection: false
	}; // traverses the AST, locating function name metadata, which is then
	// used to update index-based identifiers with function names

	function restoreFunctionNames(ast) {
	  var functionNames = [];
	  traverse(ast, {
	    FunctionNameMetadata: function FunctionNameMetadata(_ref) {
	      var node = _ref.node;
	      functionNames.push({
	        name: node.value,
	        index: node.index
	      });
	    }
	  });

	  if (functionNames.length === 0) {
	    return;
	  }

	  traverse(ast, {
	    Func: function (_Func) {
	      function Func(_x) {
	        return _Func.apply(this, arguments);
	      }

	      Func.toString = function () {
	        return _Func.toString();
	      };

	      return Func;
	    }(function (_ref2) {
	      var node = _ref2.node;
	      // $FlowIgnore
	      var nodeName = node.name;
	      var indexBasedFunctionName = nodeName.value;
	      var index = Number(indexBasedFunctionName.replace("func_", ""));
	      var functionName = functionNames.find(function (f) {
	        return f.index === index;
	      });

	      if (functionName) {
	        var oldValue = nodeName.value;
	        nodeName.value = functionName.name;
	        nodeName.numeric = oldValue; // $FlowIgnore

	        delete nodeName.raw;
	      }
	    }),
	    // Also update the reference in the export
	    ModuleExport: function (_ModuleExport) {
	      function ModuleExport(_x2) {
	        return _ModuleExport.apply(this, arguments);
	      }

	      ModuleExport.toString = function () {
	        return _ModuleExport.toString();
	      };

	      return ModuleExport;
	    }(function (_ref3) {
	      var node = _ref3.node;

	      if (node.descr.exportType === "Func") {
	        // $FlowIgnore
	        var nodeName = node.descr.id;
	        var index = nodeName.value;
	        var functionName = functionNames.find(function (f) {
	          return f.index === index;
	        });

	        if (functionName) {
	          node.descr.id = identifier(functionName.name);
	        }
	      }
	    }),
	    ModuleImport: function (_ModuleImport) {
	      function ModuleImport(_x3) {
	        return _ModuleImport.apply(this, arguments);
	      }

	      ModuleImport.toString = function () {
	        return _ModuleImport.toString();
	      };

	      return ModuleImport;
	    }(function (_ref4) {
	      var node = _ref4.node;

	      if (node.descr.type === "FuncImportDescr") {
	        // $FlowIgnore
	        var indexBasedFunctionName = node.descr.id;
	        var index = Number(indexBasedFunctionName.replace("func_", ""));
	        var functionName = functionNames.find(function (f) {
	          return f.index === index;
	        });

	        if (functionName) {
	          // $FlowIgnore
	          node.descr.id = identifier(functionName.name);
	        }
	      }
	    }),
	    CallInstruction: function (_CallInstruction) {
	      function CallInstruction(_x4) {
	        return _CallInstruction.apply(this, arguments);
	      }

	      CallInstruction.toString = function () {
	        return _CallInstruction.toString();
	      };

	      return CallInstruction;
	    }(function (nodePath) {
	      var node = nodePath.node;
	      var index = node.index.value;
	      var functionName = functionNames.find(function (f) {
	        return f.index === index;
	      });

	      if (functionName) {
	        var oldValue = node.index;
	        node.index = identifier(functionName.name);
	        node.numeric = oldValue; // $FlowIgnore

	        delete node.raw;
	      }
	    })
	  });
	}

	function restoreLocalNames(ast) {
	  var localNames = [];
	  traverse(ast, {
	    LocalNameMetadata: function LocalNameMetadata(_ref5) {
	      var node = _ref5.node;
	      localNames.push({
	        name: node.value,
	        localIndex: node.localIndex,
	        functionIndex: node.functionIndex
	      });
	    }
	  });

	  if (localNames.length === 0) {
	    return;
	  }

	  traverse(ast, {
	    Func: function (_Func2) {
	      function Func(_x5) {
	        return _Func2.apply(this, arguments);
	      }

	      Func.toString = function () {
	        return _Func2.toString();
	      };

	      return Func;
	    }(function (_ref6) {
	      var node = _ref6.node;
	      var signature = node.signature;

	      if (signature.type !== "Signature") {
	        return;
	      } // $FlowIgnore


	      var nodeName = node.name;
	      var indexBasedFunctionName = nodeName.value;
	      var functionIndex = Number(indexBasedFunctionName.replace("func_", ""));
	      signature.params.forEach(function (param, paramIndex) {
	        var paramName = localNames.find(function (f) {
	          return f.localIndex === paramIndex && f.functionIndex === functionIndex;
	        });

	        if (paramName && paramName.name !== "") {
	          param.id = paramName.name;
	        }
	      });
	    })
	  });
	}

	function restoreModuleName(ast) {
	  traverse(ast, {
	    ModuleNameMetadata: function (_ModuleNameMetadata) {
	      function ModuleNameMetadata(_x6) {
	        return _ModuleNameMetadata.apply(this, arguments);
	      }

	      ModuleNameMetadata.toString = function () {
	        return _ModuleNameMetadata.toString();
	      };

	      return ModuleNameMetadata;
	    }(function (moduleNameMetadataPath) {
	      // update module
	      traverse(ast, {
	        Module: function (_Module) {
	          function Module(_x7) {
	            return _Module.apply(this, arguments);
	          }

	          Module.toString = function () {
	            return _Module.toString();
	          };

	          return Module;
	        }(function (_ref7) {
	          var node = _ref7.node;
	          var name = moduleNameMetadataPath.node.value; // compatiblity with wast-parser

	          if (name === "") {
	            name = null;
	          }

	          node.id = name;
	        })
	      });
	    })
	  });
	}

	function decode(buf, customOpts) {
	  var opts = Object.assign({}, defaultDecoderOpts, customOpts);
	  var ast = decode$1(buf, opts);

	  if (opts.ignoreCustomNameSection === false) {
	    restoreFunctionNames(ast);
	    restoreLocalNames(ast);
	    restoreModuleName(ast);
	  }

	  return ast;
	}

	var esm = /*#__PURE__*/Object.freeze({
		__proto__: null,
		decode: decode
	});

	var require$$0 = /*@__PURE__*/getAugmentedNamespace(esm);

	Object.defineProperty(parseWasm$1, '__esModule', { value: true });
	parseWasm$1.parseWasm = parseWasm$1.base64StringToUint8Array = void 0;
	var wasm_parser_1 = require$$0;
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
	parseWasm$1.base64StringToUint8Array = base64StringToUint8Array;
	/**
	 * Parse base64-encoded WASM into AST
	 *
	 * @param wasmb64 base64-encoded WASM binary
	 * @returns WASM abstract syntax tree
	 */
	function parseWasm(wasmb64) {
	  return (0, wasm_parser_1.decode)(base64StringToUint8Array(wasmb64));
	}
	parseWasm$1.parseWasm = parseWasm;

	Object.defineProperty(methods, '__esModule', { value: true });
	methods.getMethodNames = void 0;
	var parseWasm_1 = parseWasm$1;
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
	methods.getMethodNames = getMethodNames;

	var parseContract$1 = {};

	var __assign =
	  (commonjsGlobal && commonjsGlobal.__assign) ||
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
	Object.defineProperty(parseContract$1, '__esModule', { value: true });
	parseContract$1.parseContract = void 0;
	var getProbableInterfaces_1 = getProbableInterfaces$1;
	var methods_1 = methods;
	function parseContract(code_base64) {
	  var methodNames = (0, methods_1.getMethodNames)(code_base64);
	  var probableInterfaces = (0, getProbableInterfaces_1.getProbableInterfaces)(
	    methodNames,
	  );
	  return __assign({ methodNames: methodNames }, probableInterfaces);
	}
	parseContract$1.parseContract = parseContract;

	var ParsedContract = {};

	Object.defineProperty(ParsedContract, '__esModule', { value: true });

	(function (exports) {
	var __createBinding =
	  (commonjsGlobal && commonjsGlobal.__createBinding) ||
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
	  (commonjsGlobal && commonjsGlobal.__exportStar) ||
	  function (m, exports) {
	    for (var p in m)
	      if (p !== 'default' && !Object.prototype.hasOwnProperty.call(exports, p))
	        __createBinding(exports, m, p);
	  };
	Object.defineProperty(exports, '__esModule', { value: true });
	__exportStar(getProbableInterfaces$1, exports);
	__exportStar(interfaces, exports);
	__exportStar(JsonType, exports);
	__exportStar(methods, exports);
	__exportStar(parseContract$1, exports);
	__exportStar(ParsedContract, exports);
	__exportStar(parseWasm$1, exports);

	}(lib));

	var index = /*@__PURE__*/getDefaultExportFromCjs(lib);

	return index;

}));
