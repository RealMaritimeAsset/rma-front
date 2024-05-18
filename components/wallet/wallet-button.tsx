import React from 'react'
import { Button } from '../ui/button'

interface WalletButtonProps {
  onOpen: () => void
}

export default function WalletButton({ onOpen }: WalletButtonProps) {
  return (
    <Button
      onClick={onOpen}
      color="primary"
      className="text-white font-semibold"
    >
      Connect Wallet
    </Button>
  )
}
