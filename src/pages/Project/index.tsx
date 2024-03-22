import { useEffect, useContext, memo } from 'react';
import { motion, usePresence } from 'framer-motion';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import MainLayout from '../../layout/MainLayout';
import { MouseContext } from '../../context/cursorContext';
import variants from './transitions';
import projects from './project.json';
import './style.scss';

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
                variants={variants.wording(0)}
              >Project</motion.h1>
              </div>
            <div className="desc-container">
              <motion.p
                initial="initial"
                animate="animate"
                exit="initial"
                variants={variants.wording(.5)}
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
                variants={variants.title(key*.2)}
              >
                <motion.h1
                  initial='initial'
                  animate='animate'
                  exit="initial"
                  onMouseEnter={() => cursorChangeHandler("hovered")}
                  onMouseLeave={() => cursorChangeHandler("")}
                >
                  <motion.a href={item.url} target='_blank' variants={variants.title(key*.2)}>
                      {[...item.name].map((letter, key) => (
                        <motion.span key={`first-${key}`} variants={variants.titleLetter}>
                          {letter}  
                        </motion.span>
                      ))}
                  </motion.a>
                </motion.h1>
                <div className='title-desc-container'>
                  <motion.p variants={variants.title(key*.2)}>
                    <motion.p variants={variants.titleLetter}>{item.desc}</motion.p>
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
