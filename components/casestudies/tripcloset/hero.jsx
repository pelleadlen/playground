import { ImgLarge } from "./imgLarge";
import {
  Container,
  FlexRow,
  Heading,
  Information,
  Paragraph,
  Title,
  TwoColumns,
} from "./styled/styledTripCloset";

const heroText = [
  { title: "Category", text: "UX design" },
  { title: "Platform", text: "IOS/Android" },
  {
    title: "About",
    text: "Trip closet is an AI generated clothing rental for digital nomads. We generate what clothes you need on your trip by answering a few questions. We look at your destination, the weather and what activities you want to do. Travel without a bag and rent apparel that was made to last.",
  },
];

export const Hero = () => {
  const Info = (props) => {
    return (
      <FlexRow>
        <Title>{props.title}</Title>
        <Paragraph>{props.text}</Paragraph>
      </FlexRow>
    );
  };
  return (
    <>
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <TwoColumns>
          <Heading>Trip closet</Heading>
          <Information>
            {heroText.map(({ title, text }, index) => (
              <Info title={title} text={text} key={index} />
            ))}
          </Information>
        </TwoColumns>
      </Container>
      <ImgLarge src={"/Assets/Images/Trip-onephone-street-mockup.png"} />
    </>
  );
};
