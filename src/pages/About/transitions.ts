import { Variants } from 'framer-motion';
import { transition } from '../../animation';

const variants = {
    container: (delay: number): Variants => ({
        animate: {
            transition: {
                delayChildren: delay,
                staggerChildren: 0.01,
                staggerDirection: 1,
            },
        },
    }),
    letterItem: {
        initial: {
            y: 300,
            transition: transition,
        },
        animate: {
            y: 0,
            transition: transition,
        },
    },
    skillItem: {
        initial: {
            y: 50,
            opacity: 0,
            transition: transition,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: transition,
        },
    },
    wording: (delay: number): Variants => ({
        initial: {
            y: 100,
            opacity: 0,
            transition: transition,
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: { delay: delay, ...transition },
        },
    }),
    image: {
        initial: {
            clipPath: 'inset(350px 0px 0 0)',
            opacity: 0,
            transition: transition,
        },
        animate: {
            clipPath: 'inset(0px 0px 0 0)',
            opacity: 1,
            transition: { delay: 0.5, ...transition },
        }
    }
};

export default variants;