import { ReactNode } from 'react';
import { motion, Variants } from "framer-motion";
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import './style.scss';
import Star from '../img/star.svg';
// import { MouseContext } from '../context/cursorContext';
// import { useContext } from "react";
import { transition, slideIn } from '../animation';
import { externalUrls } from "../constant";

const MotionLink = motion(Link);

const layout: Variants = {
    initial: {
        backgroundColor: '#EAE4DF',
        transition: {
            delay: .5,
            ...transition
        },
    },
    animate: {
        transition: transition,
        backgroundColor: '#000000'
    }
}

const navContainer: Variants = {
    initial: {
        transition: {
            delay: 1,
            staggerChildren: 0.2,
            staggerDirection: 1,
        }
    },
    animate: {
        transition: {
            delay: 1,
            staggerChildren: 0.2,
            staggerDirection: -1,
        },
    },
}

const navItem: Variants = {
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
    
}

const decoratedLine: Variants = {
    initial: {
        width: 0,
        transition: transition
    },
    animate: {
        width: `calc(40vw - 150px)`,
        transition: transition
    }
}

const pages = ['Work', 'About', 'Contact'];
const media = [
    { name: "B", externalUrl: externalUrls.behance },
    { name: "G", externalUrl: externalUrls.github },
    { name: "L", externalUrl: externalUrls.linkedin },
];

interface Props {
    path?: string;
    children: ReactNode;
}

const MainLayout = ({ path = '', children }: Props ) => {
    // eslint-disable-next-line
    // const { cursorType, cursorChangeHandler } = useContext(MouseContext);

    const renderHeader = (path: string) => (
        path === '/' ? (
            <header className="layout-header">
                <div className="header-left">
                    <motion.div
                        variants={slideIn(50)}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                    >
                        Portfolio@2023
                    </motion.div>
                </div>
                <motion.div
                    className="header-nav"
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={navContainer}
                >
                    <motion.img src={Star} alt="header-icon" ></motion.img>
                    {pages.map((name, key) => (
                        <MotionLink 
                            to={`/${name.toLowerCase()}`}
                            key={`header-nav-${key}`}
                            variants={navItem}
                            // onMouseEnter={() => cursorChangeHandler("hovered")}
                            // onMouseLeave={() => cursorChangeHandler("")}
                        >
                            {name}
                        </MotionLink>
                    ))}
                </motion.div>
            </header>
        ) : (
            <header className="layout-header">
                <div className="header-left home-btn">
                    <MotionLink
                        to="/"
                        className="animated-arrow"
                        variants={slideIn()}
                        initial="initial"
                        animate="animate"
                        exit="initial"
                    >
                        <span className="the-arrow -left">
                            <span className="shaft"></span>
                        </span>
                        <span className="main">
                            <span className="text">Home</span>
                        </span>
                    </MotionLink>
                </div>
                <motion.div
                    className="header-media"
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={navContainer}
                >
                    <motion.div 
                        className="decorate-line"
                        variants={decoratedLine}
                    ></motion.div>
                    {media.map(({name, externalUrl}) => (
                        <motion.a 
                            className="header-media"
                            target="_blank"
                            href={externalUrl}
                            rel="noopener noreferrer"
                            key={name}
                            variants={navItem}
                        >
                            {name}
                        </motion.a>
                    ))}
                </motion.div>
            </header>
        )
    )

    return (
        <motion.div 
            className={`layout ${path === '/contact' && 'white-content'}`}
            {...(path === '/contact' && { variants: layout })}
            transition={transition}
            animate="animate"
            initial="initial"
            exit="initial"
        >
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={transition}
                className="canvasContainer"
            >
                <Canvas path={path}/>
            </motion.div>
            {renderHeader(path)}
            {children}
        </motion.div>
    )
}

export default MainLayout;