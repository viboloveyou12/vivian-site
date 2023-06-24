import * as React from 'react';
import './App.scss';
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from 'react-router-dom';
import routesConfig from './routes/config';
import CursorContextProvider from './context/cursorContext';
import Cursor from './components/Cursor';


function App() {
  const location = useLocation();
  const element = useRoutes(routesConfig);

  if (!element) return null;

  return (
    <CursorContextProvider>
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { location: location, key: location.pathname })}
        </AnimatePresence>
        <Cursor/>
    </CursorContextProvider>
  );
}

export default App;