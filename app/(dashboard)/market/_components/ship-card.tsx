'use client';

import Card from '@/components/card/card';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ReactNode } from 'react';

interface ShipCardProps {
  route: string;
  img: ReactNode;
  title?: string;
}

export default function ShipCard({ route, img, title }: ShipCardProps) {
  const router = useRouter();
  return (
    <Card onPress={() => router.push(route)}>
      <div
        className="flex flex-col justify-between items-center gap-4  border border-gray-400 rounded-lg p-4
      transition-transform transform hover:-translate-y-1
      "
      >
        {img}
        <div className="w-full">
          <div className=" text-gray-500">Daehanhawun</div>
          <div className=" text-2xl font-bold">Container Ship</div>
          <div className=" flex flex-row bg-gray-100 p-5 justify-between rounded-lg">
            <div>
              {' '}
              #ECECEC
              <div className=" text-lg"> Price</div>
              <div className=" font-bold">1234</div>
            </div>
            <div>
              <div className=" text-lg"> Progress </div>
              <div className=" font-semibold">48%</div>
            </div>
          </div>
          <div> 마감: 2028/12/23</div>
        </div>
      </div>
    </Card>
  );
}
