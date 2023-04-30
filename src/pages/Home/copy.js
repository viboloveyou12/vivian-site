// import './App.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import Canvas from '../../components/Canvas';

const boxVariants = {
  show: {
    background: "#fa0", // 顏色會再子元素都跑完後才會觸發
    transition: {
        when: "afterChildren", // 再子元素之後才啟動動畫
        staggerChildren: 0.2,
    },
  }
}

const wordVariants = {
  show: {
      opacity: 1,
      y: 0,
  },
  hidden: {
      opacity: 0,
      y: 20,
  },
};

const containerVariants = {
  exit: {
      top: ["100%", "0%", "0%"],
      bottom: ["0%", "0%", "100%"],
      transition: {
          type: "tween",
          ease: "backInOut",
          duration: 2,
      },
  },
};

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96 ]}

let text = 'Home page!'


function Home() {
  return (
    <motion.div 
      className="App"
      exit={{ opacity: 0}}
      transition={transition}
    >
      <Canvas />
      <header className="App-header">
          <Link to="/about">Go to About</Link>
          <Link to="/work">Go to Work</Link>
          <Link to="/contact">Go to Contact</Link>
          This is home page.
        <motion.div
          animate={{
            x: [0,100,100,200,200,300,300],
            y: [0,0,100,100,0,0,100]
          }}
          transition={{ 
            // type: "inertia",
            ease: "circIn",
            duration: 2
          }}
        >123</motion.div>
        <motion.div
          initial="hidden"
          animate="show"
          variants={boxVariants}
        >
          {text.split('').map((word, key) => (
            <motion.span
              key={word+key}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </header>
      <main>
        <div>
          Hi I’m Vivian Yang.<br></br>
          A Front-end Developer<br></br>
          based in London, UK.
        </div>
        <div>
          Currently, I’m focus on building OTT service website at KKstream.
        </div>
      </main>
    </motion.div>
  );
}

export default Home;
