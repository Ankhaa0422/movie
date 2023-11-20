/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import Headroom from 'react-headroom'
import {motion} from 'framer-motion'
import { Icon } from '..'
import NavItem from './comps/NavItem'
import Link from 'next/link'

const Navbar = () => {
    const router = useRouter()
    const navigateHome = () => router.push('/')
    const [hover, setHover] = React.useState<string | null>(null)
    // bg-[#312f3f]
    const zam = usePathname()
    React.useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => {window.removeEventListener('scroll', onScroll)}
    }, [zam])

    function onScroll (e:any) {
        const element = e.target.scrollingElement
        if(!['/', '/about'].some(x => x === zam)) return;
        if(element.scrollTop < 300) {
            document.getElementById('navbar')?.classList.add('!bg-transparent')
            document.getElementById('navbar')?.classList.remove('backdrop-blur')
            document.getElementById('navbar')?.classList.remove('bg-[#1c1a27]')
        } else {
            document.getElementById('navbar')?.classList.remove('!bg-transparent')
            document.getElementById('navbar')?.classList.add('backdrop-blur')
            document.getElementById('navbar')?.classList.add('bg-[#1c1a27]')
            
        }
    }

    const navItems = [
        {href: '/', en: 'Home', mn: 'Нүүр хуудас', hoverId: 'home'},
        {href: '/about', en: 'About', mn: 'Бидний тухай', hoverId: 'about'},
        {href: '/film', en: 'Film library', mn: 'Кино сан', hoverId: 'film'},
        {href: '/contact', en: 'Contact us', mn: 'Холбоо барих', hoverId: 'contact'},
    ]

    return <Headroom upTolerance={1} className='!z-[10000] fixed left-0 top-0 w-full transition-all'>
        <nav id='navbar' className={`w-full h-[50px] bg-opacity-60 transition-all ${!['/', '/about'].some(x => x === zam) && 'bg-[#1c1a27] backdrop-blur'}`}>
            <section className='container w-full h-full mx-auto flex flex-row justify-between items-center px-4'>
                <div className='logo w-fit h-fit cursor-pointer' onClick={navigateHome} >FilmBridge</div>
                <div className='w-fit h-full'>
                    <ul className='flex flex-row h-full'>
                        {
                            navItems.map((x:any, i:number) => {
                                return <NavItem key={i} itemData={x} hover={hover} setHover={setHover} zam={zam}/>
                            })
                        }
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