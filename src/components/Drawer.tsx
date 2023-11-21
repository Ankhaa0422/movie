/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { ReactElement } from 'react'
import { useRouter } from 'next/navigation'
import { Icon } from '.'
import { motion, AnimatePresence } from "framer-motion"
import { eventDisabler } from '@/utility'
interface Props {
    children: ReactElement,
    title:string | ReactElement,
    isOpen:Boolean
}

const Drawer = (props:Props) => {
    const { title = 'garchig', isOpen = false } = props
    const router = useRouter()
    React.useEffect(() => {
        document.body.style.overflow = 'hidden'
    }, [props])

    React.useEffect(() => {
        document.addEventListener('keydown', escMedrey)
        return () => document.removeEventListener('keydown', escMedrey)
    }, [router])

    function escMedrey(e:any) {
        if(e.key === 'Escape') {
            butsya()
        }
    }

    function butsya() {
        document.body.style.overflow = 'auto'
        router.back()
    }

    return <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className={`z-index fixed w-full h-full z-[10000] top-0 left-0 overflow-hidden bg-[#e3e5ef] dark:bg-[#000000] dark:bg-opacity-50 bg-opacity-50 backdrop-blur-sm`} onClick={butsya}>
        <motion.div initial={{top: '100%'}} animate={{top: 0}} exit={{top: '100%'}} className='w-full h-full relative bg-[#f5f5f5] dark:bg-[#252526] mt-10 z-[1001] rounded-t-3xl' onClick={eventDisabler}>
            <div className='h-[40px] w-full flex items-center px-5 border-b border-b-[#e3e3e3] dark:border-b-[#333333] justify-between text-sm py-1'>
                <button className='flex flex-row items-center gap-2 px-2 hover:bg-[#eeeeee] dark:hover:bg-[#333333] transition-all bg-opacity-50 h-full rounded-md' onClick={() => {butsya()}}>
                    <Icon icon='ph:arrow-left' size='20px'/>
                    Буцах
                </button>
                <div className='text-sm font-bold'>
                    {title}
                </div>
            </div>
            <div className={`w-full h-full overflow-auto transition-all duration-1000 container mx-auto`}>
                {props.children}
            </div>
        </motion.div>
    </motion.div>
}

export default Drawer