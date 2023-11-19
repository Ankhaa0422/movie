'use client'
import React from 'react'
import { motion } from "framer-motion"
import { defaultZurgiinKhemjeegeerHeightBodyo } from '@/utility'

function TeamCard ({data}:{data:any}) {
    const [hover, setHover] = React.useState(false)
    const cardRef = React.useRef<HTMLDivElement|null>(null)
    const mount = React.useRef(false)

    React.useEffect(() => {
        const controller = new AbortController()
        if(!mount.current) {
            mount.current = true
            onResize()
        }
        return () => {
            controller.abort()
        }
    })

    React.useEffect(() => {
        window.addEventListener('resize', onResize)
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    const onResize = () => {
        if(cardRef.current) {
            cardRef.current.style.height = `${defaultZurgiinKhemjeegeerHeightBodyo(cardRef.current.clientWidth)}px`
        }
    }

    return <motion.div
        ref={cardRef}
        className="relative rounded-sm shadow-md w-full cursor-pointer overflow-hidden"
        layout
        initial={{backdropFilter: 'blur(4px)'}}
        onHoverStart={() => {setHover(true)}}
        onHoverEnd={() => {setHover(false)}}
        transition={{
            type: "spring",
            duration: 0.3
        }}
    >
        <motion.img
            alt="Transition Image"
            src={data.Image}
            animate={{scale: hover ? 1.05 : 1}}
            transition={{duration:0.3}}
            className=" absolute h-full w-full  rounded-sm  object-cover brightness-75 "
        />
        <motion.div 
            className="absolute z-10 flex h-full items-end p-4 bg-gradient-to-t from-black to-transparent w-full" 
            initial={{backdropFilter: 'blur(10px)'}} 
            animate={{backdropFilter: 'none'}} 
            exit={{backdropFilter: 'blur(10px)'}} 
            transition={{duration: 1}}
        >
            <motion.div>
                <motion.div
                    layout
                    className=" mb-2 h-[2px] w-10 rounded-full bg-white"
                ></motion.div>
                <motion.p className="text-base text-[#D5D5D6]">
                    {data.Position}
                </motion.p>
                <motion.h1
                    className="text-2xl leading-6 text-white line-clamp-2"
                >
                    {data.Name}
                </motion.h1>
            </motion.div>
        </motion.div>
    </motion.div>
}

export default TeamCard