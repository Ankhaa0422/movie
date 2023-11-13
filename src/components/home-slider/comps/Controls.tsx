import React from "react";
import Progress from "./Progress";
import { CurrentSlideData, Data } from '@/utility/interfaceAndTypes';
import { Icon } from "@/components";

type Props = {
    currentSlideData: CurrentSlideData;
    sliderData: Data[];
    data: Data[];
    transitionData: Data;
    handleData: React.Dispatch<React.SetStateAction<Data[]>>;
    handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
    handleCurrentSlideData: React.Dispatch<React.SetStateAction<CurrentSlideData>>;
    initData: Data;
};

let interval:any = undefined

function Controls({sliderData, data, transitionData, currentSlideData, handleData, handleTransitionData, handleCurrentSlideData, initData}:Props) {

    function sliderInterval () {
        clearInterval(interval)
        interval = setInterval(() => {
            handleNext()
        }, 4000)
    }

    sliderInterval()

    const handlePrev = () => {
        handleData((prevData) => [
            transitionData ? transitionData : initData,
            ...prevData.slice(0, prevData.length - 1),
        ]);
        handleCurrentSlideData({
            data: transitionData ? transitionData : sliderData[0],
            index: sliderData.findIndex(
              (ele) => ele.img === data[data.length - 1].img
            ),
        });
        handleTransitionData(data[data.length - 1]);
        sliderInterval()
    };

    const handleNext = () => {
        handleData((prev) => prev.slice(1));
        handleCurrentSlideData({
            data: transitionData ? transitionData : initData,
            index: sliderData.findIndex((ele) => ele.img === data[0].img),
        });
        handleTransitionData(data[0]);
        setTimeout(() => {
            handleData((newData) => [
                ...newData,
                transitionData ? transitionData : initData,
            ]);
        }, 500);
        sliderInterval()
    };

    return (
        <div className="flex items-center gap-3 px-0 py-3 md:px-1 md:py-5">
            <SliderButton handleClick={handlePrev}>
                <span className=" text-xl" > <Icon icon="ep:arrow-left-bold" /> </span>
            </SliderButton>
            <SliderButton handleClick={handleNext}>
                <span className=" text-xl" > <Icon icon="ep:arrow-right-bold" /> </span>
            </SliderButton>
            <Progress curIndex={currentSlideData.index} length={sliderData.length} />
        </div>
    );
}

export default Controls;

const SliderButton = ({ children, handleClick}:{ children: React.ReactNode; handleClick: () => void }) => {
    return (
        <button
            className=" flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};