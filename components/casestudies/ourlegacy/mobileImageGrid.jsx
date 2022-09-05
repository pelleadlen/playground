import { RevealUp } from "../../hooks/animation";
import { ImgSm, ImgWrapperSm, Section } from "./styled/styledMobileImageGrid";

export const MobileImageGrid = () => {
  return (
    <>
      <RevealUp triggerOnce={true}>
        <Section>
          <ImgWrapperSm>
            <ImgSm
              alt="loading screen of our legacy"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/siteloader-mobile.png"
            />
          </ImgWrapperSm>
          <ImgWrapperSm>
            <ImgSm
              alt="signup modal as card"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/signup-mobile.png"
            />
          </ImgWrapperSm>
          <ImgWrapperSm>
            <ImgSm
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/store-mobile.png"
            />
          </ImgWrapperSm>
          <ImgWrapperSm>
            <ImgSm
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/item-mobile.png"
            />
          </ImgWrapperSm>
          <ImgWrapperSm>
            <ImgSm
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/colors-mobile.png"
            />
          </ImgWrapperSm>
        </Section>
      </RevealUp>
    </>
  );
};
