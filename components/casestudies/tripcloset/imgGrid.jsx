import { RevealUp } from "../../hooks/animation";
import { ImgLarge } from "./imgLarge";
import { Flex } from "./styled/styledImgGrid";

export const ImgGrid = () => {
  return (
    <>
      <RevealUp triggerOnce={true}>
        <Flex>
          <ImgLarge
            fullWidth
            noMargin
            alt="mobilemockup by the pool"
            src={"/Assets/Images/trip-onephone-pool-mockup.png"}
          />
          <ImgLarge
            noMargin
            fullWidth
            alt="three mobilemockups"
            src={"/Assets/Images/trip3iphones.png"}
          />
        </Flex>
      </RevealUp>
    </>
  );
};
