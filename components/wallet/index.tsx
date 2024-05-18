import { useWalletStore } from '@/store/wallet/wallet-store'
import { WalletType } from '@/store/wallet/wallet-type'
import { useDisclosure } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import WalletButton from './wallet-button'
import WalletModal from './wallet-modal'
import ChainButton from './chain-button'
import WalletProfile from './wallet-profile'
import { ChainModal } from './chain-modal'

export default function WalletConnect() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const {
    isOpen: isOpenChain,
    onOpen: onOpenChain,
    onOpenChange: onOpenChangeChain,
  } = useDisclosure()
  const { walletAddress, walletType } = useWalletStore()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  if (
    domLoaded &&
    (walletAddress.length <= 0 || walletType === WalletType.none)
  )
    return (
      <>
        <WalletButton onOpen={onOpen} />
        <WalletModal isOpen={isOpen} onOpenChange={onOpenChange} />
      </>
    )
  return (
    <div className="flex space-x-3 items-center">
      <ChainButton onOpen={onOpenChain} />
      <WalletProfile />
      <ChainModal isOpen={isOpenChain} onOpenChange={onOpenChangeChain} />
    </div>
  )
}
