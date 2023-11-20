import React from "react";
import Progress from "./Progress";
import { CurrentSlideData, Data } from '@/utility/interfaceAndTypes';
import { Icon } from "@/components";

type Props = {
    currentSlideData: CurrentSlideData;
    sliderData: any[];
    data: any[];
    transitionData: any;
    handleData: React.Dispatch<React.SetStateAction<any[]>>;
    handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
    handleCurrentSlideData: React.Dispatch<React.SetStateAction<CurrentSlideData>>;
    initData: any;
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
        <div className="flex lg:min-w-[705px] lg:w-[705px] lg:max-w-[705px] items-center gap-3 px-0 py-3 md:px-1 md:py-5">
            <SliderButton handleClick={handlePrev} isLeft={true}>
                <span className=" text-xl" > <Icon icon="ep:arrow-left-bold" /> </span>
            </SliderButton>
            <SliderButton handleClick={handleNext} isLeft={false}>
                <span className=" text-xl" > <Icon icon="ep:arrow-right-bold" /> </span>
            </SliderButton>
            <Progress curIndex={currentSlideData.index} length={sliderData.length} />
        </div>
    );
}

export default Controls;

const SliderButton = ({ children, handleClick, isLeft = false}:{ children: React.ReactNode; handleClick: () => void; isLeft: Boolean }) => {
    return (
        <button
            data-cursor-size='80px'
            data-cursor-text={isLeft ? 'Previous' : 'Next'}
            data-cursor-textColor={'#000'}
            data-cursor-color='#ffffffaa'
            data-cursor-backdropBlur="4px"
            className=" flex h-14 w-14 items-center justify-center rounded-full border-[1px] border-[#fdfdfd5f] transition duration-300 ease-in-out hover:bg-white hover:text-black cursor-none"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};