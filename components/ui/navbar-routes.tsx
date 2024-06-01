'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import WalletConnect from '../wallet';
import MetamaskProvider from '@/app/providers/metamask-provider';
import Image from 'next/image';
import { useWalletStore } from '@/store/wallet/wallet-store';
import { menuItems } from '@/data/menu';
import { ROUTE } from '@/data/constant';
import { WalletType } from '@/store/wallet/wallet-type';
import { useEffect } from 'react';
import { useDialog } from '@/hooks/dialog-hook';
import { cn } from '@/lib/utils';
import axios from 'axios';

const BUSINESS_MODE = false;

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const { walletAddress, walletType, isBusiness } = useWalletStore();
  const { onOpen, isOpen } = useDialog();
  const routes = menuItems(pathname || '');
  const router = useRouter();
  useEffect(() => {
    const getUser = async (address: string) => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/mypage/${walletAddress}`
      );
      console.log('response', response);
      const isBusiness = response.data.res.is_business === 1;
      console.log('isBusiness', isBusiness);
    };

    if (walletAddress.length > 0 && walletType !== WalletType.none) {
      getUser(walletAddress);
    }
    console.log('isBusiness? ', walletAddress);
  }, [walletAddress]);

  return (
    <div className="flex justify-evenly w-full items-center">
      <Link href={ROUTE.ROOT} className="flex items-center">
        <Image src="/icons/logo.png" alt="Logo" width={40} height={25} />
        <div className=" font-semibold w-16 mx-5">RMA</div>
      </Link>
      <div className="flex gap-4">
        {routes
          .filter((item) => (item.type === 'business') === BUSINESS_MODE)
          .map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(item.active && 'font-bold text-color-change')}
            >
              {item.name}
            </Link>
          ))}
      </div>
      <div className="flex gap-x-2 ml-auto">
        {!(walletAddress.length <= 0 || walletType === WalletType.none) &&
          (isBusiness ? (
            <Link href="/business/dashboard">
              <Button size="lg" className=" text-lg rounded-xl font-semibold">
                Business Mode
              </Button>
            </Link>
          ) : (
            <Button
              onClick={onOpen}
              size="lg"
              className=" text-lg rounded-xl font-semibold h-13"
            >
              Register
            </Button>
          ))}
        <MetamaskProvider>
          <WalletConnect />
        </MetamaskProvider>
      </div>
    </div>
  );
};
