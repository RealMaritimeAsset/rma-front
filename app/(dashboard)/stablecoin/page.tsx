'use client';

import React, { ChangeEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import Card from '@/components/card/card';
import { useWalletStore } from '@/store/wallet/wallet-store';

export default function StableCoinPage() {
  const { walletAddress, walletType, isBusiness } = useWalletStore();
  const [amount, setAmount] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };
  const handleOnClick = () => {
    // TODO 입력한 금액에 대해 컨트랙트로 요청
    console.log('지갑 주소: ', walletAddress, '입력한 금액: ', amount);
  };
  return (
    <div>
      <div className="flex w-full items-center justify-center h-[700px]">
        <div className="w-[800px] mx-12">
          <div className=" text-5xl font-bold my-3">Stable Coin</div>
          <div className="p-3">
            All Tether tokens are pegged at 1-to-1 with a matching fiat currency
            and are backed 100% by Tether’s Reserves. Information about Tether
            Tokens in circulation is typically published daily.1 The Tether
            Issuers’2 combined assets exceed their combined liabilities.
          </div>
        </div>
        <div className="border-8 rounded-lg border-stone-100 p-15 w-[600px] mr-6">
          <Card>
            <div className="grid grid-cols-2 gap-4 p-3">
              <div>
                <div className=" text-lg font-semibold">ETH in Vault</div>
                <div className=" text-2xl text-slate-400">1,000,000,000ETH</div>
                <div>(Net Circulation)</div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Total Supply</div>
                <div className=" text-2xl text-slate-400">300,000 X img</div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Current ETH/USD</div>
                <div className=" text-2xl text-slate-400">$3,692</div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Current ETH/USD</div>
                <div className=" text-2xl text-slate-400">$3,692</div>
              </div>
              <div>
                <div className=" text-lg font-semibold">Current ETH/USD</div>
                <div className=" text-2xl text-slate-400">$3,692</div>
              </div>
            </div>
            <div className="flex flex-row mt-6 justify-end mr-4">
              <input
                type="text"
                id=""
                name=""
                value={amount}
                onChange={handleChange}
                className=" w-full border-2 mr-4"
              />
              <Button
                variant="default"
                className="mr-6"
                onClick={handleOnClick}
              >
                Get Stable
              </Button>
              <Button>Redeem</Button>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-full flex justify-center gap-8  p-6 mx-5 ">
        <div className="flex flex-row border-8 rounded-lg border-stone-100 py-2 ">
          <div className=" p-5  rounded-2xl ">
            <div className=" text-2xl text-blue-500 mb-3">My Stable Coins</div>
            <div className="text-4xl">800,000,000KRWT</div>
          </div>
          <div className=" bg-slate-100 h-full w-1" />
          <div className=" p-5  rounded-2xl ">
            <div className=" text-2xl  text-blue-500 mb-3">
              Deposited Ethereum
            </div>
            <div className="text-4xl">12345ETH</div>
          </div>
        </div>
      </div>
    </div>
  );
}
