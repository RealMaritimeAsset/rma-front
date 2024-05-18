'use client'

// import {UserButton, useAuth} from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { LogOut } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import WalletConnect from '../wallet'
import MetamaskProvider from '@/app/providers/metamask-provider'
import Image from 'next/image'
// import {isTeacher} from '@/lib/teacher'

// import {SearchInput} from './search-input'

const isLogin = false
const businessMode = false

export const NavbarRoutes = () => {
  // const {userId} = useAuth()
  const pathname = usePathname()

  return (
    <div className="flex justify-evenly w-full items-center">
      <Image src="/icons/logo.png" alt="Logo" width={40} height={25} />
      <div className=" font-semibold w-16 mx-5">RMA</div>
      <div className="flex gap-4">
        <div>Products</div>
        <div>Liquidity</div>
        <div>Claim</div>
        <div>Faucet</div>
      </div>
      <div className="flex gap-x-2 ml-auto">
        {isLogin ? (
          <Link href="/teacher/courses">
            <Button size="sm">Business Mode</Button>
            <Button variant="ghost">Test network</Button>
            <Button variant="ghost">0xca12...aaa3</Button>
          </Link>
        ) : (
          <Link href="/">
            <MetamaskProvider>
              <WalletConnect />
            </MetamaskProvider>
          </Link>
        )}
      </div>
    </div>
  )
}
