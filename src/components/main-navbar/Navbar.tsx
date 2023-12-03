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
import { useLocalStorage } from '@mantine/hooks'
import { siteLanguage } from '@/utility/defination'
import logo from '../../../public/logo.png'
import Image from 'next/image'
const Navbar = () => {
    const router = useRouter()
    const navigateHome = () => router.push('/')
    const [language, setLanguage] = useLocalStorage({key: 'language', defaultValue: 'en'})
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
        {href: '/', ...siteLanguage['home'], hoverId: 'home'},
        {href: '/about',  ...siteLanguage['about'], hoverId: 'about'},
        {href: '/film',  ...siteLanguage['filmLibrary'], hoverId: 'film'},
        // {href: '/contact',  ...siteLanguage['contact'], hoverId: 'contact'},
    ]

    return <Headroom upTolerance={1} className='!z-[10000] fixed left-0 top-0 w-full transition-all'>
        <nav id='navbar' className={`w-full h-[50px] bg-opacity-60 transition-all ${!['/', '/about'].some(x => x === zam) && 'bg-[#1c1a27] backdrop-blur'}`}>
            <section className='container w-full h-full mx-auto flex flex-row justify-between items-center px-4'>
                <div className='logo w-fit h-full cursor-pointer flex flex-row items-center gap-2 text-2xl' onClick={navigateHome} >
                    <Image src={logo.src} width={40} height={40} alt=""/>
                    FilmBridge
                </div>
                <div className='w-fit h-full'>
                    <ul className='flex flex-row h-full'>
                        {
                            navItems.map((x:any, i:number) => {
                                return <NavItem key={i} itemData={x} hover={hover} language={language} setHover={setHover} zam={zam}/>
                            })
                        }
                    </ul>
                </div>
                <div className='flex flex-row gap-3'>
                    <Link href={'https://www.facebook.com/TheFilmbridge'} data-cursor-size='70px' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 128 128">
                            <rect width="118.35" height="118.35" x="4.83" y="4.83" fill="#3d5a98" rx="6.53" ry="6.53"/>
                            <path fill="#fff" d="M86.48 123.17V77.34h15.38l2.3-17.86H86.48v-11.4c0-5.17 1.44-8.7 8.85-8.7h9.46v-16A126.56 126.56 0 0 0 91 22.7c-13.62 0-23 8.3-23 23.61v13.17H52.62v17.86H68v45.83z"/>
                        </svg>
                    </Link>
                    <Link href={'https://www.instagram.com/TheFilmbridge/'} data-cursor-size='70px' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256">
                            <g fill="none">
                                <rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60"/>
                                <rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60"/>
                                <path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z"/>
                                <defs>
                                    <radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#FD5"/>
                                        <stop offset=".1" stopColor="#FD5"/>
                                        <stop offset=".5" stopColor="#FF543E"/>
                                        <stop offset="1" stopColor="#C837AB"/>
                                    </radialGradient>
                                    <radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#3771C8"/>
                                        <stop offset=".128" stopColor="#3771C8"/>
                                        <stop offset="1" stopColor="#60F" stop-opacity="0"/>
                                    </radialGradient>
                                </defs>
                            </g>
                        </svg>
                    </Link>
                    {/* <button>
                        <Icon icon='icon-park-outline:dark-mode' size='1.3rem'/>
                    </button> */}
                    <select value={language} onChange={(e) => {setLanguage(e.target.value)}} className='bg-transparent active:outline-none focus:outline-none'>
                        <option value={'mn'} className='text-zinc-800'>MN</option>
                        <option value={'en'} className='text-zinc-800'>EN</option>
                    </select>
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