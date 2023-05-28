import { motion } from "framer-motion";
import Loading from '../components/Loading';
import './withTransition.scss';

const slideIn = {
  key: "slideIn",
  animate: {
    scale: [90, 0, 50]
  },
  initial: { scale: 90 },
  transition: {
    duration: 1,
    ease: "easeInOut"
  },
  exit: {
    scale: [90]
  }
}

const slideOut = {
  key: "slideOut",
  animate: {
    scale: [0, 3, 2.2, 120],
    rotate: [0, 180, 180, 180]
  },
  initial: { scale: 0 },
  transition: {
    duration: 1.6,
    // ease: "easeInOut"
    // ease: [0, 0.71, 0.2, 1.01, 1]
  },
  exit: {scale: [0]}
}

const withTransition = (OriginalComponent) => {
  return () => (
    <>
      <OriginalComponent />
      {/* <Loading props={slideOut}/> */}
      {/* <motion.div
        className="slide-in"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: .8, ease: "easeInOut" }}
      />


      <motion.div
        className="slide-out"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: .8, ease: "easeInOut" }}
      /> */}
    </>
  );
};

export default withTransition;