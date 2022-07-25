import { MarqueeText, Marquees, Track } from "./styled/styledMarquee";

const marqueeVariants = {
  animate: {
    x: [0, -1035],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

const Marquee = (props) => {
  return (
    <div className={props.className}>
      <Marquees>
        <Track className="track" variants={marqueeVariants} animate="animate">
          <MarqueeText>
            Process Process Process Process Process Process Process Process
            Process Process Process Process Process Process Process Process
            Process Process Process Process Process Process Process Process
            Process Process Process
          </MarqueeText>
        </Track>
      </Marquees>
    </div>
  );
};

export default Marquee;
