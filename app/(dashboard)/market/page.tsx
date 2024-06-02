'use client';

import React, { useEffect, useState } from 'react';
import ShipCard from './_components/ship-card';
import Heading from './_components/heading';
import Image from 'next/image';
import { ROUTE, SHIP } from '@/data/constant';
import axios from 'axios';

export default function MarketPage() {
  const [data, setData] = useState<any>();
  //TODO 1.마켓페이지
  useEffect(() => {
    const getData = async () => {
      // 전체 rwa를 불러오는 api 작성
      const response: any = await axios.get(
        'http://localhost:3000/api/v1/rwa-market'
      );
      console.log('받아온 데이터: ', response.res);
      setData(response.res);
    };
    getData();
  }, []);
  return (
    <>
      <Heading>Popular items for tankers</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data &&
          data.map((item: any) => (
            <ShipCard
              key={item.id}
              route={`${ROUTE.MARKET_DETAIL}/${item.id}`}
              item={item}
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data.map((item: any) => (
          <ShipCard
            key={item.id}
            route={`${ROUTE.MARKET_DETAIL}/${item.id}`}
            item={item}
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
    </>
  );
}
