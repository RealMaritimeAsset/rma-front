import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

interface DetailPageProps {
  params: { id: string }
}

export default function DetailPage({ params }: DetailPageProps) {
  return (
    <div className="flex p-3">
      <Image
        src="/ship/container1.png"
        alt="container1"
        width={400}
        height={600}
        className=" rounded-md"
      />
      <div className="p-3">
        <div>선박 이름 {params.id}</div>
        <div>개당 가격: xxxxKRWT</div>
        <div>선박 종류: Container Ship</div>
        <div>발행량: xxxxx</div>
        <div>ton: 100,000t</div>
        <div>회사: RealShipCompany</div>
        <div>네트워크: 아발란체</div>
        <div>
          설명: is a collection of 10,000 generative pfpNFT's in a neochibi
          aesthetic inspired by Tokyo street style tribes.{' '}
        </div>
        <div>총 발행량: 7,385,913,000KRWT</div>
        <div>aasdfsafsdaf</div>
        <Button>Buy Now</Button>
      </div>
    </div>
  )
}
