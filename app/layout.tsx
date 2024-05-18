import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Real Maritime Asset',
  description:
    'Ship Finance RWA Defi Project, which moves the real assets of marine ships to an on-chain and is participated and shared by individual investors in the existing institution-centered financial system',
  icons: {
    icon: [{ url: '/icons/logo.png', href: '/icons/logo.png' }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
