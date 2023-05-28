import React, { useContext } from "react";
import { motion } from 'framer-motion';

import "./style.scss";
import useMousePosition from "../../hooks/useMousePosition";
import { MouseContext } from "../../context/cursorContext";

const Cursor = (pathname) => {
  const { cursorType, cursorChangeHandler } = useContext(MouseContext);
  const { x, y, opacity } = useMousePosition();
  const color = pathname?.location === '/contact' ? 'white' : '';

  return (
    <>
      <motion.div
        className={"ring " + cursorType}
        style={{ transform: `translate(${x-12}px, ${y-12}px)`, opacity: opacity, borderColor: color }}
      ></motion.div>
      <div
        className={"dot " + cursorType}
        style={{ left: `${x}px`, top: `${y}px`, opacity: opacity, backgroundColor: color }}
      ></div>
    </>
  );
};

export default Cursor;
