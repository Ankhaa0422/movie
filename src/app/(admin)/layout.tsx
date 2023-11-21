'use client'
import '../globals.css'
import { AnimatePresence } from 'framer-motion'
import { AdminSideBar, AdminHeader } from '@/components'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>QWERTY</title>
      <body className={`bg-[#1c1a27] text-zinc-200 flex flex-row`}>  
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
