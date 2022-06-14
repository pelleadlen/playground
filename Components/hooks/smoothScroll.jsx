import { useRef, useState, useCallback, useLayoutEffect } from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const [pageHeight, setPageHeight] = useState(0);

  const resizePageHeight = useCallback((entries) => {
    for (let entry of entries) {
      setPageHeight(entry.contentRect.height);
    }
  }, []);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) =>
      resizePageHeight(entries)
    );
    scrollRef && resizeObserver.observe(scrollRef.current);
    return () => resizeObserver.disconnect();
  }, [scrollRef, resizePageHeight]);

  const { scrollY } = useViewportScroll();
  const transform = useTransform(scrollY, [0, pageHeight], [0, -pageHeight]);
  const physics = { damping: 20, mass: 0.1, stiffness: 100 };
  const spring = useSpring(transform, physics);

  return (
    <>
      <motion.div
        className="scroll-container"
        ref={scrollRef}
        style={{ y: spring }}
      >
        {children}
      </motion.div>

      <div style={{ height: pageHeight }} />
    </>
  );
};

export default SmoothScroll;
