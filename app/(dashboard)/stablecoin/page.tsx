import React from 'react';
import SwapContainer from './_components/swap-container';
import { Button } from '@/components/ui/button';
import Card from '@/components/card/card';

export default function StableCoinPage() {
  return (
    <>
      <div className="flex w-full bg-slate-200 p-4 items-center justify-center h-[700px]">
        <div className="flex-1">
          <div className=" text-4xl font-bold">Stable Coin</div>
          <div>
            All Tether tokens are pegged at 1-to-1 with a matching fiat currency
            and are backed 100% by Tether’s Reserves. Information about Tether
            Tokens in circulation is typically published daily.1 The Tether
            Issuers’2 combined assets exceed their combined liabilities.
          </div>
        </div>
        <div className="flex-1">
          {/* <div className="px-5"> */}
          <Card>
            <div>ETH in Vault</div>
            <div>1,000,000,000ETH</div>
            <div>(Net Circulation)</div>
            <div>Total Supply</div>
            <div>300,000 X img</div>
            <div>Current ETH/USD</div>
            <div>$3,692</div>
            <Button variant="default">Get Stable</Button>
            <Button>Redeem</Button>
          </Card>
          {/* </div> */}
        </div>
      </div>
      <div>
        <div>보유 스테이블코인</div>
        <div>800,000,000KRWT</div>
        <div>맡긴 이더</div>
        <div>12345ETH</div>
      </div>
    </>
  );
}
