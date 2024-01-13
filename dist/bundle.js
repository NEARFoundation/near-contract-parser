var $8zHUo$buffer = require("buffer");
var $8zHUo$webassemblyjswasmparser = require("@webassemblyjs/wasm-parser");


function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $017fb6392d42fa6a$exports = {};

$parcel$export($017fb6392d42fa6a$exports, "getProbableInterfaces", () => $017fb6392d42fa6a$export$b351edbeb0c38b0c);
var $b6a0e74e5dac6e12$exports = {};

$parcel$export($b6a0e74e5dac6e12$exports, "StandardInterfaceId", () => $b6a0e74e5dac6e12$export$94bf4ff490ded96e);
$parcel$export($b6a0e74e5dac6e12$exports, "interfaces", () => $b6a0e74e5dac6e12$export$bc1125d123d9fc6);
var $b6a0e74e5dac6e12$export$94bf4ff490ded96e;
(function(StandardInterfaceId) {
    StandardInterfaceId["NEP141"] = "nep141";
    StandardInterfaceId["NEP145"] = "nep145";
    StandardInterfaceId["NEP148"] = "nep148";
    StandardInterfaceId["NEP171"] = "nep171";
    StandardInterfaceId["NEP177"] = "nep177";
    StandardInterfaceId["NEP178"] = "nep178";
    StandardInterfaceId["NEP199"] = "nep199";
    StandardInterfaceId["NEP330"] = "nep330";
})($b6a0e74e5dac6e12$export$94bf4ff490ded96e || ($b6a0e74e5dac6e12$export$94bf4ff490ded96e = {}));
const $b6a0e74e5dac6e12$export$bc1125d123d9fc6 = Object.freeze({
    ["nep141"]: {
        id: "nep141",
        name: "FT Core (NEP-141)",
        methods: [
            {
                name: "ft_transfer",
                args: [
                    {
                        name: "receiver_id",
                        type: "string"
                    },
                    {
                        name: "amount",
                        type: "string"
                    },
                    {
                        name: "memo",
                        type: [
                            "string",
                            "null"
                        ]
                    }
                ]
            },
            {
                name: "ft_transfer_call",
                args: [
                    {
                        name: "receiver_id",
                        type: "string"
                    },
                    {
                        name: "amount",
                        type: "string"
                    },
                    {
                        name: "memo",
                        type: [
                            "string",
                            "null"
                        ]
                    },
                    {
                        name: "msg",
                        type: "string"
                    }
                ]
            },
            {
                name: "ft_total_supply",
                args: []
            },
            {
                name: "ft_balance_of",
                args: [
                    {
                        name: "account_id",
                        type: "string"
                    }
                ]
            }
        ]
    },
    ["nep145"]: {
        id: "nep145",
        name: "Storage Management (NEP-145)",
        methods: [
            {
                name: "storage_deposit",
                args: [
                    {
                        name: "account_id",
                        type: [
                            "string",
                            "null"
                        ]
                    },
                    {
                        name: "registration_only",
                        type: [
                            "boolean",
                            "null"
                        ]
                    }
                ]
            },
            {
                name: "storage_withdraw",
                args: [
                    {
                        name: "amount",
                        type: [
                            "string",
                            "null"
                        ]
                    }
                ]
            },
            {
                name: "storage_unregister",
                args: [
                    {
                        name: "force",
                        type: [
                            "boolean",
                            "null"
                        ]
                    }
                ]
            },
            {
                name: "storage_balance_bounds",
                args: []
            },
            {
                name: "storage_balance_of",
                args: [
                    {
                        name: "account_id",
                        type: "string"
                    }
                ]
            }
        ]
    },
    ["nep148"]: {
        id: "nep148",
        name: "FT Metadata (NEP-148)",
        methods: [
            {
                name: "ft_metadata",
                args: []
            }
        ]
    },
    ["nep171"]: {
        id: "nep171",
        name: "NFT Core (NEP-171)",
        methods: [
            {
                name: "nft_transfer",
                args: [
                    {
                        name: "receiver_id",
                        type: "string"
                    },
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "approval_id",
                        type: [
                            "number",
                            "null"
                        ]
                    },
                    {
                        name: "memo",
                        type: [
                            "string",
                            "null"
                        ]
                    }
                ]
            },
            {
                name: "nft_transfer_call",
                args: [
                    {
                        name: "receiver_id",
                        type: "string"
                    },
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "approval_id",
                        type: [
                            "number",
                            "null"
                        ]
                    },
                    {
                        name: "memo",
                        type: [
                            "string",
                            "null"
                        ]
                    },
                    {
                        name: "msg",
                        type: "string"
                    }
                ]
            },
            {
                name: "nft_token",
                args: [
                    {
                        name: "token_id",
                        type: "string"
                    }
                ]
            }
        ]
    },
    ["nep177"]: {
        id: "nep177",
        name: "NFT Metadata (NEP-177)",
        methods: [
            {
                name: "nft_metadata",
                args: []
            }
        ]
    },
    ["nep178"]: {
        id: "nep178",
        name: "NFT Approval Management (NEP-178)",
        methods: [
            {
                name: "nft_approve",
                args: [
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "account_id",
                        type: "string"
                    },
                    {
                        name: "msg",
                        type: [
                            "string",
                            "null"
                        ]
                    }
                ]
            },
            {
                name: "nft_revoke",
                args: [
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "account_id",
                        type: "string"
                    }
                ]
            },
            {
                name: "nft_revoke_all",
                args: [
                    {
                        name: "token_id",
                        type: "string"
                    }
                ]
            },
            {
                name: "nft_is_approved",
                args: [
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "approved_account_id",
                        type: "string"
                    },
                    {
                        name: "approval_id",
                        type: [
                            "number",
                            "null"
                        ]
                    }
                ]
            }
        ]
    },
    ["nep199"]: {
        id: "nep199",
        name: "Royalties and Payouts (NEP-199)",
        methods: [
            {
                name: "nft_payout",
                args: [
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "balance",
                        type: "string"
                    },
                    {
                        name: "max_len_payout",
                        type: "number"
                    }
                ]
            },
            {
                name: "nft_transfer_payout",
                args: [
                    {
                        name: "receiver_id",
                        type: "string"
                    },
                    {
                        name: "token_id",
                        type: "string"
                    },
                    {
                        name: "approval_id",
                        type: "number"
                    },
                    {
                        name: "balance",
                        type: "string"
                    },
                    {
                        name: "max_len_payout",
                        type: "number"
                    }
                ]
            }
        ]
    },
    ["nep330"]: {
        id: "nep330",
        name: "Source Metadata (NEP-330)",
        methods: [
            {
                name: "contract_source_metadata",
                args: []
            }
        ]
    }
});


function $017fb6392d42fa6a$export$b351edbeb0c38b0c(methodNames) {
    const probableInterfaces = Object.keys((0, $b6a0e74e5dac6e12$export$bc1125d123d9fc6)).filter((i)=>(0, $b6a0e74e5dac6e12$export$bc1125d123d9fc6)[i].methods.every((m)=>methodNames.indexOf(m.name) !== -1));
    const byMethod = {};
    methodNames.forEach((methodName)=>{
        byMethod[methodName] = probableInterfaces.filter((i)=>(0, $b6a0e74e5dac6e12$export$bc1125d123d9fc6)[i].methods.map((m)=>m.name).indexOf(methodName) !== -1);
    });
    return {
        probableInterfaces: probableInterfaces,
        byMethod: byMethod
    };
}



var $db46ee7cdb093ccd$exports = {};
/**
 * Data types supported by JSON format
 */ 

var $87a6f453985ea27a$exports = {};

$parcel$export($87a6f453985ea27a$exports, "getMethodNames", () => $87a6f453985ea27a$export$236594f7f03ae3c9);
var $35fc1413ec66129a$exports = {};

$parcel$export($35fc1413ec66129a$exports, "parseWasm", () => $35fc1413ec66129a$export$309a74ef59ec55db);

var $35fc1413ec66129a$require$Buffer = $8zHUo$buffer.Buffer;

var $35fc1413ec66129a$require$decode = $8zHUo$webassemblyjswasmparser.decode;
/**
 * Converts a base64-encoded string to a byte array. Works in browser and Node
 * environments.
 *
 * @param strb64 base64 string
 * @returns Decoded byte array
 */ function $35fc1413ec66129a$var$base64StringToUint8Array(strb64) {
    if (typeof $35fc1413ec66129a$require$Buffer !== "undefined") // Node
    return $35fc1413ec66129a$require$Buffer.from(strb64, "base64");
    else // Browser
    return new Uint8Array(atob(strb64.toString().trim()).split("").map((c)=>c.charCodeAt(0)));
}
function $35fc1413ec66129a$export$309a74ef59ec55db(wasmb64) {
    return $35fc1413ec66129a$require$decode($35fc1413ec66129a$var$base64StringToUint8Array(wasmb64));
}


function $87a6f453985ea27a$export$236594f7f03ae3c9(code_base64) {
    const ast = (0, $35fc1413ec66129a$export$309a74ef59ec55db)(code_base64);
    return ast.body[0].fields.filter((x)=>x.type === "ModuleExport" && x.descr.exportType === "Func").map((x)=>x.name);
}


var $db830ac2df7d653c$exports = {};

$parcel$export($db830ac2df7d653c$exports, "parseContract", () => $db830ac2df7d653c$export$326d4dd2b9ef7090);


function $db830ac2df7d653c$export$326d4dd2b9ef7090(code_base64) {
    const methodNames = (0, $87a6f453985ea27a$export$236594f7f03ae3c9)(code_base64);
    const probableInterfaces = (0, $017fb6392d42fa6a$export$b351edbeb0c38b0c)(methodNames);
    return {
        methodNames: methodNames,
        ...probableInterfaces
    };
}


var $42af6d254e81e8c2$exports = {};



$parcel$exportWildcard(module.exports, $017fb6392d42fa6a$exports);
$parcel$exportWildcard(module.exports, $b6a0e74e5dac6e12$exports);
$parcel$exportWildcard(module.exports, $db46ee7cdb093ccd$exports);
$parcel$exportWildcard(module.exports, $87a6f453985ea27a$exports);
$parcel$exportWildcard(module.exports, $db830ac2df7d653c$exports);
$parcel$exportWildcard(module.exports, $42af6d254e81e8c2$exports);
$parcel$exportWildcard(module.exports, $35fc1413ec66129a$exports);


//# sourceMappingURL=bundle.js.map
