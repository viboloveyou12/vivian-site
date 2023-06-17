import { useState, useEffect } from 'react';
import { motion, AnimatePresence, usePresence } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
import './style.scss';
import Star from '../../img/star.svg';
import data from './work.json';
import withTransition from '../../HOC/withTransition';
import { transition } from '../../animation';

const variants = {
  initial: {
    y: 50,
    opacity: 0,
    rotate: 10,
    transition: transition
  },
  animate: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: transition
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: transition
  }
}

const left = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
}

const right = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      // delayChildren: 0.5,
    }
  },
}

const item = {
  initial: {
    y: 50,
    opacity: 0,
    transition: transition
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition
  }
}

function JobItem({ data }) {
  const {
    company,
    company_url,
    job_title,
    work_duration,
    job_desc
  } = data || {};
  return (
    <motion.div
      variants={right}
      animate="animate"
      initial="initial"
      exit="initial"
    >
      <div className="job-info">
        <motion.div className="job-info-title" variants={item} >
          {job_title}
        </motion.div>
        <motion.a
          className="job-company"
          href={company_url}
          target="_blank"
          rel="noreferrer noopener"
          variants={item}
        >@{company}</motion.a>
        <motion.p className="job-duration" variants={item}>{work_duration}</motion.p>
      </div>
      <div className="job-desc">
        {job_desc.map((desc, key) => (
          <div className="desc-item" key={`job_desc_${key}`}>
            <motion.img src={Star} alt="test" variants={item}></motion.img>
            <motion.p variants={item}>{desc}</motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

function Work() {
  const [selectedTab, setSelectedTab] = useState(data[0]);
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && safeToRemove(safeToRemove, 1000);
  }, [isPresent, safeToRemove])

  return (
    <MainLayout path="/work">
      <main className="work">
        <div className="work-left">
          <div className='titleContainer'>
            <motion.h1 variants={variants} exit="exit" animate="animate" initial="initial">
              Work
            </motion.h1>
          </div>
          <aside>
            <motion.ul
              variants={left}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {data.map((tab) => (
                <div 
                  className="nav-item"
                  key={tab.company}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab === selectedTab ? (
                    <motion.div layoutId="underline" className="decorate-line" variants={variants}></motion.div>
                  ) : null}
                  <motion.li
                    className={tab === selectedTab ? 'isSelected' : '' }
                    variants={variants}
                  >
                    {tab.company}
                  </motion.li>
                </div>
              ))}
            </motion.ul>
          </aside>
        </div>
        <div className="work-right">
          <AnimatePresence mode="wait">
            {isPresent && <motion.div
              key={selectedTab ? selectedTab.company+'_main' : 'empty'}
            >
              <JobItem data={selectedTab}/>
            </motion.div>}
          </AnimatePresence>
        </div>
      </main>
    </MainLayout>
  );
}

export default withTransition(Work);
