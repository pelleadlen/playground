import {
  ImgWrapper,
  Img,
  Section,
  Grid,
  ImgWrapperMobile,
  ImgSmall,
  SmallImageGrid,
  MobileSection,
} from "./styled/styledImageGrid";
import Image from "next/image";

export const ImageGrid = () => {
  return (
    <>
      <Section>
        <Grid>
          <ImgWrapper>
            <Img
              alt="loading screen of our legacy"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/siteloader.png"
            />
          </ImgWrapper>

          <ImgWrapper>
            <Img
              alt="signup modal as card"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/signup.png"
            />
          </ImgWrapper>
          <ImgWrapper>
            <Img
              alt="store section"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/store.png"
            />
          </ImgWrapper>
          <ImgWrapper>
            <Img
              alt="selected item"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/item.png"
            />
          </ImgWrapper>
          <ImgWrapper>
            <Img
              alt="blue offwhite and black colors"
              width="100%"
              height="100%"
              layout="fill"
              src="/Assets/Images/colors.png"
            />
          </ImgWrapper>
        </Grid>
      </Section>
    </>
  );
};
