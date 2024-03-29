import { ReactNode } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import './style.scss';
import Star from '../img/star.svg';
import { MouseContext } from '../context/cursorContext';
import { useContext } from "react";
import { slideIn, transition } from '../animation';
import { socialMediaInfo } from "../constant";
import variants from './transition';

export const pages = ['Work', 'Project', 'About', 'Contact'];

const MotionLink = motion(Link);

interface Props {
    path?: string;
    children: ReactNode;
}

const MainLayout = ({ path = '', children }: Props ) => {
    const { cursorChangeHandler } = useContext(MouseContext);
    const { behance, github, linkedin } = socialMediaInfo; 

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
                        VivianYang@2024
                    </motion.div>
                </div>
                <motion.div
                    className="header-nav"
                    initial="initial"
                    animate="animate"
                    exit="initial"
                    variants={variants.navContainer}
                >
                    <motion.img
                        src={Star}
                        alt="header-icon"
                        variants={variants.navItem}
                    ></motion.img>
                    {pages.map((name, key) => (
                        <MotionLink 
                            to={`/${name.toLowerCase()}`}
                            key={`header-nav-${key}`}
                            variants={variants.navItem}
                            className='pseudo-text-effect'
                            data-after={name}
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                        >
                            <span>{name}</span>
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
                        onMouseEnter={() => cursorChangeHandler("hovered")}
                        onMouseLeave={() => cursorChangeHandler("")}
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
                    variants={variants.navContainer}
                >
                    <motion.div 
                        className="decorate-line"
                        variants={variants.decoratedLine}
                    ></motion.div>
                    {[behance, github, linkedin].map(({url, title}) => (
                        <motion.a 
                            className="header-media"
                            target="_blank"
                            href={url}
                            rel="noopener noreferrer"
                            key={title}
                            variants={variants.navItem}
                            onMouseEnter={() => cursorChangeHandler("hovered")}
                            onMouseLeave={() => cursorChangeHandler("")}
                        >
                            {title[0].toUpperCase()}
                        </motion.a>
                    ))}
                </motion.div>
            </header>
        )
    )

    return (
        <motion.div className={`layout ${path === '/contact' && 'white-content'}`}>
            <motion.div
                animate={{ opacity: 1, transition: { delay: .5, ...transition } }}
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