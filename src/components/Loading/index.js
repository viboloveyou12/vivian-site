import './style.scss';
import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loading = ({props}) => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const [hideAnimation, setHideAnimation] = useState(false);
    return (
        <>
            { !hideAnimation && <motion.div className="svgClass">
                <svg>
                    <defs>
                        <mask id="mask">
                            <rect fill="white" x="0" y="0" width="100%" height="100%" fill-opacity="1" />
                            <g id="star" data-name="Layer 1" transform={`translate(${(windowSize.current[0]/2) - 25}, ${(windowSize.current[1]/2) - 25})`}>
                                <AnimatePresence mode="wait">
                                <motion.path 
                                    onAnimationComplete={() => setHideAnimation(true)}
                                    key={props.key}
                                    animate={props.animate}
                                    exit={props.exit}
                                    transition={props.transition}
                                    initial={props.initial}
                                    className="cls-1" 
                                    d="M25,45.14l-.31-3A18.86,18.86,0,0,0,7.9,25.4l-3-.31,3-.31A18.85,18.85,0,0,0,24.68,8L25,5.05l.31,3A18.85,18.85,0,0,0,42.08,24.78l3,.31-3,.31A18.86,18.86,0,0,0,25.3,42.18Z"
                                >

                                </motion.path>
                                </AnimatePresence>
                            </g>
                        </mask>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="black" mask="url(#mask)"/>
                </svg>
            </motion.div>}
        </>
    )
}

export default Loading;
