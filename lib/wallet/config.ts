export const CHAIN_CONFIG = {
  chainId: 'morocco-1',
  chainName: 'Terp Network',
  rpc: 'https://rpc.terp.network',
  rest: 'https://api.terp.network',
  bech32Prefix: 'terp',
  denom: 'uthiol',
  denomDisplay: 'THIOL',
  denomDecimals: 6,
  stakeDenom: 'uterp',
} as const;

/** Contract addresses — empty until deployed. */
export const CONTRACTS = {
  terp721Account: 'terp142kvnl56hs7jacmwysswlhp4f4eyt7ljclcy9ak7v3cgg3ldhzzs6ye4vu',
  calendar: '', // resolved at runtime via billboard text records
} as const;

/**
 * Billboard account name whose text records hold DAO/subdao addresses.
 * The "subdao" text record points to the DAO that instantiated the calendar.
 */
export const BILLBOARD_ACCOUNT = 'terp' as const;

export const COSMES_CHAIN_INFO = [
  {
    chainId: CHAIN_CONFIG.chainId,
    rpc: CHAIN_CONFIG.rpc,
    gasPrice: { amount: '0.025', denom: CHAIN_CONFIG.denom },
  },
] as const;

/** Keplr experimentalSuggestChain payload. */
export const CHAIN_SUGGEST = {
  chainId: CHAIN_CONFIG.chainId,
  chainName: CHAIN_CONFIG.chainName,
  rpc: CHAIN_CONFIG.rpc,
  rest: CHAIN_CONFIG.rest,
  bip44: { coinType: 118 },
  bech32Config: {
    bech32PrefixAccAddr: 'terp',
    bech32PrefixAccPub: 'terppub',
    bech32PrefixValAddr: 'terpvaloper',
    bech32PrefixValPub: 'terpvaloperpub',
    bech32PrefixConsAddr: 'terpvalcons',
    bech32PrefixConsPub: 'terpvalconspub',
  },
  currencies: [
    { coinDenom: 'TERP', coinMinimalDenom: 'uterp', coinDecimals: 6 },
    { coinDenom: 'THIOL', coinMinimalDenom: 'uthiol', coinDecimals: 6 },
  ],
  feeCurrencies: [
    {
      coinDenom: 'THIOL',
      coinMinimalDenom: 'uthiol',
      coinDecimals: 6,
      gasPriceStep: { low: 0.01, average: 0.025, high: 0.04 },
    },
  ],
  stakeCurrency: {
    coinDenom: 'TERP',
    coinMinimalDenom: 'uterp',
    coinDecimals: 6,
  },
} as const;
