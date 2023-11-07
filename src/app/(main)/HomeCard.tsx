'use client'
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion'
// import { BackgroundImage } from 'react-image-and-background-image-fade'
import Image from 'next/image'
interface Props {
    index: number,
    name: string,
    duration: number,
    big: boolean,
    image: string,
    key: number,
    id: string,
    rotate: Function,
}

function HomeCard ({ name, duration, image, big = false, id, rotate, index }:Props) {
    console.log("image ===>", id, big)
    return (
        <motion.div 
            id={`home-carousel-${id}`}
            layout
            layoutId={`home-carousel-${id}`}
            className={`HomeCard ${big ? 'Big' : ''} !relative`}
            initial={{opacity: 0}}
            animate={{ opacity: 1, borderRadius: '10px' }}
            style={{borderRadius: '5px !important'}}
            whileHover={{ scale: big ? 1 : 1.025 }}
            whileTap={{ scale: 0.975 }}
            transition={{
                layout: { type: 'spring', stiffness: 30 },
                scale: { duration: 0.15 },
            }}
            onClick={() => {rotate(index)}}
        >
            {/* <BackgroundImage
                className="BackgroundImage"
                wrapperClassName="Wrapper"
                src={image}
                transitionTime="1s"
                isResponsive
            > */}
                <motion.div className='BackgroundImage' layoutId={`home-carousel-image-${id}`} style={{backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition:'fixed'}}/>
                <motion.div className='Overlay'>
                    <AnimatePresence mode='wait'>
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {name}
                        </motion.h3>
                        {/* {
                            big && <motion.div
                                key={`progress-${id}`}
                                className="ProgressBar"
                                initial={{ width: 0 }}
                                animate={{ width: '100%', transition: { duration } }}
                                exit={{ opacity: 0 }}
                            />
                        } */}
                    </AnimatePresence>
                </motion.div>
            {/* </BackgroundImage> */}
        </motion.div>
    )
}

export default HomeCard