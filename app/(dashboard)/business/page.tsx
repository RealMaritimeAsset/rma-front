import { useWalletStore } from '@/store/wallet/wallet-store'
import { redirect } from 'next/navigation'
import React from 'react'

export default async function BusinessPage() {
  const walletAddress = useWalletStore.getState().walletAddress
  // if (!walletAddress) {
  //   redirect('/')
  // }
  console.log('first: ', walletAddress)

  return <div>BusinessPage</div>
}
