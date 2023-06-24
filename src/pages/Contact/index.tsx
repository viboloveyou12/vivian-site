import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
//import withTransition from '../../HOC/withTransition';
import Star from '../../img/star.svg';
import { transition } from '../../animation';
import { externalUrls } from '../../constant';
import './style.scss';

const MotionLink = motion(Link);

const decoratedLine: Variants = {
  hidden: {
      width: 0,
      transition: transition
  },
  show: {
      width: '100%',
      transition: {
        duration: 1,
        delay: .3
      }
  }
}

const top = (delay: number): Variants => ({
  hidden: {
      y: 50,
      opacity: 0,
      transition: transition
  },
  show: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        duration: 0.7,
        delay: delay
      }
  },
  
})

const bottom: Variants = {
  show: {
    transition: {
        staggerChildren: 0.1,
        delayChildren: 1.4,
    },
  },
  hidden: {
    transition: transition
  }
}

const bottomItem: Variants = {
  hidden: {
      y: -30,
      opacity: 0,
      transition: transition
  },
  show: {
      y: 0,
      opacity: 1,
      transition: {
        ...transition,
        duration: 0.3,
      }
  }
}

const pages = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Work',
    path: '/work'
  }, {
    name: 'About',
    path: '/about'
  }
];
const media = [
  {
    name: 'Linkedln',
    externalUrl: externalUrls.linkedin
  },
  {
    name: 'Github',
    externalUrl: externalUrls.github
  },
  {
    name: 'Email',
    externalUrl: externalUrls.email
  },
]

const Contact: React.FC = () => {
  //const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    // setTimeout(() => {
    //   setShowLoading(false)
    // }, 4000)
    document.body.classList.add('black-bg', 'no-verticalScroll');
    return () => {
      document.body.classList.remove('black-bg', 'no-verticalScroll');
    }
  }, [])

  return (
    <MainLayout path="/contact">
      {/* {showLoading && <Loading/>} */}
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
                variants={top(0.8)}
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
                variants={top(1)}
              >
                HI, I’m currently looking for new opportunities.<br></br> 
                Whether you have a question or just want to say hi,<br></br> 
                I’ll try my best to get back to you :)
              </motion.p>
            </div>
          </div>
          <motion.div
            className="decorate-line"
            initial="hidden"
            animate="show"
            exit="hidden"
            variants={decoratedLine}
          ></motion.div>
          <motion.div className="bottom" variants={bottom} animate="show" initial="hidden" exit="hidden">
            <div className="bottom-left">
              {pages.map((item, key) => (
                <div className="bottomContainer" key={`bottom-left-${key}`}>
                  <MotionLink
                    to={item.path}
                    variants={bottomItem}
                    className='pseudo-text-effect'
                    data-after={item.name}
                  >
                    <span>{item.name}</span>
                  </MotionLink>
                </div>
              ))}
            </div>
            <div className="bottom-right">
              {media.map(({name, externalUrl}, key) => (
                <div className='bottomContainer' key={`bottom-right-${key}`}>
                  <motion.a
                    target="_blank"
                    href={externalUrl}
                    rel="noopener noreferrer"
                    variants={bottomItem}
                    className='pseudo-text-effect'
                    data-after={name}
                  >
                    <span>{name}</span>
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

//export default withTransition(Contact);
export default Contact;
