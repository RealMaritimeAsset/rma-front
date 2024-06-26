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
      isBusiness: false,
      resetState: () => {
        set({
          walletType: WalletType.none,
          walletAddress: '',
          currentChainId: '',
          ownerId: '',
          isBusiness: false
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
      setBusiness: (isBusiness: boolean) => {
        set({ isBusiness });
      }
      // setBusiness: async (walletAddress: string) => {
      //   try {
      //     const response = await axios.get(
      //       `${process.env.HOST}/api/v1/mypage/${walletAddress}`
      //     );
      //     const isBusiness = response.data.res.is_business === 1;
      //     set({ isBusiness });
      //   } catch (error) {
      //     console.error('Failed to fetch business status', error);
      //   }
      // }
    }),
    {
      name: 'wallet-store',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
);
