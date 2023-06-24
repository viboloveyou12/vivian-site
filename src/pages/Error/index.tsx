import { motion } from 'framer-motion';
import MainLayout from '../../layout/MainLayout';
import './style.scss';
import { slideIn } from '../../animation'; 



const Error: React.FC = () => {
  return (
    <MainLayout path="/">
      <div className="error">
        <motion.div className="error-content" variants={slideIn(50)} animate="animate" initial="initial" exit="initial">
          <h1>404.</h1>
          <h5>Oops, We can’t find the page :(</h5>
        </motion.div>
      </div>
    </MainLayout>
  );
}

export default Error;
