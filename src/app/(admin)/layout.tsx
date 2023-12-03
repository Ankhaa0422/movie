'use client'
import '../globals.css'
import '../../assets/global.scss'
import { AnimatePresence } from 'framer-motion'
import { AdminSideBar, AdminHeader } from '@/components'
import { Metrophobic } from "next/font/google";

const calistoga = Metrophobic({weight:'400', subsets: ['latin']}) 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Filmbridge</title>
      <body className={`bg-[#1c1a27] text-zinc-200 flex flex-row ${calistoga.className}`}>  
          <AdminSideBar/>
          <div className='flex flex-col w-full h-screen overflow-auto'>
            <AdminHeader/>
            <div className='flex w-full h-fit mt-10 px-4'>
              <AnimatePresence mode='wait'>
                {children}
              </AnimatePresence>
            </div>
          </div>
      </body>
    </html>
  )
}
