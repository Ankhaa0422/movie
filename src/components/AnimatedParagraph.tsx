import { motion } from "framer-motion"
function AnimatedParagraph ({paragraph}:{paragraph:string}) {

    const defaultAnimation = {
        hidden: {
            opacity: 0,
            y:200
        },
        visible: {
            opacity: 1,
            y:0
        }
    }

    return <div className="w-full h-fit overflow-hidden relative">
        <motion.div variants={defaultAnimation} className="h-fit overflow-hidden" initial={'hidden'} animate={'visible'} transition={{type:'tween'}}>
            {paragraph }
        </motion.div>
    </div>
}

export default AnimatedParagraph