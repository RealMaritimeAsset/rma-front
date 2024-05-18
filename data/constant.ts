type ChainInfo = {
  chainId: string
  rpcUrls: string[]
  chainName: string
  iconPath: string
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  blockExplorerUrls: string[]
}

export const CHAINS: Record<string, ChainInfo> = {
  '0xa869': {
    chainId: '0xa869',
    rpcUrls: ['https://api.avax-test.network/ext/bc/C/rpc'],
    chainName: 'Avalanche Fuji Testnet',
    iconPath: '/icons/avalanche-avax-logo.png',
    nativeCurrency: {
      name: 'Avalanche Fuji Testnet',
      symbol: 'AVAX',
      decimals: 18,
    },
    blockExplorerUrls: ['https://testnet.snowtrace.io'],
  },
}
