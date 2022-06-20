import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    transition: {
      type: "linear",
    },
  };

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mouseMove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      animate={cursorVariant}
      variants={variants}
      className="cursor"
    />
  );
};

export default CustomCursor;
