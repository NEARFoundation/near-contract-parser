module.exports = {
  '{**/*.(js|ts),src/**/*}': 'prettier --write',
  '**/*.ts': () => 'tsc -p tsconfig.json --noEmit',
};
