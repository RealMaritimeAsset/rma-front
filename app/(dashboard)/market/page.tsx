'use client';

import React, { useEffect, useState } from 'react';
import ShipCard from './_components/ship-card';
import Heading from './_components/heading';
import Image from 'next/image';
import { ROUTE, SHIP } from '@/data/constant';

export default function MarketPage() {
  const [data, setData] = useState();
  //TODO 1.마켓페이지
  useEffect(() => {
    const getData = async () => {
      // 전체 rwa를 불러오는 api 작성
      // ShIP을 data로 변경
      // 아마 ShipCard로 props 넘겨줄때 타입 바뀔텐데 그때 불러주세요
      // axios.get()
    };
    getData();
  }, []);
  return (
    <>
      <Heading>Popular items for tankers</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {SHIP.map((item) => (
          <ShipCard
            key={item.name}
            route={`${ROUTE.MARKET_DETAIL}/${item.name}`}
            img={
              <Image
                className="m-2 mt-4 rounded-lg"
                src={item.src}
                alt={item.name}
                width={300}
                height={600}
              />
            }
          />
        ))}
      </div>

      <Heading>Cruise</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {SHIP.map((item) => (
          <ShipCard
            route=""
            img={
              <Image
                className="m-2 mt-4"
                src={item.src}
                alt={item.name}
                width={300}
                height={600}
              />
            }
          />
        ))}
      </div>
    </>
  );
}
