import { transition } from '../../animation'

const variants = {
    basic: {
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
    decorateLink: {
        initial: {
            opacity: 0,
            transition: transition,
        },
        animate: {
            opacity: 1,
            transition: transition,
        },
        exit: {
            y: 50,
            opacity: 0,
            transition: transition,
        },
    },
    stagger: {
        animate: {
            transition: {
                staggerChildren: 0.1,
            },
        },
    }
};

export default variants;
