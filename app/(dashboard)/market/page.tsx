import React from 'react';
import ShipCard from './_components/ship-card';
import Heading from './_components/heading';
import Image from 'next/image';
import { ROUTE, SHIP } from '@/data/constant';

export default function MarketPage() {
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
