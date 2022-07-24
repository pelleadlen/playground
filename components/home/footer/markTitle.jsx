import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation, motion } from "framer-motion";

import { Title, Wrap, Underline } from "./styled/styledFooter";

//Animation
const underline = {
  visible: { scaleX: 1, transition: { duration: 1 } },
  hidden: { scaleX: 0 },
};

export const MarkTitle = (props) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  });
  return (
    <>
      <Wrap>
        <Title>{props.title}:</Title>
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

export default MarkTitle;
