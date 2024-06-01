import { create } from 'zustand';
import { IWalletState, WalletType } from './wallet-type';
import { createJSONStorage, persist } from 'zustand/middleware';

export const useWalletStore = create(
  persist<IWalletState>(
    (set, get) => ({
      walletType: WalletType.none,
      walletAddress: '',
      currentChainId: '',
      ownerId: '',
      isBusiness: true,
      resetState: () => {
        set({
          walletType: WalletType.none,
          walletAddress: '',
          currentChainId: '',
          ownerId: '',
          isBusiness: true
        });
      },
      setWalletType: (walletType: WalletType) => {
        set({ walletType });
      },
      setWalletAddress: (walletAddress: string) => {
        set({ walletAddress });
      },
      setCurrentChainId: (currentChainId: string) => {
        set({ currentChainId });
      },
      setOwnerId: (ownerId: string) => {
        set({ ownerId });
      },
      setBusiness: () => {
        set({ isBusiness: true });
      }
    }),
    {
      name: 'wallet-store',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
