import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@/components";

type Props = {
  data: any;
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

function OtherInfo({ data }: Props) {
  return (
    <motion.div initial="hidden" animate={"visible"} className=" flex flex-col">
      <AnimatedText
        className=" spacing overflow-hidden text-[#D5D5D6]"
        data={data?.Type}
      />
      <AnimatedText
        className=" my-1 text-2xl font-semibold md:my-3 md:text-5xl md:leading-[100px]"
        data={data?.Title}
      />
      <AnimatedText
        className=" text-base text-[#D5D5D6]"
        data={data?.Plot}
      />
      <div
          style={{
              overflow: "hidden",
              display: "inline-block",
          }}
          className="mt-5"
      >
        <motion.button variants={item} key={data}
          whileHover={{
            background: 'rgb(225 29 72)',
            color: '#fff',
            border: '1px solid transparent'
          }}
          style={{
            background: 'transparent',
            color: '#fff',
            border: '1px solid white'
          }}
          className="w-fit rounded flex flex-row hover:bg-rose-600 px-6 py-1 font-medium items-center justify-center gap-2"
        >
          <Icon icon="mdi:youtube" size="1.4rem"/>
            Trailer
        </motion.button>
      </div>
    </motion.div>
  );
}

export default OtherInfo;

const AnimatedText = ({ data, className }: { data?: string; className?: string}) => {
    return (
      <span
          style={{
              overflow: "hidden",
              display: "inline-block",
          }}
      >
          <motion.p className={` ${className}`} variants={item} key={data}>
              {data}
          </motion.p>
      </span>
    );
};