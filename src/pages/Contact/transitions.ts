import { Variants } from 'framer-motion'
import { transition } from '../../animation'

const variants = {
    decoratedLine: {
        hidden: {
            width: 0,
            transition: transition,
        },
        show: {
            width: '100%',
            transition: {
                duration: 0.7,
                delay: 0.3,
            },
        },
    },
    top: (delay: number): Variants => ({
        hidden: {
            y: 50,
            opacity: 0,
            transition: transition,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                ...transition,
                duration: 0.7,
                delay: delay,
            },
        },
    }),
    bottom: {
        show: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 1.4,
            },
        },
        hidden: {
            transition: transition,
        },
    },
    bottomItem: {
        hidden: {
            y: -30,
            opacity: 0,
            transition: transition,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                ...transition,
                duration: 0.3,
            },
        }
    }

};

export default variants;