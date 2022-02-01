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
  });
});
