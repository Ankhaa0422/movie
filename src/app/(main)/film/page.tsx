/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { omdbApiCall, deepClone, isNullOrUndefined } from '@/utility'
import { FilmCard, Transition, Icon, Cursor } from '@/components'
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { getFilmList } from '@/server-actions';
let dummyJagsaalt:any[] = []
export default function Page() {
    
    const [state, setState] = React.useState<any[]>([])
    const mountRef = React.useRef(false)
    const params = useSearchParams()
    const [open, setOpen] = React.useState(false)
    console.log(params.get('status'))
    React.useEffect(() => {
        async function getData() {
            const result:any[] = await getFilmList(params.get('status'))
            setState(result)
        }
        getData()
    }, [params])

    const tabs = [
        {
            ner: 'All',
            khoch: 'all',
            icon: 'ic:outline-movie-filter'
        },
        {
            ner: 'In Theater',
            khoch: 'intheater',
            icon: 'bx:camera-movie'
        },
        {
            ner: 'Upcoming',
            khoch: 'upcoming',
            icon: 'ic:outline-movie-filter'
        },
        {
            ner: 'On stream',
            khoch: 'onstream',
            icon: 'ic:outline-movie-filter'
        },
    ]

    return (
        // <Transition direction='left'>
        <>
            <Cursor isGelly/>
            <div className="container mt-24 mx-auto w-full flex flex-col justify-center px-5 gap-5">
                <div className='w-full bg-[#212531] rounded flex flex-col p-2 px-6 select-none'>
                    <div className='flex flex-row items-center w-full gap-2'>
                            {
                                tabs.map((x, i) => {
                                    return <Link key={i} href={x.ner === 'All' ? "/film" : `?status=${x.khoch}`} data-cursor-size={'70px'}>
                                        <motion.div
                                            initial={false} 
                                            className='text-[1.5rem] relative cursor-pointer px-4 ease-out py-1 gap-2 flex flex-row items-center text-[#333333] hover:text-[#555555] dark:text-gray-100 dark:hover:text-gray-300 transition-all'
                                        >
                                            <Icon icon={x.icon} className='z-10'/>
                                            <span className='text-base z-10 '>{x.ner}</span>
                                            <AnimatePresence>
                                                {(isNullOrUndefined(params.get('status') ) ? 'all' === x.khoch : params.get('status') === x.khoch) && <motion.div transition={{duration: 0.2}} className='absolute rounded z-[5] bg-[#343845] left-0 w-full h-full top-0' layoutId='filmtype' /> }
                                            </AnimatePresence>
                                        </motion.div>
                                    </Link>
                                })
                            }
                    </div>
                </div>
                <div className="grid grid-flow-row grid-cols-2 md:grid-cols-5 xl:grid-cols-7 gap-2 w-full justify-center mx-auto">
                    {
                        state.map((x, i) => {
                            return <div key={i} data-cursor-size='80px'
                                data-cursor-text={'View'}
                                data-cursor-textcolor={'#000'}
                                data-cursor-color='#ffffffaa'
                                data-cursor-backdropblur="4px"
                                className='cursor-none'
                            >
                                <FilmCard data={x}/>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
        // {/* </Transition> */}
    )
} 