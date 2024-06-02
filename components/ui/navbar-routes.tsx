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
import { useEffect, useState } from 'react';
import { useDialog } from '@/hooks/dialog-hook';
import { cn } from '@/lib/utils';
import axios from 'axios';

const BUSINESS_MODE = true;

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const { walletAddress, walletType, isBusiness, setBusiness } =
    useWalletStore();
  const { onOpen, isOpen } = useDialog();
  const routes = menuItems(pathname || '');
  const router = useRouter();
  const [user, setUser] = useState<any>();
  useEffect(() => {
    const getUser = async () => {
      // 유저 조회
      let response = await axios.get(
        `http://localhost:3000/api/v1/mypage/${walletAddress}`
      );
      //console.log('response1:', response);
      // 있으면 그대로 없으면 생성

      console.log('res-----------------', response);
      if (response.data.res.length === 0) {
        console.log('walletAddress---------------------------', walletAddress);
        const requestBody = {
          business_name: '',
          business_ca: '',
          address: walletAddress
        };
        response = await axios.post(
          `http://localhost:3000/api/v1/register-user`,
          requestBody
        );
      }
      console.log('response2:', response);
      setUser(response.data.res[0]);
      // zustand 전역으로 설정
      setBusiness(response.data.res[0].is_business);
    };
    if (walletAddress.length > 0 && walletType !== WalletType.none) {
      getUser();
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
          .filter((item) => item.type === 'business' && isBusiness)
          .map((item) => (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                'text-xl mx-2',
                item.active && 'font-bold text-color-change'
              )}
            >
              {item.name}
            </Link>
          ))}
      </div>
      <div className="flex gap-x-2 ml-auto">
        {!(walletAddress.length <= 0 || walletType === WalletType.none) &&
          (isBusiness ? (
            // <Link href="/business/dashboard">
            //   <Button size="lg" className=" text-lg rounded-xl font-semibold">
            //     Business Mode
            //   </Button>
            // </Link>
            <div>{user?.business_name}</div>
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
