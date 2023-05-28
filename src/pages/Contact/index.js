import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../../layout/MainLayout';
import withTransition from '../../HOC/withTransition';
import Star from '../../img/star.svg';
import './style.scss';

function Contact() {
  const [showLoading, setShowLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoading(false)
    }, 4000)
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
          {/* <Marquee
            style={{width: '370px'}}
            speed={60}
          >
            <h1>Contact. </h1>
          </Marquee> */}
          <div className="top"
          >
            <h1>
              Reach <img src={Star}></img>
              <br></br>
              Out Today
            </h1>
            <p>
              HI, I’m currently looking for new opportunities.<br></br> 
              Whether you have a question or just want to say hi,<br></br> 
              I’ll try my best to get back to you :)
            </p>
          </div>
          <div className="decorate-line"></div>
          <div className="bottom">
            <div className="bottom-left">
              <Link to="/home">Home</Link>
              <Link to="/home">Work</Link>
              <Link to="/home">About</Link>
            </div>
            <div className="bottom-right">
              <Link to="/home">Linkedln</Link>
              <Link to="/home">Github</Link>
              <Link to="/home">Email</Link>
            </div>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default withTransition(Contact);
