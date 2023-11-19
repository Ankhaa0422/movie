'use client'
import React from 'react'
import Link from "next/link"
import { motion } from 'framer-motion'
function NavItem({itemData, hover, setHover, zam}:{itemData:any, hover:string|null, setHover:Function, zam:string}) {
    return <Link href={itemData.href}>
        <li 
            className="group relative cursor-pointer h-full items-center justify-center flex hover:text-neutral-200 transition-all px-6" 
            onMouseEnter={() => {setHover(itemData.hoverId)}} 
            onMouseLeave={() => {setHover(null)}}
        >
            {itemData['en']}
            {
                hover === itemData.hoverId && <motion.div layoutId='navItem' className='absolute w-full h-[3px] min-h-[3px] bg-sky-400 bottom-0'/>
            }
            {
                !hover && zam === itemData.href && <motion.div layoutId='navItem' className='absolute w-full h-[3px] min-h-[3px] bg-sky-400 bottom-0'/>
            }
        </li>
    </Link>
}

export default NavItem