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
import toast from 'react-hot-toast';
import { ROUTE } from '@/data/constant';
import { WalletType } from '@/store/wallet/wallet-type';
import {
  CreateUserByAddress,
  getUserByAddress
} from '@/app/actions/server/user';
import { useEffect } from 'react';
import { useDialog } from '@/hooks/dialog-hook';
import { cn } from '@/lib/utils';

const BUSINESS_MODE = true;

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const { walletAddress, walletType, isBusiness } = useWalletStore();
  const { onOpen, isOpen } = useDialog();
  const routes = menuItems(pathname || '');
  const router = useRouter();
  useEffect(() => {
    const getUser = async (address: string) => {
      try {
        let user = await getUserByAddress(address);
        if (!user) {
          user = await CreateUserByAddress(address);
          toast.success('Login successful 🎉');
        }
        router.refresh();
      } catch {
        console.log('error');
      }
    };

    if (walletAddress.length > 0 && walletType !== WalletType.none) {
      getUser(walletAddress);
    }
    console.log('isBusiness? ', isBusiness);
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
              className={cn(item.active && 'font-bold')}
            >
              {item.name}
            </Link>
          ))}
      </div>
      <div className="flex gap-x-2 ml-auto">
        {!(walletAddress.length <= 0 || walletType === WalletType.none) &&
          (!isBusiness ? (
            <Link href="/business/dashboard">
              <Button size="sm">Business Mode</Button>
            </Link>
          ) : (
            <Button size="sm" onClick={onOpen}>
              Enroll
            </Button>
          ))}
        <MetamaskProvider>
          <WalletConnect />
        </MetamaskProvider>
      </div>
    </div>
  );
};
