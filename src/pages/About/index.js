import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from '../../layout/MainLayout';
import withTransition from '../../HOC/withTransition';
import Portrait from '../../img/portrait.png';
import './style.scss';

function About() {

  return (
    <MainLayout path="/about">
      <main className="about">
        <div className="about-left">
          <h1>About</h1>
          <img src={Portrait} alt="portrait"></img>
        </div>
        <div className="about-right">
          <h2>
          I'm Vivian Yang, a front end developer and problem solver.
          </h2>
          <p>
          Born in 1996 in Taipei, Taiwan.
          <br></br>
          I have three years of experience in web development, I have worked in various industries from cloud service to OTT streaming service to build web applications. 
          Back in 2018, when I was specialized in Interactive Design, I was fascinated with the digital world and coding, and what excites me most about working in software development is being able to solve real problems and have a positive impact in the word. 
          </p>
          <h3>SKILLS</h3>
          <div className="about-skills">
            <div>AWS</div>
            <div>Node.js</div>
            <div>React.js</div>
            <div>Next.js</div>
            <div>Google Analytic</div>
            <div>Google Tag Manager</div>
            <div>Next.js</div>
            <div>CMS</div>
            <div>Git</div>
            <div>AWS</div>
            <div>Node.js</div>
            <div>React.js</div>
          </div>
        </div>
      </main>
    </MainLayout>
  );
}

export default withTransition(About);
