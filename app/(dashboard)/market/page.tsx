'use client';

import React, { useEffect, useState } from 'react';
import ShipCard from './_components/ship-card';
import Heading from './_components/heading';
import Image from 'next/image';
import { ROUTE } from '@/data/constant';
import axios from 'axios';

export default function MarketPage() {
  const [data, setData] = useState<any[]>([]); // 초기 상태를 빈 배열로 설정

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/rwa-market'
        );
        console.log('받아온 데이터: ', response.data.res);
        setData(response.data.res);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Heading>Popular items for tankers</Heading>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {data &&
          data.map((item) => {
            // const query = new URLSearchParams(item).toString();
            return (
              <ShipCard
                key={item.id}
                route={`${ROUTE.MARKET_DETAIL}/${item.id}`}
                item={item}
                img={
                  <Image
                    className="m-2 mt-4 rounded-lg"
                    src={item.uri} // 여기서 uri를 사용
                    alt={item.name}
                    width={300}
                    height={600}
                  />
                }
              />
            );
          })}
      </div>
    </>
  );
}
