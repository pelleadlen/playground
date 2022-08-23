import HeroText from "./heroText";
import { BottomText, Container, TextBox } from "./styled/styledHero";

const Hero = () => {
  return (
    <Container>
      <HeroText top="Should" bottom="designers code?" />
      <BottomText>A INTERACTIVE CASESTUDY ABOUT MICRO-INTERACTIONS</BottomText>
    </Container>
  );
};

export default Hero;
