import { motion } from "framer-motion"
function AnimatedParagraph ({paragraph}:{paragraph:string}) {

    const defaultAnimation = {
        hidden: {
            opacity: 0,
            scale: 0
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    }

    return <motion.div variants={defaultAnimation} initial={'hidden'} animate={'visible'} transition={{staggerChildren:0.1}}>
        {
            paragraph.split("").map((char, i) => {
                return <motion.span key={i} variants={defaultAnimation}>
                    {char}
                </motion.span>
            })
        }
    </motion.div>
}

export default AnimatedParagraph