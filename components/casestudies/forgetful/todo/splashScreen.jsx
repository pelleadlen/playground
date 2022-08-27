import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  LetterBox,
  LetterGrid,
  Wrapper,
  WhiteBackground,
  ReplayIcon,
  ReplayButton,
  MessageText,
} from "../styled/styledSplashScreen";
import { motion } from "framer-motion";

const text = [
  { letter: "F", bg: "rgb(74 222 128)" },
  { letter: "O", bg: "rgb(192 132 252)" },
  { letter: "R", bg: "rgb(252 165 165)" },
  { letter: "G", bg: "rgb(96 165 250)" },
  { letter: "E", bg: "rgb(74 222 128)" },
  { letter: "T", bg: "rgb(216 180 254)" },
  { letter: "F", bg: "rgb(252 165 165)" },
  { letter: "U", bg: "rgb(192 132 252)" },
  { letter: "L", bg: "rgb(234 179 8)" },
];

const Replay = (props) => {
  return (
    <ReplayButton
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 3, duration: 0.4, type: "spring", stiffness: 100 }}
      onClick={props.onClick}
    >
      <ReplayIcon>{props.icon}</ReplayIcon>
      {props.replay}
    </ReplayButton>
  );
};

export const Loader = () => {
  const moveOut = {
    initial: {
      opacity: 1,
      y: 0,
    },
    animate: {
      opacity: 0,
      y: -100,
      transition: {
        delay: 4,
        duration: 0.5,
      },
    },
  };

  const parent = {
    initial: {
      opacity: 0,
    },
    viewed: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: -20,
    },
    viewed: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <>
      <WhiteBackground variants={moveOut} initial="initial" animate="animate">
        <LetterGrid variants={parent} initial="initial" animate="viewed">
          {text.map(({ letter, bg }, index) => (
            <LetterBox
              variants={child}
              style={{ backgroundColor: `${bg}` }}
              key={index}
            >
              {letter}
            </LetterBox>
          ))}
        </LetterGrid>
      </WhiteBackground>
    </>
  );
};

const SplashScreen = ({ messageText, replay }) => {
  const [loading, setLoading] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      setLoading(true);
      setTimeout(() => {
        setLoading(!loading);
      }, 2000);
    }
  }, [inView]);

  function handleReplay() {
    setLoading((prevState) => !prevState);
  }

  return (
    <>
      <Wrapper ref={ref}>
        {loading ? <Loader /> : null}
        <MessageText>{messageText}</MessageText>

        <Replay replay={replay} onClick={handleReplay}>
          {replay}
        </Replay>
      </Wrapper>
    </>
  );
};

export default SplashScreen;
