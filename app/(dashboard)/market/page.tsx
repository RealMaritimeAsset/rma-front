import { SHIP } from '@/app/data/constant'
import React from 'react'
import ShipCard from './_components/ship-card'
import Heading from './_components/heading'
import Image from 'next/image'

export default function MarketPage() {
  return (
    <>
      <Heading>Popular items for tankers</Heading>
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
  )
}
