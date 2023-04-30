import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Canvas from '../components/Canvas';
import './style.scss';

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96 ]}
const mediaHoverTransition = {
    scale: [1, 1.3, 1.2, 1],
    transition: { duration: .3 },
}

const MainLayout = ({ path = '', children }) => {
    const renderHeader = (path) => (
        path === '/home' ? (
            <header className="layout-header">
                <div className="header-left">Protfolio@2023</div>
                <div className="header-nav">
                    <Link to="/work">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
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
            className="layout"
            exit={{ opacity: 0}}
            transition={transition}
        >
            <Canvas />
            {renderHeader(path)}
            {children}
        </motion.div>
    )
}

export default MainLayout;