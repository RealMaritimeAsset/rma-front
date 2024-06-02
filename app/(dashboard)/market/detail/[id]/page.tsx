import { Button } from '@/components/ui/button';
import { BadgeCheck } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface DetailPageProps {
  params: { id: string };
}

export default function DetailPage({ params }: DetailPageProps) {
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
            <Image
              src={`/ship/${params.id}.png`}
              alt="container1"
              width={800}
              height={1000}
              className="transition-transform duration-500 ease-in-out transform hover:scale-110"
            />
          </div>
        </div>
        <div className="p-2 flex-1  pt-10">
          <div className="text-xl"> Container Ship</div>
          <div className=" text-5xl font-semibold">{params.id}</div>
          <div className=" text-2xl my-6 flex">
            <div className="p-5 text-gray-600">By</div>
            <div
              className="  p-5 rounded-2xl flex gap-2
          bg-white bg-opacity-10 backdrop-blur-lg  shadow-lg 
          "
            >
              <div>RealShipCompany</div>
              <BadgeCheck />
            </div>
            <div className=" p-5 text-gray-600">On</div>
            <div className="p-5">Avalanche</div>
          </div>
          <div className=" m-12 text-2xl font-semibold text-gray-700 w-[600px]">
            is a collection of 10,000 generative pfpNFT's in a neochibi
            aesthetic inspired by Tokyo street style tribes.is a collection of
            10,000 generative pfpNFT's in a neochibi aesthetic inspired by Tokyo
            street style tribes.
          </div>
          <div
            className="flex w-[600px] justify-between p-5 rounded-2xl gap-2
          bg-white bg-opacity-10 backdrop-blur-lg  shadow-lg "
          >
            <div className=" text-2xl ">
              <div className=" ">Price</div>
              <div className="">xxxx USDT</div>
            </div>
            <div className="pr-20">
              <div className=" text-2xl">Amount</div>
              <div className=" text-xl">xxxxx</div>
            </div>
          </div>
          <Button size="lg" className="py-7 rounded-2xl m-6">
            <div className=" text-2xl">Buy Now</div>
          </Button>
          <div className=" text-gray-500 font-semibold text-lg">
            7,385,913,000USDT
          </div>
        </div>
      </div>
    </div>
  );
}
