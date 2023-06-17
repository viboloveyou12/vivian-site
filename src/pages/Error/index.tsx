import MainLayout from '../../layout/MainLayout';
import './style.scss';

const Error: React.FC = () => {
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

export default Error;
