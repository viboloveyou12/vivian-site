import * as React from 'react';
import './App.scss';
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import routesConfig from './routes/config';
import CursorContextProvider from './context/cursorContext';
import Cursor from './components/Cursor';


function App() {
  const location = useLocation();
  const element = useRoutes(routesConfig);

  if (!element) return null;

  return (
    <HelmetProvider>
      <Helmet>
          <link rel="preload" href="https://fonts.cdnfonts.com/css/gallient" as="font" crossOrigin="anonymous" />
          <link rel="preload" href="https://fonts.cdnfonts.com/s/53659/GallientRegular-eZoMp.woff" as="font" crossOrigin="anonymous" />
      </Helmet>
      <CursorContextProvider>
        <AnimatePresence mode="wait">
          {React.cloneElement(element, { location: location, key: location.pathname })}
        </AnimatePresence>
        <Cursor/>
    </CursorContextProvider>
    </HelmetProvider>
  );
}

export default App;
