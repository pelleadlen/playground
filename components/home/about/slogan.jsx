import Tilt from "react-parallax-tilt";
import { Link } from "react-scroll";
import { RevealUp } from "../../hooks/animation";
import * as styled from "./styled/styledSlogan";

export const Slogan = () => {
  return (
    <RevealUp>
      <styled.Section>
        <Tilt
          perspective={800}
          transitionSpeed={1000}
          transitionEasing={"cubic-bezier(.03,.98,.52,.99)"}
        >
          <Link to="profile" offset={6} smooth={true}>
            <styled.TextXL>
              What's new <span>and exiting in </span>
              <span>Product design?</span>
            </styled.TextXL>
          </Link>
        </Tilt>
      </styled.Section>
    </RevealUp>
  );
};
