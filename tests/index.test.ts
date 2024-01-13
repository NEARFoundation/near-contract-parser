import * as fs from 'fs';
import * as lib from '../src/index';
import { test, expect } from '@jest/globals';

test('wrap', async () => {
  const payload = fs.readFileSync('./tests/wrap.base64', 'utf8');
  const parsed = await lib.parseContract(payload);

  const expectedMethodNames = [
    'storage_minimum_balance',
    'near_deposit',
    'near_withdraw',
    'new',
    'ft_transfer',
    'ft_transfer_call',
    'ft_total_supply',
    'ft_balance_of',
    'ft_resolve_transfer',
    'storage_deposit',
    'storage_withdraw',
    'storage_unregister',
    'storage_balance_bounds',
    'storage_balance_of',
    'ft_metadata',
  ];
  expect(parsed.methodNames.length).toEqual(expectedMethodNames.length);
  expect(parsed.methodNames).toEqual(
    expect.arrayContaining(expectedMethodNames),
  );

  const expectedInterfaces = [
    lib.StandardInterfaceId.NEP141,
    lib.StandardInterfaceId.NEP145,
    lib.StandardInterfaceId.NEP148,
  ];

  expect(parsed.probableInterfaces).toEqual(
    expect.arrayContaining(expectedInterfaces),
  );
  expect(parsed.probableInterfaces.length).toEqual(expectedInterfaces.length);
});

test('questverse', async () => {
  const payload = fs.readFileSync('./tests/questverse.base64', 'utf8');
  const parsed = await lib.parseContract(payload);

  const expectedMethodNames = [
    'is_global_freeze',
    'quests',
    'quest_by_id',
    'quests_by_owner',
    'claimed_quests_by_user',
    'new',
    'create_quest',
    'close_quest',
    'claim_reward',
    'claim_reward_unverified',
    'admin_freeze',
    'admin_unfreeze',
    'admin_set_quest_fee',
    'admin_set_admin',
    'admin_set_claim_signer',
    'admin_update_indexer_name',
    'on_claim_reward_verified',
  ];
  expect(parsed.methodNames.length).toEqual(expectedMethodNames.length);
  expect(parsed.methodNames).toEqual(
    expect.arrayContaining(expectedMethodNames),
  );

  expect(parsed.probableInterfaces.length).toEqual(0);
});

test('adder_no_abi', async () => {
  const payload = fs.readFileSync('./tests/adder_no_abi.base64', 'utf8');
  const parsed = await lib.parseContract(payload);

  const expectedMethodNames = [
    'contract_source_metadata',
    'add',
    'add_borsh',
    'add_callback',
  ];
  expect(parsed.methodNames.length).toEqual(expectedMethodNames.length);
  expect(parsed.methodNames).toEqual(
    expect.arrayContaining(expectedMethodNames),
  );

  const expectedInterfaces = [lib.StandardInterfaceId.NEP330];
  expect(parsed.probableInterfaces).toEqual(
    expect.arrayContaining(expectedInterfaces),
  );
  expect(parsed.probableInterfaces.length).toEqual(expectedInterfaces.length);
});

test('adder_with_abi', async () => {
  const payload = fs.readFileSync('./tests/adder_with_abi.base64', 'utf8');
  const parsed = await lib.parseContract(payload);

  const expectedMethodNames = [
    '__contract_abi',
    'contract_source_metadata',
    'add',
    'add_borsh',
    'add_callback',
  ];
  expect(parsed.methodNames.length).toEqual(expectedMethodNames.length);
  expect(parsed.methodNames).toEqual(
    expect.arrayContaining(expectedMethodNames),
  );

  const expectedInterfaces = [lib.StandardInterfaceId.NEP330];
  expect(parsed.probableInterfaces).toEqual(
    expect.arrayContaining(expectedInterfaces),
  );
  expect(parsed.probableInterfaces.length).toEqual(expectedInterfaces.length);
});
