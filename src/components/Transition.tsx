
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
interface Props {
    children: React.ReactNode;
    layout?: boolean;
    className?: string;
    direction?: 'left' | 'right' | 'up' | 'down' | 'none';
    outDirection?: 'left' | 'right' | 'up' | 'down' | 'none';
    distance?: number;
    durationIn?: number;
    durationOut?: number;
}

const Transition = (props: Props) => {
    const router = usePathname()
    const {
        children,
        layout = false,
        className,
        direction = 'none',
        distance = 200,
        durationIn,
        durationOut,
    } = props;
    const directions = {
        left: { x: -distance },
        right: { x: distance },
        up: { y: -distance },
        down: { y: distance },
        none: { x: 0, y: 0 },
    };
    const transitionIn = {
        type: 'tweet',
        duration: durationIn,
    };
    const animationConfig = {
        in: {
            opacity: 0,
            ...directions[direction],
        },
        animate: {
            opacity: 1,
            ...directions.none,
            transition: {
                x: transitionIn,
                y: transitionIn,
            },
        },
        out: {
            opacity: 0,
            ...directions[direction],
            transition: {
                type: 'just',
                duration: durationOut,
            },
        },
    };

    return (
            <motion.div
                layout={layout}
                key={router}
                className={className}
                variants={animationConfig}
                initial="in"
                animate="animate"
                exit="out"
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {children}
            </motion.div >
    );
}

export default Transition;