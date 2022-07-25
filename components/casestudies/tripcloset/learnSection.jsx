import {
  LearnSection,
  TextWrapper,
  LearnTitle,
  LearnParagraph,
} from "./styled/styledLearnSection";
import { RevealUp } from "../../hooks/animation";

const Learned = () => {
  return (
    <LearnSection>
      <RevealUp>
        <TextWrapper>
          <LearnTitle>What did I learn?</LearnTitle>
          <LearnParagraph>
            This project was really fun to work on. I learned a lot and
            especially about the importance of user testing and learning from my
            mistakes. As a user experience designer, I’m always looking for new
            tools to make my design process better. For the user testing I did a
            deep dive into Maze. An amazing app that makes it easy to get quick
            feedback from real people. And for prototyping, I used Protopie
            where I could implement some logic into the onboarding process which
            was important during the testings. If you like this idea — let's
            make it!
          </LearnParagraph>
        </TextWrapper>
      </RevealUp>
    </LearnSection>
  );
};

export default Learned;
