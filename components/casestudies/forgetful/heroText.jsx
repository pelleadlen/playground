import { Container, WordSpan } from "./styled/styledHeroText";

const HeroText = ({ top, bottom }) => {
  const bottomWords = bottom.split(" ");

  const container = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        type: "spring",

        stiffness: 100,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 40,
      },
    },
  };

  return (
    <Container variants={container} initial="hidden" animate="visible">
      <WordSpan variants={child}>{top}</WordSpan>
      <div>
        {bottomWords.map((word, index) => (
          <WordSpan key={index} variants={child}>
            {word}
          </WordSpan>
        ))}
      </div>
    </Container>
  );
};

export default HeroText;
