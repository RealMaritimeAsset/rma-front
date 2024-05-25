import { Navbar } from './_components/navbar'

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="w-full flex-col justify-center items-center">
      <Navbar />
      {children}
    </div>
  )
}
