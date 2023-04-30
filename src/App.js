import * as React from 'react';
import './App.scss';
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from 'react-router-dom';
import routesConfig from './routes/config';

function App() {
  const location = useLocation();
  const element = useRoutes(routesConfig)

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
        <React.Suspense fallback={null}>
          {React.cloneElement(element, { key: location.pathname })}
        </React.Suspense>
    </AnimatePresence>
  );
}

export default App;
