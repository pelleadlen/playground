import { Underline, Title, Wrap } from "./styledFooter";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

//Animation
const underline = {
  visible: { scaleX: 1, transition: { duration: 1 } },
  hidden: { scaleX: 0 },
};

const UnderLineTitle = ({ title }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  });
  return (
    <>
      <Wrap margin>
        <Title>{title}:</Title>
        <Underline
          as={motion.div}
          ref={ref}
          animate={controls}
          initial={"hidden"}
          variants={underline}
        />
      </Wrap>
    </>
  );
};

export default UnderLineTitle;
