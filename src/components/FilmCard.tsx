'use client'
import React from 'react'
import { motion } from "framer-motion"
import { defaultZurgiinKhemjeegeerHeightBodyo } from '@/utility'
import { useRouter } from 'next/navigation'
function FilmCard ({data}:{data:any}) {

    const [hover, setHover] = React.useState(false)
    const cardRef = React.useRef<HTMLDivElement|null>(null)
    const router = useRouter()
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
        id={data.imdbID}
        ref={cardRef}
        className="relative rounded shadow-md w-full cursor-pointer overflow-hidden"
        layout
        initial={false}
        onHoverStart={() => {setHover(true)}}
        onHoverEnd={() => {setHover(false)}}
        transition={{
            type: "spring",
            duration: 0.2
        }}
        onClick={() => {
            router.push(`/film/${data.id}`)
        }}
    >
        <motion.img
            alt="Transition Image"
            src={data.img}
            animate={{scale: hover ? 1.05 : 1}}
            transition={{duration:0.3}}
            className=" absolute h-full w-full rounded-sm object-cover brightness-75"
        />
        <motion.img
            alt="Poster Image"
            src={data.Poster}
            layoutId={`${data?.id}-Poster`}
            initial={{backdropFilter: 'blur(4px)'}}
            animate={{scale: hover ? 1.05 : 1}}
            transition={{duration:0.3}}
            className=" absolute h-full w-full  rounded-sm  object-cover brightness-75 "
        />
        <div className="absolute p-1 top-1 left-1 bg-gray-800 text-gray-100 bg-opacity-70 backdrop-blur-md z-[80] text-xs rounded-sm">
            {data['Rated']}
        </div>
        <motion.div 
            className="absolute z-10 flex h-full items-end p-4 bg-gradient-to-t from-black to-transparent w-full" 
            initial={{backdropFilter: 'blur(10px)'}} 
            animate={{backdropFilter: 'blur(0px)'}} 
            exit={{backdropFilter: 'blur(10px)'}} 
            transition={{duration: 1}}
        >
            <motion.div>
                <motion.div
                    layout
                    className=" mb-2 h-[2px] w-10 rounded-full bg-white"
                ></motion.div>
                <motion.p className="text-xs text-[#D5D5D6]">
                    {data.Type}
                </motion.p>
                <motion.h1
                    className="text-base leading-6 text-white line-clamp-2"
                >
                    {data.Title}
                </motion.h1>
            </motion.div>
        </motion.div>
    </motion.div>
}

export default FilmCard