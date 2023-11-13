import React from "react";
import { motion } from "framer-motion";
import { defaultZurgiinKhemjeegeerHeightBodyo } from "@/utility";
type Props = {
  data: any;
};

function SliderCard({ data }: Props) {
    const [hover, setHover] = React.useState(false)
    return (
        <motion.div
            className=" relative rounded shadow-md w-[150px] min-w-[150px] max-w-[150px] cursor-pointer overflow-hidden"
            layout
            style={{
                height: defaultZurgiinKhemjeegeerHeightBodyo(150)
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
              className=" absolute h-full w-full  rounded  object-cover brightness-75 "
            />
            <motion.div className=" absolute z-10 flex h-full items-end p-4 bg-gradient-to-t from-black to-transparent w-full">
                <motion.div>
                    <motion.div
                        layout
                        className=" mb-2 h-[2px] w-10 rounded-full bg-white"
                    ></motion.div>
                    <motion.p layoutId={data.location} className="text-xs text-[#D5D5D6]">
                        {data.location}
                    </motion.p>
                    <motion.h1
                        layoutId={data.title}
                        className="text-base leading-6 text-white"
                    >
                        {data.title}
                    </motion.h1>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default SliderCard;