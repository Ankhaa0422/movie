'use client'
import React from 'react'
import BackgroundImage from "./comps/BackgroundImage";
import Slides from "./comps/Slides";
import SlideInfo from "./comps/SlideInfo";
import Controls from './comps/Controls'
import { AnimatePresence, motion } from 'framer-motion'
import { CurrentSlideData, Data } from '@/utility/interfaceAndTypes';
interface Props {
    sliderData:any[],
    initData:any
}

function HomeSlider ({sliderData, initData}:Props) {
    const [data, setData] = React.useState<any[]>(sliderData);
    const [transitionData, setTransitionData] = React.useState<Data>(
      sliderData[0]
    );
    const [currentSlideData, setCurrentSlideData] =
      React.useState<CurrentSlideData>({
        data: initData,
        index: 0,
      });

    return <div className='max-h-screen min-h-screen h-screen relative'>
        <AnimatePresence>
            <BackgroundImage
                key={'test'}
                dataList={data}
                transitionData={transitionData}
                currentSlideData={currentSlideData}
            />
            <motion.div key={'test2'} className='bg-gradient-to-t from-[#1c1a27] from-0% via-transparent via-40% to-transparent absolute w-full h-full z-10 bg-opacity-20'/>
            <motion.div key={'test3'} className="absolute z-20  h-full w-full">
                <div className=" flex h-full w-full flex-col md:flex-row">
                    <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                        <SlideInfo
                            transitionData={transitionData}
                            currentSlideData={currentSlideData}
                            dataList={data}
                        />
                    </div>
                    <div className="col-span-3 flex h-full flex-1 flex-col justify-end p-4">
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
            </motion.div>
        </AnimatePresence>
    </div>    
}

export default HomeSlider