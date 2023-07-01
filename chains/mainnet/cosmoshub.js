module.exports = {
  chainID: 'cosmoshub-4',
  lcd: 'https://cosmoshub-4.terra.dev',
  gasAdjustment: 1.75,
  gasPrices: { uatom: 0.025 },
  prefix: 'cosmos',
  coinType: '118',
  baseAsset: 'uatom',
  name: 'Cosmos',
  icon: process.env.CF_PAGES_URL + '/img/chains/Cosmos.svg',
  ibc: {
    fromTerra: 'channel-2',
    toTerra: 'channel-219',
  },
  explorer: {
    address: 'https://www.mintscan.io/cosmos/account/{}',
    tx: 'https://www.mintscan.io/cosmos/txs/{}',
    validator: 'https://www.mintscan.io/cosmos/validators/{}',
    block: 'https://www.mintscan.io/cosmos/blocks/id/{}',
  },
  tokens: [
    {
      token: 'uatom',
      symbol: 'ATOM',
      name: 'Cosmos',
      icon: process.env.CF_PAGES_URL + '/img/coins/Cosmos.svg',
      decimals: 6,
    },
  ],
}
