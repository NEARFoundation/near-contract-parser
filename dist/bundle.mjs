
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $8301a56bee88331f$exports = {};

$parcel$export($8301a56bee88331f$exports, "getProbableInterfaces", function () { return $8301a56bee88331f$export$b351edbeb0c38b0c; });
var $30d3da9d5bab9f1b$exports = {};

$parcel$export($30d3da9d5bab9f1b$exports, "StandardInterfaceId", function () { return $30d3da9d5bab9f1b$export$94bf4ff490ded96e; });
$parcel$export($30d3da9d5bab9f1b$exports, "interfaces", function () { return $30d3da9d5bab9f1b$export$bc1125d123d9fc6; });
var $30d3da9d5bab9f1b$export$94bf4ff490ded96e;
(function(StandardInterfaceId) {
    StandardInterfaceId["NEP141"] = "nep141";
    StandardInterfaceId["NEP145"] = "nep145";
    StandardInterfaceId["NEP148"] = "nep148";
    StandardInterfaceId["NEP171"] = "nep171";
    StandardInterfaceId["NEP177"] = "nep177";
    StandardInterfaceId["NEP178"] = "nep178";
    StandardInterfaceId["NEP199"] = "nep199";
    StandardInterfaceId["NEP330"] = "nep330";
})($30d3da9d5bab9f1b$export$94bf4ff490ded96e || ($30d3da9d5bab9f1b$export$94bf4ff490ded96e = {}));
const $30d3da9d5bab9f1b$export$bc1125d123d9fc6 = Object.freeze({
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


function $8301a56bee88331f$export$b351edbeb0c38b0c(methodNames) {
    const probableInterfaces = Object.keys((0, $30d3da9d5bab9f1b$export$bc1125d123d9fc6)).filter((i)=>(0, $30d3da9d5bab9f1b$export$bc1125d123d9fc6)[i].methods.every((m)=>methodNames.indexOf(m.name) !== -1));
    const byMethod = {};
    methodNames.forEach((methodName)=>{
        byMethod[methodName] = probableInterfaces.filter((i)=>(0, $30d3da9d5bab9f1b$export$bc1125d123d9fc6)[i].methods.map((m)=>m.name).indexOf(methodName) !== -1);
    });
    return {
        probableInterfaces: probableInterfaces,
        byMethod: byMethod
    };
}



var $0096a15788e4b6e3$exports = {};
/**
 * Data types supported by JSON format
 */ 

var $eba7685fd792abc0$exports = {};

$parcel$export($eba7685fd792abc0$exports, "parseContract", function () { return $eba7685fd792abc0$export$326d4dd2b9ef7090; });

async function $eba7685fd792abc0$export$326d4dd2b9ef7090(wasmBase64) {
    const bytes = $eba7685fd792abc0$var$base64StringToUint8Array(wasmBase64);
    const wasmModule = await WebAssembly.compile(bytes);
    const methodNames = await $eba7685fd792abc0$var$exportedFunctionNames(wasmModule);
    const probableInterfaces = (0, $8301a56bee88331f$export$b351edbeb0c38b0c)(methodNames);
    return {
        methodNames: methodNames,
        ...probableInterfaces
    };
}
/**
 * Converts a base64-encoded string to a byte array. Works in browser and Node
 * environments.
 *
 * @param strb64 base64 string
 * @returns Decoded byte array
 */ function $eba7685fd792abc0$var$base64StringToUint8Array(strb64) {
    return new Uint8Array(atob(strb64.toString().trim()).split("").map((c)=>c.charCodeAt(0)));
}
/**
 * Retrieves the names of all exported functions from a WebAssembly module.
 *
 * @param {WebAssembly.Module} wasmModule - The WebAssembly module to extract the exported function names from.
 * @return {Promise<string[]>} An array of strings containing the names of all exported functions.
 */ async function $eba7685fd792abc0$var$exportedFunctionNames(wasmModule) {
    const exports = WebAssembly.Module.exports(wasmModule);
    const exportedFunctionNames = exports.filter((e)=>e.kind === "function").map((e)=>e.name);
    return exportedFunctionNames;
}


var $4faef76cdc67f746$exports = {};




export {$8301a56bee88331f$export$b351edbeb0c38b0c as getProbableInterfaces, $30d3da9d5bab9f1b$export$94bf4ff490ded96e as StandardInterfaceId, $30d3da9d5bab9f1b$export$bc1125d123d9fc6 as interfaces, $eba7685fd792abc0$export$326d4dd2b9ef7090 as parseContract};
//# sourceMappingURL=bundle.mjs.map
