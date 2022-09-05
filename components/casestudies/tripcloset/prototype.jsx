import { RevealUp } from "../../hooks/animation";
import { TextBox } from "./styled/styledProcess";
import { Container, Video } from "./styled/styledPrototype";
import { Paragraph, Title } from "./styled/styledTripCloset";

const VideoMock = () => {
  return (
    <>
      <RevealUp triggerOnce={true}>
        <Video muted playsInline loop autoPlay>
          <source
            src="https://res.cloudinary.com/pellux/video/upload/v1662215754/tripvideo_n2a9uc.mp4"
            type="video/mp4"
          />
        </Video>
      </RevealUp>
    </>
  );
};

export const Prototype = () => {
  return (
    <Container>
      <TextBox>
        <Title>Prototype</Title>
        <Paragraph>
          For the prototype I thought i'd give Protopie a try. The first steps
          is to answer some basic questions like where you are traveling to,
          what dates and what you are planning to do on your destination.
          Finally the AI is going to sort out what clothes and items you might
          need based on the temperature, activity and location.
        </Paragraph>
      </TextBox>
      <VideoMock />
    </Container>
  );
};
