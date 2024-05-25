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

export const ROUTE = {
  MARKET_DETAIL: 'market/detail',
}

export const SHIP = [
  {
    id: '',
    name: 'container1',
    src: '/ship/container1.png',
  },
  {
    id: '',
    name: 'container2',
    src: '/ship/container1.png',
  },
  {
    id: '',
    name: 'container3',
    src: '/ship/container1.png',
  },
  {
    id: '',
    name: 'container4',
    src: '/ship/container1.png',
  },
  {
    id: '',
    name: 'container5',
    src: '/ship/container1.png',
  },
  {
    id: '',
    name: 'tanker1',
    src: '/ship/tanker1.png',
  },
  {
    id: '',
    name: 'tanker2',
    src: '/ship/tanker2.png',
  },
  {
    id: '',
    name: 'tanker3',
    src: '/ship/tanker3.png',
  },
  {
    id: '',
    name: 'tanker4',
    src: '/ship/tanker4.png',
  },
  {
    id: '',
    name: 'tanker5',
    src: '/ship/tanker5.png',
  },
  {
    id: '',
    name: 'vulk1',
    src: '/ship/vulk1.png',
  },
  {
    id: '',
    name: 'vulk2',
    src: '/ship/vulk2.png',
  },
  {
    id: '',
    name: 'vulk3',
    src: '/ship/vulk3.png',
  },
  {
    id: '',
    name: 'vulk4',
    src: '/ship/vulk4.png',
  },
  {
    id: '',
    name: 'vulk5',
    src: '/ship/vulk5.png',
  },
]
