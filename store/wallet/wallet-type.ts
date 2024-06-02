export enum WalletType {
  metamask = 'metamask',
  none = 'none'
}

export interface IWalletState {
  walletType: WalletType;
  walletAddress: string;
  currentChainId: string;
  ownerId: string;
  isBusiness: boolean;

  resetState: () => void;
  setWalletType: (walletType: WalletType) => void;
  setWalletAddress: (walletAddress: string) => void;
  setCurrentChainId: (currentChain: string) => void;
  setOwnerId(ownerId: string): void;
  setBusiness: (isBusiness: boolean) => void;
}
