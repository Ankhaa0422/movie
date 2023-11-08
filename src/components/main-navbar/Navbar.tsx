'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Headroom from 'react-headroom'
import { Icon } from '..'

const Navbar = () => {
    const router = useRouter()
    const navigateHome = () => router.push('/')

    return <Headroom upTolerance={1} className='!z-[999999] fixed left-0 top-0 w-full'>
        <nav className='w-full h-[40px] bg-[#312f3f] bg-opacity-50 backdrop-blur'>
            <section className='container w-full h-full mx-auto flex flex-row justify-between items-center px-4'>
                <div className='logo w-fit h-fit cursor-pointer' onClick={navigateHome} >FilmBridge</div>
                <div>
                    <ul className='flex flex-row gap-7'>
                        <li className='cursor-pointer hover:text-neutral-200 transition-all'>Home</li>
                        <li className='cursor-pointer hover:text-neutral-200 transition-all'>About</li>
                        <li className='cursor-pointer hover:text-neutral-200 transition-all'>Film</li>
                    </ul>
                </div>
                <div className='flex flex-row'>
                    <button>
                        <Icon icon='icon-park-outline:dark-mode' size='1.3rem'/>
                    </button>
                </div>
            </section>
        </nav>
    </Headroom>
}

export default Navbar