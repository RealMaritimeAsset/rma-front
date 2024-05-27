'use client';

import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import WalletConnect from '../wallet';
import MetamaskProvider from '@/app/providers/metamask-provider';
import Image from 'next/image';
import { useWalletStore } from '@/store/wallet/wallet-store';
import { MENU_ITEMS } from '@/data/menu';
import toast from 'react-hot-toast';
import { ROUTE } from '@/data/constant';
import { WalletType } from '@/store/wallet/wallet-type';
import { getUserByAddress } from '@/app/actions/server/user';
import { useEffect } from 'react';

export const BUSINESS_MODE = false;

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const { walletAddress, walletType } = useWalletStore();

  useEffect(() => {
    const getUser = async (address: string) => {
      const user = await getUserByAddress(address);
      console.log('user: ', user);
    };
    // 지갑주소로 db검색을해서 존재하면 가져오고 없으면 만들어라
    if (walletAddress.length > 0 && walletType !== WalletType.none) {
      getUser(walletAddress);
    }
  }, [walletAddress]);

  return (
    <div className="flex justify-evenly w-full items-center">
      <Link href={ROUTE.ROOT} className="flex items-center">
        <Image src="/icons/logo.png" alt="Logo" width={40} height={25} />
        <div className=" font-semibold w-16 mx-5">RMA</div>
      </Link>
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
        {!(walletAddress.length <= 0 || walletType === WalletType.none) &&
          (BUSINESS_MODE ? (
            <Link href="/business/manage">
              <Button size="sm">Business Mode</Button>
            </Link>
          ) : (
            <Button size="sm" onClick={() => toast.success('wow so easy !')}>
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
