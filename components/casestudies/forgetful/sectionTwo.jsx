import { TextBlock } from "./styled/styledForgetful";
import { Container, Grid, Img, ImgWrapper } from "./styled/styledSectionTwo";
import { Paragraph } from "./styled/styledForgetful";

const SectionTwo = () => {
  return (
    <>
      <Container>
        <Grid>
          <TextBlock notCentered>
            <Paragraph>
              That's a question that keeps popping up, and I don't necessarily
              know the answer. But if you want to, just do it. Because I sure
              want to.
              <br />
              <br />
              As a designer, you often need to hand off your work to the
              developers. When it comes to the micro interactions like buttons
              and animations, this can be tricky. Figma's smart animate
              prototypes help you create fantastic animations and transitions
              for your projects, but when you hand the file off to a developer,
              it's sometimes difficult to translate those smooth transitions
              into life. So I thought I would try to see if I could make it
              myself.
            </Paragraph>
          </TextBlock>
          <ImgWrapper>
            <Img
              alt="codesnippet of create react app"
              layout="fill"
              src="/Assets/Images/forgetful-code.png"
            />
          </ImgWrapper>
        </Grid>
      </Container>
    </>
  );
};

export default SectionTwo;
