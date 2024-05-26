import { Button } from '@/components/ui/button'
import { ROUTE } from '@/data/constant'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect(ROUTE.MARKET)
  return <></>
}
