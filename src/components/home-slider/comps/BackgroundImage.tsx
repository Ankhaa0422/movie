import React from "react";
import { motion } from "framer-motion";
import { CurrentSlideData, Data } from '@/utility/interfaceAndTypes';

type Props = {
  transitionData: any;
  currentSlideData: CurrentSlideData;
  dataList: any[]
};

function BackgroundImage({ transitionData, currentSlideData, dataList }: Props) {
  return (
    <>
        <motion.img
          key={dataList[0].Images[0]}
          layoutId={dataList[0].Images[0]}
          alt="Transition Image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className=" absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={dataList[0].Images[0]}
        />
      <motion.img
        alt="Current Image"
        key={dataList[1]?.Images[0] + "transition"}
        src={dataList[1]?.Images[0]}
        className=" absolute left-0 top-0 h-full w-full object-cover brightness-50"
      />
    </>
  );
}

export default BackgroundImage;