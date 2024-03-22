import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
import { MouseContext } from '../../context/cursorContext';
import variants from './transitions';
import Star from '../../img/star.svg';
import { socialMediaInfo } from '../../constant';
import './style.scss';

const MotionLink = motion(Link);

const pages = [{
    name: 'Home',
    path: '/'
  },
  {
    name: 'Work',
    path: '/work'
  },
  {
    name: 'Project',
    path: '/project'
  },
  {
    name: 'About',
    path: '/about'
  }
];

const Contact: React.FC = () => {
  const { cursorChangeHandler } = useContext(MouseContext);
  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 400px)").matches
  );
  const { linkedin, github, email, medium } = socialMediaInfo;

  useEffect(() => {
    document.body.classList.add('no-verticalScroll');
    document.body.style.backgroundColor = '#000000';
    document.body.style.transition = 'background-color 1s ease';

    window.matchMedia("(min-width: 400px)")
      .addEventListener('change', e => setMatches( e.matches ));

    return () => {
      window.matchMedia("(min-width: 400px)")
        .removeEventListener('change', e => setMatches( e.matches ));
      document.body.classList.remove('no-verticalScroll');
      document.body.style.backgroundColor = '#EAE4DF';
      document.body.style.transition = 'background-color 1s ease';
    }
  }, []);

  return (
    <MainLayout path="/contact">
      <main className="contact">
        <div className="contact-content">
          <div 
            className="top"
          >
            <div className="h1Container">
              <motion.h1
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants.top(0.8)}
              >
                Reach <img src={Star} alt="star"></img>
                <br></br>
                Out Today
              </motion.h1>
            </div>
            <div className="descContainer">
              <motion.p
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={variants.top(1)}
              >
                HI, I’m currently looking for new opportunities.
                {matches ? <br></br> : ' '}
                Whether you have a question or just want to say hi,
                {matches ? <br></br> : ' '}
                I’ll try my best to get back to you :)
              </motion.p>
            </div>
          </div>
          <motion.div
            className="decorate-line"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={variants.decoratedLine}
          ></motion.div>
          <motion.div className="bottom" variants={variants.bottom} animate="show" initial="hidden" exit="hidden">
            <div className="bottom-left">
              {pages.map((item, key) => (
                <div className="bottomContainer" key={`bottom-left-${key}`}>
                  <MotionLink
                    to={item.path}
                    variants={variants.bottomItem}
                    className='pseudo-text-effect'
                    data-after={item.name}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    <span>{item.name}</span>
                  </MotionLink>
                </div>
              ))}
            </div>
            <div className="bottom-right">
              {[linkedin, github, email, medium].map(({title, url}) => (
                <div className='bottomContainer' key={title}>
                  <motion.a
                    target="_blank"
                    href={url}
                    rel="noopener noreferrer"
                    variants={variants.bottomItem}
                    className='pseudo-text-effect'
                    data-after={title}
                    onMouseEnter={() => cursorChangeHandler("hovered")}
                    onMouseLeave={() => cursorChangeHandler("")}
                  >
                    <span>{title}</span>
                  </motion.a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </MainLayout>
  )
}

export default Contact;
