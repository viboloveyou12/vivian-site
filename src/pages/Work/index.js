import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
import './style.scss';
import Star from '../../img/star.svg';
import data from './work.json';
import withTransition from '../../HOC/withTransition';

function JobItem({ data }) {
  const {
    company,
    company_url,
    job_title,
    work_duration,
    job_desc
  } = data || {};
  return (
    <>
      <div className="job-info">
        <div className="job-info-title">
          {job_title}
        </div>
        <a 
          className="job-company"
          href={company_url}
          target="_blank"
          rel="noreferrer noopener"
        >@{company}</a>
        <p className="job-duration">{work_duration}</p>
      </div>
      <div className="job-desc">
        {job_desc.map((desc, key) => (
          <div className="desc-item" key={`job_desc_${key}`}>
            <img src={Star} alt="test"></img>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </>
  )
}

function Work() {
  const [selectedTab, setSelectedTab] = useState(data[0]);

  return (
    <MainLayout path="/work">
      <main className="work">
        <div className="work-left">
          <h1 className="left-title">Work</h1>
          <aside>
            <ul>
              {data.map((tab) => (
                <div 
                  className="nav-item"
                  key={tab.company}
                  onClick={() => setSelectedTab(tab)}
                >
                  {tab === selectedTab ? (
                    <motion.div layoutId="underline" className="decorate-line"></motion.div>
                  ) : null}
                  <li className={tab === selectedTab ? 'isSelected' : '' }>
                    {tab.company}
                  </li>
                </div>
              ))}
            </ul>
          </aside>
        </div>
        <div className="work-right">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.company+'_main' : 'empty'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <JobItem data={selectedTab}/>
            </motion.div>
          </AnimatePresence>
          {/* {data.map((item) => (
            <JobItem data={item}/>
          ))} */}
        </div>
      </main>
    </MainLayout>
  );
}

export default withTransition(Work);
