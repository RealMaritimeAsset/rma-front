import { NextUIProvider } from '@nextui-org/react'
import { Navbar } from './_components/navbar'
import MetamaskProvider from '@/app/providers/metamask-provider'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div>
      <NextUIProvider>
        <Navbar />
        {children}
      </NextUIProvider>
    </div>
  )
}
