'use client'
import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cycleArray } from "@/utility"
export default function SliderTwo({
    data
}:{data:any[]}) {
    const [activeData, setActiveData] = React.useState<any>({
        data: data[0],
        index: 0,
    })
    const [sliderDatas, setSliderDatas] = React.useState(data)
    const divOnClick = () => {
        const array = cycleArray(sliderDatas)
        setSliderDatas(array)
    }

    const changeActiveData = () => {
        const index = activeData.index
        setActiveData(undefined)
        chooseData(index)
    }

    function chooseData (index:number) {
        const qweqwe:any = {
            data: data[index >= data.length - 1 ? 0 : index + 1],
            index: index >= data.length - 1 ? 0 : index + 1
        }
        setActiveData(qweqwe)
    }

    return <div className="w-screen h-screen bg-cyan-600 relative">
        <motion.div className="absolute w-full h-full">
            <AnimatePresence mode="wait">
                { activeData && <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} style={{backgroundImage: `url("${activeData.data.Images[0]}")`}} className="absolute w-full h-full object-cover"/>}
            </AnimatePresence>
        </motion.div>
        <div className="absolute z-10 bottom-10 right-10 flex flex-row gap-2">
            <div className="bg-cyan-400 rounded p-3 cursor-pointer" onClick={changeActiveData}>{'<'}</div>
            <div className="bg-cyan-400 rounded p-3 cursor-pointer" onClick={changeActiveData}>{'>'}</div>
        </div>
    </div>
}

