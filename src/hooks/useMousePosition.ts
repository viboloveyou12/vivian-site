import { useEffect, useState } from "react";

interface MousePosition {
  x?: number | null;
  y?: number | null;
  opacity: number;
}

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null, opacity: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEventInit) => {
      const { clientX = null, clientY = null } = event;
      setMousePosition({ x: clientX, y: clientY, opacity: 1 });
    };

    const mouseLeaveHandler = (event: MouseEventInit) => {
      const { clientX = null, clientY = null } = event;
      setMousePosition({ x: clientX, y: clientY, opacity: 0});
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
