const fs = require('fs');
const lib = require('../dist/bundle');

test('wrap', () => {
  const payload = fs.readFileSync('./tests/wrap.base64', 'utf8');
  const parsed = lib.parseContract(payload);

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

test('questverse', () => {
  const payload = fs.readFileSync('./tests/questverse.base64', 'utf8');
  const parsed = lib.parseContract(payload);

  //   const expectedMethodNames = [];
  //   expect(parsed.methodNames.length).toEqual(expectedMethodNames.length);
  //   expect(parsed.methodNames).toEqual(
  //     expect.arrayContaining(expectedMethodNames),
  //   );

  //   const expectedInterfaces = [];

  //   expect(parsed.probableInterfaces).toEqual(
  //     expect.arrayContaining(expectedInterfaces),
  //   );
  //   expect(parsed.probableInterfaces.length).toEqual(expectedInterfaces.length);
});
