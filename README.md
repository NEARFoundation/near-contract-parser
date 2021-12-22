# NEAR Contract Parser

Collection of utilities for parsing base64-encoded WASM smart contracts on [NEAR Protocol](https://near.org), extracting exported members, and detecting likely candidates for [standard contract interface implementation](https://nomicon.io/Standards/README.html).

# Usage

## Installation

```txt
$ npm install --save near-contract-parser
```

## Example

```js
const { Near, keyStores } = require('near-api-js');
const { parseContract } = require('near-contract-parser');

const near = new Near({
  networkId: 'mainnet',
  keyStore: new keyStores.InMemoryKeyStore(),
  nodeUrl: 'https://rpc.mainnet.near.org',
  archivalUrl: 'https://archival-rpc.mainnet.near.org',
  walletUrl: 'https://wallet.mainnet.near.org',
  helperUrl: 'https://helper.mainnet.near.org',
  explorerUrl: 'https://explorer.mainnet.near.org',
});

(async () => {
  const account_id = 'CONTRACT_ACCOUNT_ID.near';
  const { code_base64 } = await near.connection.provider.query({
    account_id,
    finality: 'final',
    request_type: 'view_code',
  });

  console.log(parseContract(code_base64));
})();
```

# Authors

- Jacob Lindahl <jacob@near.foundation> [@sudo_build](https://twitter.com/sudo_build)
