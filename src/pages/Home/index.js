import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import MainLayout from '../../layout/MainLayout';
import withTransition from '../../HOC/withTransition';
// import Star from '../../img/star.svg';
import './style.scss';

const MotionLink = motion(Link);

const transition = { duration: 1.3, ease: [0.6, 0.01, -0.05, 0.9] };

const titleVariants = (delay) => ({
  initial: {
    y: 0
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.04,
      staggerDirection: 1
    }
  }
});

const letterVariants = {
  initial: {
    y: 400,
    transition: transition
  },
  animate: {
    y: 0,
    transition: { duration: 1, ...transition },
  },
};

const navBoxVariants = {
  show: {
      transition: {
          delay: 1,
          staggerChildren: 0.2,
      },
  },
  hidden: {
      transition: {
          delay: 1,
          staggerChildren: 0.2,
      }
  },
}

const navVariants = {
  hidden: {
      y: 50,
      opacity: 0,
  },
  show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.43, 0.13, 0.23, 0.96 ]
      }
  },
}

/*
const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

const starTransition = (width, height, count) => {
  let x;
  let y;
  console.log('count', count)
  if (count < 3) {
    x = getRandomArbitrary(0, width/3);
  } else if (2 < count && count < 5) {
    x = getRandomArbitrary(width/3, width/2);
  } else {
    x = getRandomArbitrary(width/2, width);
  }
  const delay = getRandomArbitrary(2.5, 3.2);
  // const x = getRandomArbitrary(0, width);
  y = getRandomArbitrary(-(height)-50, height+50);
  return {
    initial: {
      opacity: 0
    },
    animate: {
      y: [300+y, -50+y, 10+y,  -10+y, 5+y, 0+y],
      x: [x],
      rotate: [0, -210, -165, -190, -180, -180],
      opacity: [0, 80, 100, null, null, null],
      transition: {
        from: 'circOut',
        duration: 1.3,
        delay: delay
      }
    }
  }
};

const renderStar = (width, height) => {
  const count = 8;
    return (
      <>
        {[...Array(count)].map((x, i) => 
          <motion.img
              key={`star-${i}`}
              src={Star}
              alt="star"
              className="star"
              variants={starTransition(width, height, i)}
              animate='animate'
              initial='initial'
            >
          </motion.img>  
        )}
      </>
    )
}

const useContainerDimensions = (myRef) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const getDimensions = () => {
      return {
        width: myRef.current.offsetWidth,
        height: myRef.current.offsetHeight
      }
    }

    const handleResize = () => {
      setDimensions(getDimensions())
    }

    if (myRef.current) {
      setDimensions(getDimensions())
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [myRef])

  return dimensions;
}
*/

const firstString = ["H", "i,", <>&nbsp;</>, "I’m", <>&nbsp;</>, "Vi", "vi", "an", <>&nbsp;</>, "Y", "an", "g", "."];
const secondString = ["A", <>&nbsp;</>, "F", "r", "o", "n", "t", "-", "en", "d", <>&nbsp;</>, "D", "e", "v", "e", "l", "o", "p", "er"];
const thirdString = ["b", "a", "s", "e", "d", <>&nbsp;</>, "in", <>&nbsp;</>, "L", "o", "n", "d", "o", "n", ",", <>&nbsp;</>, "U", "K", "."];

function Home() {
  const h1 = useRef(null);
  // const { width, height }  = useContainerDimensions(h1);
  const pages = ['Work', 'About', 'Contact'];

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
        {/* {renderStar(width, height)} */}
        <div className="title-area">
          <motion.div
            className='title'
            initial='initial'
            animate='animate'
            exit="initial"
          >
            <motion.h1 
              variants={titleVariants(0)}
            >
              {firstString.map((item, key) => (
                <motion.span variants={letterVariants} key={`first-${key}`}>{item}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.div
            className='title'
            initial='initial'
            animate='animate'
            exit="initial"
          >
            <motion.h1 variants={titleVariants(.6)} ref={h1}>
              {secondString.map((item, key) => (
                <motion.span variants={letterVariants} key={`second-${key}`}>{item}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.div
            className='title'
            initial='initial'
            animate='animate'
            exit="initial"
          >
            <motion.h1 variants={titleVariants(1.2)}>
              {thirdString.map((item, key) => (
                <motion.span variants={letterVariants} key={`third-${key}`}>{item}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.div 
            className="mobile-nav"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={navBoxVariants}
          >
          {pages.map((name, key) => (
            <div className="mobileNavContainer" key={`mobile-nav-${key}`}>
              <MotionLink 
                  to={`/${name.toLowerCase()}`}
                  variants={navVariants}
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

export default withTransition(Home);
