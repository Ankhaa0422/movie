'use client'
import '../globals.css'
import '@/assets/global.scss'
import { Navbar, Transition } from '@/components'
import { AnimatePresence } from 'framer-motion'
import '@/assets/cursor.scss'
import { Calistoga, Nunito, Metrophobic } from "next/font/google";

const calistoga = Metrophobic({weight:'400', subsets: ['latin']}) 

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
    return (
            <html lang="en">
                <head>
                    <title>FilmBridge</title>
                </head>
                <body className={`bg-[#1c1a27] text-zinc-100 ${calistoga.className} select-none`}>
                    <Navbar/>
                    <AnimatePresence mode='wait' initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
                        <Transition direction='left'>
                            {children}
                        </Transition>
                    </AnimatePresence>
                </body>
            </html>
    )
}
