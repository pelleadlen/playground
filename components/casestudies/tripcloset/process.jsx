import { ProcessSection, TextBox } from "./styled/styledProcess";
import { Paragraph, Title } from "./styled/styledTripCloset";
import { RevealUp } from "../../hooks/animation";
export const Process = (props) => {
  return (
    <ProcessSection>
      <RevealUp triggerOnce={true}>
        <TextBox>
          <Title>{props.titleOne}</Title>
          <Paragraph>{props.markdownOne}</Paragraph>
        </TextBox>
        <TextBox>
          <Title>{props.titleTwo}</Title>
          <Paragraph>{props.markdownTwo}</Paragraph>
        </TextBox>
        <TextBox>
          <Title>{props.titleThree}</Title>
          <Paragraph>{props.markdownThree}</Paragraph>
        </TextBox>
        <TextBox>
          <Title>{props.titleFour}</Title>
          <Paragraph>{props.markdownFour}</Paragraph>
        </TextBox>
        <TextBox>
          <Title>{props.titleFive}</Title>
          <Paragraph>{props.markdownFive}</Paragraph>
        </TextBox>
      </RevealUp>
    </ProcessSection>
  );
};
