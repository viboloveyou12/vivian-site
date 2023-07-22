import { motion, Variants } from "framer-motion";
import MainLayout from '../../layout/MainLayout';
// import withTransition from '../../HOC/withTransition';
import Portrait from '../../img/portrait.png';
import { transition } from '../../animation';
import './style.scss';
import skills from './skill.json';

const container = (delay: number):Variants => ({
  animate: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.01,
      staggerDirection: 1
    }
  }
});

const letterItem: Variants = {
  initial: {
    y: 300,
    transition: transition
  },
  animate: {
    y: 0,
    transition: transition
  },
};

const skillItem: Variants = {
  initial: {
    y: 50,
    opacity: 0,
    transition: transition
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: transition
  },
};

const wording = (delay: number):Variants => ({
  initial: {
    y: 100,
    opacity: 0,
    transition: transition
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {delay: delay, ...transition}
  }
})

const image: Variants = {
  initial: {
    clipPath: 'inset(350px 0px 0 0)',
    opacity: 0,
    transition: transition
  },
  animate: {
    clipPath: 'inset(0px 0px 0 0)',
    opacity: 1,
    transition: { delay: .5,  ...transition }
  }
}

interface skillProps {
  name: string;
  link: string;
}

function About() {

  return (
    <MainLayout path="/about">
      <main className="about">
        <div className="about-left">
          <motion.div initial="initial" animate="animate" exit="initial">
            <motion.h1 variants={container(1)}>
              {['A', 'b', 'o', 'u', 't'].map((letter, key) => (
                <motion.span variants={letterItem} key={`aboutLetter-${key}`} className="letter">{letter}</motion.span>
              ))}
            </motion.h1>
          </motion.div>
          <motion.img
          initial="initial"
          animate="animate"
          exit="initial"
          variants={image}
          src={Portrait}
          alt="portrait">
          </motion.img>
        </div>
        <div className="about-right">
          <div className="overflow">
            <motion.h2 variants={wording(1)} initial="initial" animate="animate" exit="initial">
            I'm Vivian Yang, a front end developer and problem solver.
            </motion.h2>
          </div>
          <div className="overflow">
            <motion.p variants={wording(1.2)} initial="initial" animate="animate" exit="initial">
            Born in 1996 in Taipei, Taiwan.
            <br></br>
            I have three years of experience in web development, I have worked in various industries from cloud service to OTT streaming service to build web applications. 
            Back in 2018, when I was specialized in Interactive Design, I was fascinated with the digital world and coding, and what excites me most about working in software development is being able to solve real problems and have a positive impact in the word. 
            </motion.p>
          </div>
          <div className="overflow">
            <motion.h3 variants={wording(1.5)} initial="initial" animate="animate" exit="initial">SKILLS</motion.h3>
          </div>
          <motion.div variants={container(1.8)} initial="initial" exit="initial" animate="animate" className="about-skills overflow">
            {skills.map(({name, link}: skillProps) => (
              <motion.a 
                href={link}
                target="_blank"
                variants={skillItem}
                key={name}>
                  {name}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </main>
    </MainLayout>
  );
}

export default About;
//export default withTransition(About);
