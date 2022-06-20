import { Track, Marquees, MarqueeText } from "../../styles/styledCaseStudies";

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

const Marquee = ({ marqueeText }) => {
  return (
    <div>
      <Marquees>
        <Track className="track" variants={marqueeVariants} animate="animate">
          <MarqueeText>{marqueeText}</MarqueeText>
        </Track>
      </Marquees>
    </div>
  );
};

export default Marquee;
