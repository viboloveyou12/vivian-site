import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const About = lazy(() => import('../pages/About'));
const Work = lazy(() => import('../pages/Work'));
const Error = lazy(() => import('../pages/Error'));

const config = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contact',
    element: <Contact />
  }, 
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/work',
    element: <Work />
  },
  {
    path: '*',
    element: <Error />
  }
]

export default config;