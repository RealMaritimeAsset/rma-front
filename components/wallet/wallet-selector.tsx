import { WalletType } from '@/store/wallet/wallet-type'
import { Button } from '@nextui-org/react'
import Image from 'next/image'

interface WalletSelectorProps {
  walletList: {
    label: string
    type: WalletType
    icon: string
    function: () => void
  }[]
  onClose: () => void
}

export default function WalletSelector({
  walletList,
  onClose,
}: WalletSelectorProps) {
  return walletList.map((wallet, key) => {
    return (
      <Button
        variant="bordered"
        key={key}
        onPress={() => {
          wallet.function()
          onClose()
        }}
        className="bg-white font-semibold flex justify-start border-1 border-[#E7E7E8] py-8"
      >
        <div className="flex items-center space-x-3 font-semibold text-sm">
          <Image src={wallet.icon} alt={wallet.label} width="30" height="30" />
          <p>{wallet.label}</p>
        </div>
      </Button>
    )
  })
}
