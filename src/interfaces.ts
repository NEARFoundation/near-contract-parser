import { JsonType } from './JsonType';

export const enum StandardInterfaceId {
  NEP141 = 'nep141',
  NEP148 = 'nep148',
  NEP171 = 'nep171',
  NEP177 = 'nep177',
  NEP178 = 'nep178',
}

export interface StandardInterface {
  id: StandardInterfaceId;
  name: string;
  methods: StandardInterfaceMethod[];
}

export interface StandardInterfaceArgument {
  name: string;
  type: JsonType | JsonType[];
}

export interface StandardInterfaceMethod {
  name: string;
  args: StandardInterfaceArgument[];
}

export const interfaces: Readonly<
  Record<StandardInterfaceId, StandardInterface>
> = Object.freeze({
  [StandardInterfaceId.NEP141]: {
    id: StandardInterfaceId.NEP141,
    name: 'FT Core (NEP-141)',
    methods: [
      {
        name: 'ft_transfer',
        args: [
          { name: 'receiver_id', type: JsonType.String },
          { name: 'amount', type: JsonType.String },
          { name: 'memo', type: [JsonType.String, JsonType.Null] },
        ],
      },
      {
        name: 'ft_transfer_call',
        args: [
          { name: 'receiver_id', type: JsonType.String },
          { name: 'amount', type: JsonType.String },
          { name: 'memo', type: [JsonType.String, JsonType.Null] },
          { name: 'msg', type: JsonType.String },
        ],
      },
      {
        name: 'ft_total_supply',
        args: [],
      },
      {
        name: 'ft_balance_of',
        args: [{ name: 'account_id', type: JsonType.String }],
      },
    ],
  },
  [StandardInterfaceId.NEP148]: {
    id: StandardInterfaceId.NEP148,
    name: 'FT Metadata (NEP-148)',
    methods: [
      {
        name: 'ft_metadata',
        args: [],
      },
    ],
  },
  [StandardInterfaceId.NEP171]: {
    id: StandardInterfaceId.NEP171,
    name: 'NFT Core (NEP-171)',
    methods: [
      {
        name: 'nft_transfer',
        args: [
          { name: 'receiver_id', type: JsonType.String },
          { name: 'token_id', type: JsonType.String },
          { name: 'approval_id', type: [JsonType.Number, JsonType.Null] },
          { name: 'memo', type: [JsonType.String, JsonType.Null] },
        ],
      },
      {
        name: 'nft_transfer_call',
        args: [
          { name: 'receiver_id', type: JsonType.String },
          { name: 'token_id', type: JsonType.String },
          { name: 'approval_id', type: [JsonType.Number, JsonType.Null] },
          { name: 'memo', type: [JsonType.String, JsonType.Null] },
          { name: 'msg', type: JsonType.String },
        ],
      },
      {
        name: 'nft_token',
        args: [{ name: 'token_id', type: JsonType.String }],
      },
    ],
  },
  [StandardInterfaceId.NEP177]: {
    id: StandardInterfaceId.NEP177,
    name: 'NFT Metadata (NEP-177)',
    methods: [
      {
        name: 'nft_metadata',
        args: [],
      },
    ],
  },
  [StandardInterfaceId.NEP178]: {
    id: StandardInterfaceId.NEP178,
    name: 'NFT Approval Management (NEP-178)',
    methods: [
      {
        name: 'nft_approve',
        args: [
          { name: 'token_id', type: JsonType.String },
          { name: 'account_id', type: JsonType.String },
          { name: 'msg', type: [JsonType.String, JsonType.Null] },
        ],
      },
      {
        name: 'nft_revoke',
        args: [
          { name: 'token_id', type: JsonType.String },
          { name: 'account_id', type: JsonType.String },
        ],
      },
      {
        name: 'nft_revoke_all',
        args: [{ name: 'token_id', type: JsonType.String }],
      },
      {
        name: 'nft_is_approved',
        args: [
          { name: 'token_id', type: JsonType.String },
          { name: 'approved_account_id', type: JsonType.String },
          { name: 'approval_id', type: [JsonType.Number, JsonType.Null] },
        ],
      },
    ],
  },
});
