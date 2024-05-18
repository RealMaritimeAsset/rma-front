import { useWalletStore } from '@/store/wallet/wallet-store'
import { WalletType } from '@/store/wallet/wallet-type'
import { useMemo } from 'react'
import { useMetaMask } from './metamask-hook'

export const useProvider = () => {
  const { walletType, resetState } = useWalletStore()

  const {
    provider: metaMaskProvider,
    disconnect: metaMaskDisconnect,
    connecting,
  } = useMetaMask()

  const set = useMemo(() => {
    switch (walletType) {
      case WalletType.metamask:
        return {
          provider: metaMaskProvider,
          disconnect: () => {
            metaMaskDisconnect()
            resetState()
          },
        }
      default:
        return { provider: null, disconnect: () => {} }
    }
  }, [metaMaskDisconnect, metaMaskProvider, resetState, walletType])

  return { ...set }
}
