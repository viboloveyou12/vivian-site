import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import './style.scss';
import Star from '../img/star.svg';
import { MouseContext } from '../context/cursorContext';
import { useContext } from "react";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96 ]}
const mediaHoverTransition = {
    scale: [1, 1.3, 1.2, 1],
    transition: { duration: .3 },
}

const MainLayout = ({ path = '', children }) => {
    const { cursorType, cursorChangeHandler } = useContext(MouseContext);
    const pages = ['Work', 'About', 'Contact'];

    const renderHeader = (path) => (
        path === '/home' ? (
            <header className="layout-header">
                <div className="header-left">Protfolio@2023</div>
                <div className="header-nav">
                    <img src={Star} alt="header-icon"></img>
                    {pages.map((name, key) => (
                        <Link
                            to={`/${name.toLowerCase()}`}
                            key={name+key}
                            // onMouseEnter={() => cursorChangeHandler("hovered")}
                            // onMouseLeave={() => cursorChangeHandler("")}
                        >
                            {name}
                        </Link>
                    ))}
                </div>
            </header>
        ) : (
            <header className="layout-header">
                <div className="header-left home-btn">
                    <Link to="/home" className="animated-arrow">
                        <span className="the-arrow -left">
                            <span className="shaft"></span>
                        </span>
                        <span className="main">
                            <span className="text">Home</span>
                        </span>
                    </Link>
                </div>
                <div className="header-media">
                    <div className="decorate-line"></div>
                    <a className="header-media" href="#">
                        B
                    </a>
                    <a className="header-media" href="#">
                        G
                    </a>
                    <a className="header-media" href="#">
                        L
                    </a>
                </div>
            </header>
        )
    )

    return (
        <motion.div 
            className={`layout ${path === '/contact' ? 'white-content' : ''}`}
            exit={{ opacity: 0}}
            transition={transition}
        >
            <Canvas path={path}/>
            {renderHeader(path)}
            {children}
        </motion.div>
    )
}

export default MainLayout;