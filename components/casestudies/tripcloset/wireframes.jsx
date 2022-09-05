import { ImgLarge } from "./imgLarge";
import { Flex } from "./styled/styledImgGrid";
import { TextBox } from "./styled/styledProcess";
import { Paragraph, Title } from "./styled/styledTripCloset";
import { Container } from "./styled/styledWireframes";

export const Wireframes = () => {
  return (
    <Container>
      <TextBox>
        <Title>Wireframes</Title>
        <Paragraph>
          I did lo-fidelity wireframes with pen and paper for rapid prototyping
          and showed the sketches for some friends. My idea at the time was to
          have all steps of the sign up part as input fields where you would
          type everything – similar to how typeform work. But after going
          through this process I realised that it didn't work at all so I
          changed it up and did more medium fidelity wireframes before going to
          Figma for the pixel perfect touches.
        </Paragraph>
      </TextBox>
      <Flex style={{ width: "100%" }}>
        <ImgLarge
          noMargin
          fullWidth
          srcMobile={"/Assets/Images/lofiwireframes 2.png"}
          src={"/Assets/Images/lofiwireframes 1.png"}
        />
        <ImgLarge
          noMargin
          fullWidth
          srcMobile={"/Assets/Images/tripwireframe 1-mobile.png"}
          src={"/Assets/Images/tripwireframe 1.png"}
        />
      </Flex>
    </Container>
  );
};
