import { Variants } from 'framer-motion'
import { transition } from '../../animation'

const variants = {
    title: (delay: number): Variants => ({
        initial: {
            y: 0,
            transition: transition,
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: delay,
                staggerChildren: 0.05,
                staggerDirection: 1,
            },
        },
    }),
    wording: (delay = 0) => ({
        initial: {
            y: 400,
            opacity: 0,
            transition: transition,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 1 + delay,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    }),
    titleLetter: {
        initial: {
            y: 400,
            transition: transition,
        },
        animate: {
            y: 0,
            transition: {
                duration: 1.5,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        }
    }
}

export default variants;
