import { transition } from '../animation';

const variants = {
    navContainer: {
        initial: {
            transition: {
                staggerChildren: 0.2,
                staggerDirection: 1,
            }
        },
        animate: {
            transition: {
                delay: .5,
                staggerChildren: 0.2,
                staggerDirection: -1,
            },
        }
    },
    navItem: {
        initial: {
            y: 50,
            opacity: 0,
            transition: transition
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: transition
        },
    },
    decoratedLine: {
        initial: {
            width: 0,
            transition: transition
        },
        animate: {
            width: `calc(40vw - 150px)`,
            transition: transition
        }
    }
};

export default variants;