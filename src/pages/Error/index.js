import { useLocation } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import withTransition from '../../HOC/withTransition';
import './style.scss';

function Error() {
  const { pathname } = useLocation();
  return (
    <MainLayout path="/">
      <div className="error">
        <div className="error-content">
          <h1>404.</h1>
          <h5>Oops, We can’t find the page :(</h5>
        </div>
      </div>
    </MainLayout>
  );
}

export default withTransition(Error);
