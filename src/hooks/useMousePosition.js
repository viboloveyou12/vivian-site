import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null, opacity: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY, opacity: 1 });
    };

    const mouseLeaveHandler = (event) => {
      setMousePosition({opacity: 0});
    }

    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseleave", mouseLeaveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseleave", mouseLeaveHandler);
    };
  }, []);

  return mousePosition;
}
