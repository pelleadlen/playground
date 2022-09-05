import { Img, Imgs } from "./styled/styledTripCloset";
import { useIsMobile } from "../../hooks/isMobile";

export const ImgLarge = ({
  src,
  srcMobile,
  noMargin,
  halfHeight,
  fullWidth,
  noBorderRadius,
}) => {
  const isMobile = useIsMobile();

  return (
    <Imgs fullWidth={fullWidth} halfHeight={halfHeight} noMargin={noMargin}>
      <Img
        noBorderRadius={noBorderRadius}
        src={isMobile && srcMobile ? srcMobile : src}
        layout="fill"
        r
      />
    </Imgs>
  );
};
