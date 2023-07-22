import {Variants} from "framer-motion";

export const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
}

export const slideIn = (y = 0) => ({
    initial: {
        y: y,
        opacity: 0,
        transition: transition,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            ...transition,
        },
    },
})
