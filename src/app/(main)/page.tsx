'use client'
// import React from 'react'
// import '../../assets/home.scss'
// import { Transition } from '@/components'
// import HomeCard from './HomeCard'
// import { cycleArray } from '@/utility'
import zurag1 from '../../../public/images/zurag1.jpg'
import zurag2 from '../../../public/images/zurag2.png'
import zurag3 from '../../../public/images/zurag3.jpg'
import zurag4 from '../../../public/images/zurag4.jpg'
// import { AnimatePresence, LayoutGroup } from 'framer-motion'
// interface Film {
//     id: string,
//     name: string,
//     bg: string
// }
// const cardDuration = 3;
// const dummy = [
//     {
//         id: "zurag1",
//         name: 'test0',
//         bg: zurag1.src
//     },
//     {
//         id: "zurag2",
//         name: 'test1',
//         bg: zurag2.src
//     },
//     {
//         id: "zurag3",
//         name: 'test2',
//         bg: zurag3.src
//     },
//     {
//         id: "zurag4",
//         name: 'test3',
//         bg: zurag4.src
//     }
// ]

// export default function Home() {
//     const [films, setFilms] = React.useState<Film[]>()
//     const ref = React.useRef<HTMLInputElement|undefined>()
//     const [big, setBig] = React.useState<Number>(0)
//     React.useEffect(() => {
//         let interval: NodeJS.Timer | any = undefined
//         setFilms(dummy)
//         // interval = setInterval(() => {
//         //     setFilms(films => cycleArray(films as Film[]) as Film[]);
//         // }, cardDuration * 1000)
//         // return () => clearInterval(interval)
//     }, [])
//     console.log(big)

//     const rotate = (index:number) => {
//         setFilms(films => cycleArray(films as Film[]) as Film[]);
//         // setBig(index)
//     }



//     return (
//         <Transition className='Home' direction='up'>
//             {
//                 films ? <Transition className='Grid'>
//                         {
//                             films.map(({id, bg, name}, i) => {
//                                 return <HomeCard key={i} id={id} index={i} image={bg} name={name} duration={cardDuration} big={i === 0} rotate={rotate}/>
//                             })
//                         }
//                 </Transition> : <div className='text-neutral-200'>...loading</div>
//             }
//         </Transition>
//     )
// }

import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from '@/components/Controls'
const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main className={`relative h-fit select-none overflow-hidden text-white antialiased`}>
        <div className='max-h-screen min-h-screen h-screen relative'>
            <AnimatePresence>
                <BackgroundImage
                transitionData={transitionData}
                currentSlideData={currentSlideData}
                />
                <div className="  absolute z-20  h-full w-full">
                <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
                    <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                    <SlideInfo
                        transitionData={transitionData}
                        currentSlideData={currentSlideData}
                    />
                    </div>
                    <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                    <Slides data={data} />
                    <Controls
                        currentSlideData={currentSlideData}
                        data={data}
                        transitionData={transitionData}
                        initData={initData}
                        handleData={setData}
                        handleTransitionData={setTransitionData}
                        handleCurrentSlideData={setCurrentSlideData}
                        sliderData={sliderData}
                    />
                    </div>
                </div>
                </div>
            </AnimatePresence>
        </div>
        <div className='h-[300vh]'>

        </div>
    </main>
  );
}

const sliderData = [
  {
    img: zurag1.src,
    location: "Switzrerland Apls",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "SAINT ANTÖNEN",
  },
  {
    img: zurag2.src,
    title: "The Grand Canyon",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: zurag3.src,
    title: "Masai Mara",
    description:
      "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: zurag4.src,
    title: "Angkor Wat",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
];

const initData = sliderData[0];