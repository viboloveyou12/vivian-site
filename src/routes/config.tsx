import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';
import Home from '../pages/Home';

const Work = lazy(() => import('../pages/Work'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const Error = lazy(() => import('../pages/Error'));

const config: RouteObject[] = [
  {
    path: '/',
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