import React from "react";
import { motion } from "framer-motion";
import { defaultZurgiinKhemjeegeerHeightBodyo } from "@/utility";
import { useViewportSize } from "@mantine/hooks";

type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
    const [hover, setHover] = React.useState(false)
    const { height, width } = useViewportSize();
    const returnWidth = () => {
        if(1024 > width && width >= 768 ) {
            return 180
        } else if (width >= 1024) {
            return 208
        } else {
            return 150
        }
    }

    return (
        <motion.div
            className=" relative rounded shadow-md w-[150px] md:w-[180px] min-w-[150px] lg:w-[208px] cursor-pointer overflow-hidden"
            layout
            style={{
                height: defaultZurgiinKhemjeegeerHeightBodyo(returnWidth())
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 0.4,
                },
            }}
            exit={{ scale: 0.8, opacity: 0 }}
            onHoverStart={() => {setHover(true)}}
            onHoverEnd={() => {setHover(false)}}
            transition={{
                type: "spring",
                damping: 20,
                stiffness: 100,
            }}
        >
            <motion.img
              layoutId={data.img}
              alt="Transition Image"
              src={data.img}
              animate={{scale: hover ? 1.05 : 1}}
              transition={{duration:0.3}}
              className=" absolute h-full w-full rounded object-cover brightness-75"
            />
            <motion.img
              layoutId={data.Poster}
              alt="Transition Image"
              src={data.Poster}
              animate={{scale: hover ? 1.05 : 1}}
              transition={{duration:0.3}}
              className=" absolute h-full w-full  rounded  object-cover brightness-75 "
            />
            <motion.div className=" absolute z-10 flex h-full items-end p-4 bg-gradient-to-t from-black to-transparent w-full">
                <motion.div>
                    <motion.div
                        layout
                        className=" mb-2 h-[2px] w-10 rounded-full bg-white"
                    ></motion.div>
                    <motion.p layoutId={data.location} className="text-xs text-[#D5D5D6]">
                        {data.Type}
                    </motion.p>
                    <motion.h1
                        layoutId={data.Title}
                        className="text-base leading-6 text-white"
                    >
                        {data.Title}
                    </motion.h1>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default SliderCard;