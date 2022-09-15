import { useEffect } from "react";
import {
  Word,
  Title,
  Character,
  SelectedWork,
  Paragraph,
} from "./styled/styledSelectedWorkTitle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SelectedWorkTitle = () => {
  const text = "Selected work";

  const controls = useAnimation();

  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <>
      <SelectedWork>
        <Title aria-label={text} role="heading">
          {text.split(" ").map((word, index) => {
            return (
              <Word
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={controls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <Character
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </Character>
                  );
                })}
              </Word>
            );
          })}
        </Title>
        <motion.div variants={wordAnimation}>
          <Paragraph
            initial={{ opacity: 0, y: `0.25em` }}
            transition={{ delay: 0.4 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            below is a few of my most recent projects
          </Paragraph>
        </motion.div>
      </SelectedWork>
    </>
  );
};
