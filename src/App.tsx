import * as React from 'react';
import ReactGA from "react-ga4";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from 'react-router-dom';
import routesConfig from './routes/config';
import MetaElement from './components/MetaElement';
import CursorContextProvider from './context/cursorContext';
import Cursor from './components/Cursor';
import './styles/common.scss';
import './App.scss';

ReactGA.initialize("G-5S4VHGE868");

function App() {
  const location = useLocation();
  const element = useRoutes(routesConfig);

  if (!element) return null;

  return (
    <CursorContextProvider>
      <MetaElement />
      <AnimatePresence mode="wait">
        {React.cloneElement(element, { location: location, key: location.pathname })}
      </AnimatePresence>
      <Cursor/>
    </CursorContextProvider>
  );
}

export default App;
