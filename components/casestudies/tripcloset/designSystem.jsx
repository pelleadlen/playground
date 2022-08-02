import {
  Container,
  Introduction,
  Img,
  ImgSrc,
} from "./styled/styledDesignSystem";
import { RevealUp } from "../../hooks/animation";

const DesignSystem = () => {
  return (
    <>
      <Container>
        <Introduction>
          <RevealUp>
            <div>
              <h3>Design system</h3>
              <p>
                After testing the wireframes it was time for some colors and
                components. Working with Design Systems can really make your
                design work more cohesive and organized. I made a Design System
                in Figma, and I ensured it would pass the contrast ratio of at
                least 4.5:1. For hierarchy in the typography I used shades of
                gray and for elevation I used overlays to make primary CTA's
                stand out more.
              </p>
            </div>
          </RevealUp>
        </Introduction>
        <Img marginbottom>
          <ImgSrc
            alt="designsystem made in Figma"
            layout="fill"
            src="/Assets/Images/tripstylesheet.png"
          />
        </Img>
      </Container>
    </>
  );
};

export default DesignSystem;
