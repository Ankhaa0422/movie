'use client'
import { Inter } from 'next/font/google'
import '../globals.css'
import '@/assets/global.scss'
import { Navbar } from '@/components'
import { AnimatePresence } from 'framer-motion'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className bg-[#1c1a27] text-zinc-100`}>
        <Navbar/>
        <AnimatePresence mode='wait'>
            {children}
        </AnimatePresence>
      </body>
    </html>
  )
}
