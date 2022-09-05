import { RevealUp } from "../../hooks/animation";
import {
  Paragraph,
  ProblemSection,
  ProblemTextBox,
  Title,
} from "./styled/styledTripCloset";

export const Problem = (props) => {
  return (
    <RevealUp triggerOnce={true}>
      <ProblemSection>
        <ProblemTextBox>
          <Title>{props.title}</Title>
          <Paragraph>{props.text}</Paragraph>
        </ProblemTextBox>
      </ProblemSection>
    </RevealUp>
  );
};
