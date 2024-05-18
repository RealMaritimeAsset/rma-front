import { WalletType } from '@/store/wallet/wallet-type'

export const mappingWalletIconPath = (walletType: WalletType) => {
  switch (walletType) {
    case WalletType.metamask:
      return '/icons/metamask-icon.png'
    default:
      return '/'
  }
}
