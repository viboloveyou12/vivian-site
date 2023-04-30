import { useLocation } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import './style.scss';

function Home() {
  const { pathname } = useLocation();

  return (
    <MainLayout path={pathname}>
      <main className="home">
        <h1>
          Hi I’m Vivian Yang.<br></br>
          A Front-end Developer<br></br>
          based in London, UK.
        </h1>
        <div className="main-subtitle">
          Currently, I’m focus on building OTT service website at KKstream.
        </div>
      </main>
    </MainLayout>
  );
}

export default Home;
