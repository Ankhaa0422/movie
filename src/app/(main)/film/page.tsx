/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React from 'react'
import { omdbApiCall, deepClone, isNullOrUndefined } from '@/utility'
import { FilmCard, Transition, Icon } from '@/components'
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
let dummyJagsaalt:any[] = []
export default function Page() {
    const qwerty = ['tt13876842', 'tt15529074', 'tt1799631', 'tt0388629', 'tt13293588', 'tt21209876', 'tt2098220', 'tt9054364']
    const [state, setState] = React.useState<any[]>([])
    const mountRef = React.useRef(false)
    const params = useSearchParams()

    React.useEffect(() => {
        if(!mountRef.current) {
            mountRef.current = true
            dummyJagsaalt = []
            test(0)
        }
    }, [])
    
    function test (index:number) {
        if(index < qwerty.length) {
            omdbApiCall(qwerty[index]).then((result:any) => {
                const cloneResult = deepClone(result)
                dummyJagsaalt.push(cloneResult)
            }).finally(() => {
              test(index + 1)
            })
        } else {
          setState(dummyJagsaalt)
        }
    }

    const tabs = [
        {
            ner: 'All',
            khoch: 'All',
            icon: 'ic:outline-movie-filter'
        },
        {
            ner: 'In Theater',
            khoch: 'In Theater',
            icon: 'bx:camera-movie'
        },
        {
            ner: 'Upcoming',
            khoch: 'Upcoming',
            icon: 'ic:outline-movie-filter'
        },
        {
            ner: 'On stream',
            khoch: 'On stream',
            icon: 'ic:outline-movie-filter'
        },
    ]

    return <Transition direction='left'>
            <div className="container mt-24 mx-auto w-full flex flex-col justify-center px-5 gap-5">
                <div className='w-full bg-[#212531] rounded flex flex-col p-2 px-6 select-none'>
                    <div className='flex flex-row items-center w-full gap-2'>
                            {
                                tabs.map((x, i) => {
                                    return <Link key={i} href={x.ner === 'All'? "?" : `?status=${x.ner}`}>
                                        <motion.div
                                            initial={false} 
                                            className='text-[1.5rem] relative cursor-pointer px-4 ease-out py-1 gap-2 flex flex-row items-center text-[#333333] hover:text-[#555555] dark:text-gray-100 dark:hover:text-gray-300 transition-all'
                                        >
                                            <Icon icon={x.icon} className='z-10'/>
                                            <span className='text-base z-10 '>{x.ner}</span>
                                            <AnimatePresence>
                                                {(isNullOrUndefined(params.get('status') ) ? 'All' === x.khoch : params.get('status') === x.khoch) && <motion.div transition={{duration: 0.2}} className='absolute rounded z-[5] bg-[#343845] left-0 w-full h-full top-0' layoutId='filmtype' /> }
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
                            return <FilmCard data={x} key={i}/>
                        })
                    }
                </div>
            </div>
        </Transition>
} 