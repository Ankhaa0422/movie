'use client'
import '../globals.css'
import '@/assets/global.scss'
import { Navbar } from '@/components'
import { AnimatePresence } from 'framer-motion'
import '@/assets/cursor.scss'
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
            <body className={`bg-[#1c1a27] text-zinc-100`}>
                <Navbar/>
                <AnimatePresence mode='wait'>
                    {children}
                </AnimatePresence>
            </body>
        </html>
    )
}
