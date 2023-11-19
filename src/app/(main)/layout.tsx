'use client'
import '../globals.css'
import '@/assets/global.scss'
import { Navbar } from '@/components'
import { AnimatePresence } from 'framer-motion'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`bg-[#1c1a27] text-zinc-100`}>
              <AnimatePresence mode='wait'>
                <Navbar/>
                {children}
              </AnimatePresence>
            </body>
        </html>
    )
}
