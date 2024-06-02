import { CHAINS } from '@/data/constant';

interface Chain {
  chainName: string;
  chainId: string;
  rpcUrls: string[];
  iconPath: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
  blockExplorerUrls?: string[];
}

interface ChainMap {
  [key: string]: Chain;
}

export const mappingChainInfo = (chainId: string) => {
  const chains: ChainMap = CHAINS;
  return chains[chainId] || null;
};
