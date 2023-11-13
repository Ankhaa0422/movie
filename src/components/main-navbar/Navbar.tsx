/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Headroom from 'react-headroom'
import {motion} from 'framer-motion'
import { Icon } from '..'
import Link from 'next/link'

const Navbar = () => {
    const router = useRouter()
    const navigateHome = () => router.push('/')
    // bg-[#312f3f]
    const zam = usePathname()
    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {window.removeEventListener('scroll', onScroll)}
    }, [])

    function onScroll (e:any) {
        const element = e.target.scrollingElement
        console.log({element})
        if(zam !== '/') return;
        if(element.scrollTop < 300) {
            document.getElementById('navbar')?.classList.add('!bg-transparent')
            document.getElementById('navbar')?.classList.remove('backdrop-blur')
            document.getElementById('navbar')?.classList.remove('bg-[#312f3f]')
        } else {
            document.getElementById('navbar')?.classList.remove('!bg-transparent')
            document.getElementById('navbar')?.classList.add('backdrop-blur')
            document.getElementById('navbar')?.classList.add('bg-[#312f3f]')
            
        }
    }

    return <Headroom upTolerance={1} className='!z-[999999] fixed left-0 top-0 w-full transition-all'>
        <nav id='navbar' className={`w-full h-[50px] bg-opacity-60 transition-all ${zam !== '/' && 'bg-[#312f3f] backdrop-blur'}`}>
            <section className='container w-full h-full mx-auto flex flex-row justify-between items-center px-4'>
                <div className='logo w-fit h-fit cursor-pointer' onClick={navigateHome} >FilmBridge</div>
                <div>
                    <ul className='flex flex-row gap-7'>
                        <li className='cursor-pointer hover:text-neutral-200 transition-all'>Home</li>
                        <li className='cursor-pointer hover:text-neutral-200 transition-all'>About</li>
                        <li className='cursor-pointer hover:text-neutral-200 transition-all'>Film</li>
                    </ul>
                </div>
                <div className='flex flex-row gap-3'>
                    <Link href={'#'}>
                        <SocialIcon icon='bi:facebook' hoverIcon='logos:facebook' size='1.3rem'/>
                    </Link>
                    <Link href={'#'}>
                        <SocialIcon icon='uil:instagram-alt' hoverIcon='skill-icons:instagram' size='1.4rem'/>
                    </Link>
                    {/* <button>
                        <Icon icon='icon-park-outline:dark-mode' size='1.3rem'/>
                    </button> */}
                </div>
            </section>
        </nav>
    </Headroom>
}

export default Navbar

function SocialIcon ({ icon, hoverIcon, size }:{ icon:string, hoverIcon:string, size:string }) {
    const [hover, setHover] = React.useState(false)
    return <motion.div onMouseEnter={() => {setHover(true)}} onMouseLeave={() => {setHover(false)}}>
        <Icon icon={hover ? hoverIcon : icon} size={size} className='transition-all'/>
    </motion.div>
}