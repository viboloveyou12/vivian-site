import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import MainLayout, {pages} from '../../layout/MainLayout';
import variants from './transitions';
import './style.scss';

const firstString = ["H", "i,", <>&nbsp;</>, "I’m", <>&nbsp;</>, "Vi", "vi", "an", <>&nbsp;</>, "Y", "an", "g", "."];
const secondString = ["A", <>&nbsp;</>, "F", "r", "o", "n", "t", "-", "en", "d", <>&nbsp;</>, "D", "e", "v", "e", "l", "o", "p", "er"];
const thirdString = ["b", "a", "s", "e", "d", <>&nbsp;</>, "in", <>&nbsp;</>, "L", "o", "n", "d", "o", "n", ",", <>&nbsp;</>, "U", "K", "."];

const MotionLink = motion(Link);

const Home: React.FC = () => {
  const h1 = useRef(null);

  useEffect(() => {
    document.body.classList.add('no-verticalScroll');
    return () => {
      document.body.classList.remove('no-verticalScroll');
    }
  }, []);

  return (
    <MainLayout path="/">
      <main
        className="home"
      >
        <div className="title-area">
          <motion.div
            className='title'
            initial='initial'
            animate='animate'
            exit="initial"
          >
            <motion.h1 
              variants={variants.title(0)}
            >
              {firstString.map((item, key) => (
                <motion.span variants={variants.letter} key={`first-${key}`}>{item}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.div
            className='title'
            initial='initial'
            animate='animate'
            exit="initial"
          >
            <motion.h1 variants={variants.title(.6)} ref={h1}>
              {secondString.map((item, key) => (
                <motion.span variants={variants.letter} key={`second-${key}`}>{item}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.div
            className='title'
            initial='initial'
            animate='animate'
            exit="initial"
          >
            <motion.h1 variants={variants.title(1.2)}>
              {thirdString.map((item, key) => (
                <motion.span variants={variants.letter} key={`third-${key}`}>{item}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.div 
            className="mobile-nav"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.navContainer}
          >
          {pages.map((name, key) => (
            <div className="mobileNavContainer" key={`mobile-nav-${key}`}>
              <MotionLink 
                  to={`/${name.toLowerCase()}`}
                  variants={variants.navItem}
              >
                  {name}
              </MotionLink>
            </div>
          ))}
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}

export default Home;
