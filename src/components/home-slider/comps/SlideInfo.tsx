import React from "react";
import { motion } from "framer-motion";
import OtherInfo from "./OtherInfo";
import { CurrentSlideData, Data } from '@/utility/interfaceAndTypes';

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
  dataList: any[]
};
const item = {
    hidden: {
      y: "100%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
};

function SlideInfo({ transitionData, currentSlideData, dataList }: Props) {
    return (
        <>
            <motion.span layout className=" mb-2 h-1 w-5 rounded bg-white" />
            <OtherInfo data={dataList[0]}/>
            {/* <motion.div layout className=" mt-5 flex items-center gap-3">
                
            </motion.div> */}
        </>
    );
}

export default SlideInfo;