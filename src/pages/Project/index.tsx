import { useEffect, useContext, memo } from 'react';
import { motion, usePresence, Variants } from 'framer-motion';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import MainLayout from '../../layout/MainLayout';
import { MouseContext } from '../../context/cursorContext';
import { transition } from '../../animation';
import projects from './project.json';
import './style.scss';

const title = (delay: number): Variants => ({
  initial: {
    y: 0,
    transition: transition
  },
  animate: {
    y: 0,
    transition: {
      delayChildren: delay,
      staggerChildren: 0.05,
      staggerDirection: 1
    }
  }
});

const wording = (delay = 0) => ({
  initial: {
    y: 400,
    opacity: 0,
    transition: transition
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: delay,
      duration: 1 + delay,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
});

const titleLetter: Variants  = {
  initial: {
    y: 400,
    transition: transition
  },
  animate: {
    y: 0,
    transition: {
      duration: 1.5,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

function Project() {
  const [isPresent, safeToRemove] = usePresence();
  const matches = useMediaQuery('(max-width:1000px)');
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    if (matches) {
      document.body.classList.remove('no-verticalScroll');
    } else {
      document.body.classList.add('no-verticalScroll');
    }

    return () => {
      document.body.classList.remove('no-verticalScroll');
    }
  }, [matches]);

  useEffect(() => {
    !isPresent && safeToRemove();
  }, [isPresent, safeToRemove])

  return (
    <MainLayout path="/project">
      <main>
        <Stack className="project" flexDirection={matches ? 'column':'row'}>
          <Stack className="project-left">
            <div className="title-container">
              <motion.h1
                initial="initial"
                animate="animate"
                exit="initial"
                variants={wording(0)}
              >Project</motion.h1>
              </div>
            <div className="desc-container">
              <motion.p
                initial="initial"
                animate="animate"
                exit="initial"
                variants={wording(.5)}
              >
                Explore my side projects, born from my passion for development and design.
                I've crafted these projects both as a developer and a designer, continually sharpening my skills.
              </motion.p>
            </div>
          </Stack>
          <Stack className="project-right">
            {projects.map((item, key) => (
              <motion.div
                className="project-item"
                key={item.name}
                initial='initial'
                animate='animate'
                exit="initial"
                variants={title(key*.2)}
              >
                <motion.h1
                  initial='initial'
                  animate='animate'
                  exit="initial"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <motion.a href={item.url} target='_blank' variants={title(key*.2)}>
                      {[...item.name].map((letter, key) => (
                        <motion.span key={`first-${key}`} variants={titleLetter}>
                          {letter}  
                        </motion.span>
                      ))}
                  </motion.a>
                </motion.h1>
                <div className='title-desc-container'>
                  <motion.p variants={title(key*.2)}>
                    <motion.p variants={titleLetter}>{item.desc}</motion.p>
                  </motion.p>
                </div>
            </motion.div>
            ))}
          </Stack>
        </Stack>
      </main>
    </MainLayout>
  );
}

export default memo(Project);
