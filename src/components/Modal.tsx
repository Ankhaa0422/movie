import React from 'react'
import { AnimatePresence, filterProps, motion } from "framer-motion";
import { Icon } from ".";

interface Props {
    open:boolean;
    close:Function;
    title?:string|null;
    children:React.ReactNode[];
}

export default function Modal (props:Props) {
    const {open, close, title} = props
    const renderChild = () => {
        return React.Children.map(props.children, (child) => {
            return React.cloneElement(child as any, {
                close: close,
            });
        })
    }
    return <div>
        <AnimatePresence mode="wait">
            {   open && <div className="fixed left-0 top-0 w-full h-full z-[100000] flex justify-center items-center">
                    <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute w-full h-full bg-black bg-opacity-70 backdrop-blur" onClick={() => {close()}}/>
                    <motion.div className="w-fit h-fit min-h-[300px] min-w-[300px] p-2 flex flex-col rounded bg-[#1c1a27] z-[100001]" 
                        initial={{opacity: 0, scale: 0}} 
                        animate={{opacity: 1, scale: 1}} 
                        exit={{opacity: 0, scale: 0}}
                        transition={{type: 'tween'}}
                    >
                        <div className="w-full flex flex-row h-[40px] border-b-fuchsia-950 items-center justify-between">
                            <div className="text-lg font-semibold">{title}</div>
                            <button className="p-1 hover:bg-[#2c2137] rounded transition-all" onClick={() => {close()}}>
                                <Icon icon="solar:close-square-broken" size="1.8rem"/>
                            </button>
                        </div>
                        <div className="w-full h-fit">
                            {renderChild()}
                        </div>
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    </div>
}