import { Marquees, Track } from "./styled/styledMarquee";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 40,
        ease: "linear",
      },
    },
  },
};

export const Marquee = (props) => {
  return (
    <Marquees>
      <Track animate="animate" variants={marqueeVariants}>
        {props.marquee}
      </Track>
    </Marquees>
  );
};
