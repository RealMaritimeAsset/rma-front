'use client';

import Card from '@/components/card/card';
import { Progress } from '@nextui-org/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useState } from 'react';

interface ShipCardProps {
  route: string;
  img: ReactNode;
  title?: string;
}

export default function ShipCard({ route, img, title }: ShipCardProps) {
  const router = useRouter();
  const [progress, setProgress] = useState(60);
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
          <div className=" text-2xl font-bold mb-5">Container Ship</div>
          <div className=" flex flex-row bg-gray-100 p-5 justify-between rounded-lg ">
            <div className="ml-8">
              <div className=" text-lg"> Price</div>
              <div className=" font-bold">1234</div>
            </div>
            <div className="mr-8">
              <div className=" text-lg">Closing Date</div>
              <div className=" font-semibold"> 2028/12/23</div>
            </div>
          </div>
          <div className="mb-8 gap-3">
            <div className=" text-lg mt-4"> Progress</div>
            <Progress
              color="primary"
              aria-label="Progress"
              value={progress}
              className="max-w-md my-4"
            />
            <div>{progress}%</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
