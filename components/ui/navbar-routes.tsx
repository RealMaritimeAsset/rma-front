'use client'

import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import WalletConnect from '../wallet'
import MetamaskProvider from '@/app/providers/metamask-provider'
import Image from 'next/image'
import { useWalletStore } from '@/store/wallet/wallet-store'
import { MENU_ITEMS } from '@/data/menu'

const isLogin = false
export const BUSINESS_MODE = true

export const NavbarRoutes = () => {
  const pathname = usePathname()
  const { walletAddress } = useWalletStore()

  return (
    <div className="flex justify-evenly w-full items-center">
      <Image src="/icons/logo.png" alt="Logo" width={40} height={25} />
      <div className=" font-semibold w-16 mx-5">RMA</div>
      <div className="flex gap-4">
        {MENU_ITEMS.filter(
          (item) => (item.type === 'business') === BUSINESS_MODE
        ).map((item) => (
          <Link href={item.href} key={item.href}>
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex gap-x-2 ml-auto">
        {BUSINESS_MODE ? (
          <Link href="/business/manage">
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
