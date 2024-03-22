import { useState, useEffect, useContext, memo } from 'react';
import { motion, AnimatePresence, usePresence } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
import { MouseContext } from '../../context/cursorContext';
import variants from './transitions';
import './style.scss';
import Star from '../../img/star.svg';
import data from './work.json';

interface JobItemProps {
  data: Props
}
interface Props {
    company: string;
    company_url: string;
    job_title: string;
    work_duration: string;
    job_desc: string[];
}

const JobItem = memo(({ data }: JobItemProps) => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const {
    company,
    company_url,
    job_title,
    work_duration,
    job_desc
  } = data || {};
  return (
    <motion.div
      variants={variants.stagger}
      animate="animate"
      initial="initial"
      exit="initial"
    >
      <div className="job-info">
        <motion.div className="job-info-title" variants={variants.basic} >
          {job_title}
        </motion.div>
        <motion.a
          className="job-company"
          href={company_url}
          target="_blank"
          rel="noreferrer noopener"
          variants={variants.basic}
          onMouseEnter={() => cursorChangeHandler("hovered")}
          onMouseLeave={() => cursorChangeHandler("")}
        >@{company}</motion.a>
        <motion.p className="job-duration" variants={variants.basic}>{work_duration}</motion.p>
      </div>
      <div className="job-desc">
        {job_desc.map((desc, key) => (
          <div className="desc-item" key={`job_desc_${key}`}>
            <motion.img src={Star} alt="test" variants={variants.basic}></motion.img>
            <motion.p variants={variants.basic}>{desc}</motion.p>
          </div>
        ))}
      </div>
    </motion.div>
  )
})

function Work() {
  const [selectedTab, setSelectedTab] = useState(data[0]);
  const [isPresent, safeToRemove] = usePresence();
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    !isPresent && safeToRemove();
  }, [isPresent, safeToRemove])

  return (
    <MainLayout path="/work">
      <main className="work">
        <div className="work-left">
          <div className='titleContainer'>
            <motion.h1 variants={variants.basic} exit="initial" animate="animate" initial="initial">
              Work
            </motion.h1>
          </div>
          <aside>
            <motion.ul
              variants={variants.stagger}
              initial="initial"
              animate="animate"
              exit="initial"
            >
              {data.map((tab: Props ) => (
                <div 
                  className="nav-item"
                  key={tab.company}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab === selectedTab ? (
                    <motion.div 
                      layoutId="underline"
                      className="decorate-line"
                      variants={variants.decorateLink}
                      exit="exit"
                      animate="animate"
                      initial="initial"
                    >
                    </motion.div>
                  ) : null}
                  <motion.li
                    className={tab === selectedTab ? 'isSelected' : '' }
                    variants={variants.basic}
                    whileHover={{ 
                      scale: 1.05,
                    }}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
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

export default Work;
