'use client'

import Card from '@/components/card/card'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface ShipCardProps {
  route: string
  img: ReactNode
  title?: string
}

export default function ShipCard({ route, img, title }: ShipCardProps) {
  const router = useRouter()
  return (
    <Card onPress={() => router.push(route)}>
      <div className="flex flex-col justify-between items-center gap-4">
        {img}
        <div>
          <div>Container Ship</div>
          <div> 가격: 1234</div>
          <div> 회사: 현대</div>
          <div> 진행률: 48%</div>
          <div> 마감: 2028/12/23</div>
        </div>
      </div>
    </Card>
  )
}
