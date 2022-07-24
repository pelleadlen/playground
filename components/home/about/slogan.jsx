import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import { RevealUp } from "../../hooks/animation";
import { Section, TextXL } from "./styled/styledSlogan";

export const Slogan = () => {
  return (
    <RevealUp>
      <Section>
        <Tilt
          perspective={800}
          transitionSpeed={1000}
          transitionEasing={"cubic-bezier(.03,.98,.52,.99)"}
        >
          <Link to="profile" offset={6} smooth={true}>
            <TextXL>
              What's new <span>and exiting in </span>
              <span>Product design?</span>
            </TextXL>
          </Link>
        </Tilt>
      </Section>
    </RevealUp>
  );
};
