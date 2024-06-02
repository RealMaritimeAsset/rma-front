'use client';

import Card from '@/components/card/card';
import { Progress } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useState } from 'react';

interface ShipCardProps {
  route: string;
  img: ReactNode;
  title?: string;
  item: any;
}

export default function ShipCard({ route, img, title, item }: ShipCardProps) {
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
          <div className=" text-gray-500">{item.company}</div>
          <div className=" text-2xl font-bold mb-5">{item.name}</div>
          <div className=" flex flex-row bg-gray-100 p-5 justify-between rounded-lg gap-3">
            <div className="ml-4">
              <div className=" text-lg"> Price</div>
              <div className=" font-bold">{item.price}</div>
            </div>
            <div className="mr-8">
              <div className=" text-lg">Closing Date</div>
              <div className=" font-semibold"> {item.due_date}</div>
            </div>
          </div>
          <div className="mb-8 gap-3">
            <div className=" text-lg mt-4"> Progress</div>
            <Progress
              color="primary"
              aria-label="Progress"
              value={item.progress}
              className="max-w-md my-4"
            />
            <div>{item.progress}%</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
