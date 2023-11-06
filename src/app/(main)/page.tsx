'use client'
import React from 'react'
import '../../assets/home.scss'
import { Transition } from '@/components'
import HomeCard from './HomeCard'
import { cycleArray } from '@/utility'
import zurag1 from '../../../public/images/zurag1.jpg'
import zurag2 from '../../../public/images/zurag2.png'
import zurag3 from '../../../public/images/zurag3.jpg'
import zurag4 from '../../../public/images/zurag4.jpg'
import { AnimatePresence, LayoutGroup } from 'framer-motion'
interface Film {
    id: string,
    name: string,
    bg: string
}
const cardDuration = 3;
const dummy = [
    {
        id: "zurag1",
        name: 'test0',
        bg: zurag1.src
    },
    {
        id: "zurag2",
        name: 'test1',
        bg: zurag2.src
    },
    {
        id: "zurag3",
        name: 'test2',
        bg: zurag3.src
    },
    {
        id: "zurag4",
        name: 'test3',
        bg: zurag4.src
    }
]

export default function Home() {
    const [films, setFilms] = React.useState<Film[]>()
    const ref = React.useRef<HTMLInputElement|undefined>()
    React.useEffect(() => {
        
        let interval: NodeJS.Timer;
        setFilms(dummy)
        interval = setInterval(() => {
            setFilms(films => cycleArray(films as Film[]) as Film[]);
        }, cardDuration * 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='Home'>
            {
                films ? <div className='Grid'>
                        {
                            films.map(({id, bg, name}, i) => {
                                return <HomeCard key={i} id={id} index={i} image={bg} name={name} duration={cardDuration} big={i === 0} />
                            })
                        }
                </div> : <div className='text-neutral-200'>...loading</div>
            }
        </div>
    )
}
