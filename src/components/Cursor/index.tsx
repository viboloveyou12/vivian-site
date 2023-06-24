import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from 'framer-motion';

import "./style.scss";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/cursorContext";

const isTouchEnabled = () => {
  return ( 'ontouchstart' in window ) ||
    ( navigator.maxTouchPoints > 0 );
}

const getWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
}

const Cursor = () => {
  const { pathname } = useLocation();
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y, opacity } = useMousePosition();
  const color = pathname === '/contact' ? 'white' : '';

  const ua = navigator.userAgent;
  const isFirefox = ua.includes('Firefox');

  if ( isTouchEnabled() && (getWidth() < 700)) {
    return null;
  };

  return (
    <>
      <motion.div
        className={`ring ${cursorType} ${!isFirefox && "delayRing"}`}
        style={{
          ...(x && y) && { transform: `translate(${x-12}px, ${y-12}px)` },
          opacity: opacity,
          borderColor: color
        }}
      ></motion.div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px`, opacity: opacity, backgroundColor: color }}
      ></div>
    </>
  );
};

export default Cursor;
