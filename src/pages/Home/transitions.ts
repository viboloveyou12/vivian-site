import { Variants } from 'framer-motion';

const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] }

const variants = {
    title: (delay: number): Variants => ({
        initial: {
            y: 0,
        },
        animate: {
            y: 0,
            transition: {
                delayChildren: delay,
                staggerChildren: 0.04,
                staggerDirection: 1,
            },
        },
    }),
    letter: {
        initial: {
            y: 400,
            transition: transition,
        },
        animate: {
            y: 0,
            transition: transition,
        },
    },
    navContainer: {
        show: {
            transition: {
                delay: 1,
                staggerChildren: 0.2,
            },
        },
        hidden: {
            transition: {
                delay: 1,
                staggerChildren: 0.2,
            },
        },
    },
    navItem: {
        hidden: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: [0.43, 0.13, 0.23, 0.96],
            },
        },
    }

};

export default variants;