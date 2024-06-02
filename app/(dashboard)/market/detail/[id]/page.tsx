'use client';
import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DetailPageProps {
  params: { id: string };
}

export default function DetailPage({ params }: DetailPageProps) {
  const [detailData, setDetailData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/v1/rwa-market/detail/${params.id}`
      );
      console.log('response1:', response);
      setDetailData(response.data.res[0]);
    };
    getData();
  }, []);

  return (
    <div
      className=" h-[800px] pt-20 mt-10 mx-10 rounded-3xl "
      style={{
        backgroundImage: "url('/bg/detail_bg.jpeg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="flex p-3 bg-opacity-10 backdrop-blur-lg">
        <div className="flex-1 ">
          <div className="rounded-3xl overflow-hidden">
            {detailData && (
              <Image
                // src={`/ship/${params.id}.png`}
                src={detailData.uri}
                alt="container1"
                width={800}
                height={1000}
                className="transition-transform duration-500 ease-in-out transform hover:scale-110"
              />
            )}
          </div>
        </div>
        <div className="p-2 flex-1  pt-10">
          <div className="text-xl"> {detailData.name}</div>
          <div className=" text-2xl my-6 flex">
            <div className="p-5 text-gray-600">By</div>
            <div
              className="  p-5 rounded-2xl flex gap-2
          bg-white bg-opacity-10 backdrop-blur-lg  shadow-lg 
          "
            >
              <div>{detailData.company}</div>
              <BadgeCheck />
            </div>
            <div className=" p-5 text-gray-600">On</div>
            <div className="p-5">{detailData.network}</div>
          </div>
          <div className=" m-12 text-2xl font-semibold text-gray-700 w-[600px]">
            {detailData.description}
          </div>
          <div
            className="flex w-[600px] justify-between p-5 rounded-2xl gap-2
          bg-white bg-opacity-10 backdrop-blur-lg  shadow-lg "
          >
            <div className=" text-2xl ">
              <div className=" ">Price</div>
              <div className="">{detailData.price} USDT</div>
            </div>
            <div className="pr-20">
              <div className=" text-2xl">Amount</div>
              <div className=" text-xl">{detailData.amount}</div>
            </div>
          </div>
          <Button size="lg" className="py-7 rounded-2xl m-6">
            <div className=" text-2xl">Buy Now</div>
          </Button>
          <div className=" text-gray-500 font-semibold stext-lg">
            {detailData.price * detailData.amount} USDT
          </div>
        </div>
      </div>
    </div>
  );
}
