import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const FadeIn = ({ children, className }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.9,
          type: "spring",
          bounce: 0.1,
        },
      });
    }
    if (!inView) {
      animation.start({
        y: 8,
        opacity: 0,
      });
    }
  }, [inView]);

  return (
    <>
      <motion.div
        initial="hidden"
        className={className}
        ref={ref}
        animate={animation}
      >
        {children}
      </motion.div>
    </>
  );
};
