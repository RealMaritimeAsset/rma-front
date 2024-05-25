'use client'

// import {UserButton, useAuth} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import WalletConnect from '../wallet'
import MetamaskProvider from '@/app/providers/metamask-provider'
import Image from 'next/image'
import { useWalletStore } from '@/store/wallet/wallet-store'
// import {isTeacher} from '@/lib/teacher'

// import {SearchInput} from './search-input'

const isLogin = true
export const BUSINESS_MODE = false

export const NavbarRoutes = () => {
  // const {userId} = useAuth()
  const pathname = usePathname()
  const { walletAddress } = useWalletStore()

  return (
    <div className="flex justify-evenly w-full items-center">
      <Image src="/icons/logo.png" alt="Logo" width={40} height={25} />
      <div className=" font-semibold w-16 mx-5">RMA</div>
      <div className="flex gap-4">
        {BUSINESS_MODE ? (
          <>
            <div>Create</div>
            <div></div>
          </>
        ) : (
          <>
            <div>Markets</div>
            <div>Liquidity</div>
            <div>Claim</div>
            <div>Faucet</div>
          </>
        )}
      </div>
      <div className="flex gap-x-2 ml-auto">
        {BUSINESS_MODE ? (
          <Link href="/business">
            <Button size="sm">Business Mode</Button>
          </Link>
        ) : (
          <Button size="sm">back</Button>
        )}
        <MetamaskProvider>
          <WalletConnect />
        </MetamaskProvider>
      </div>
    </div>
  )
}
