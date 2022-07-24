import { useState } from "react";
import {
  CopyRightWrapper,
  CopySymbol,
  OverflowHidden,
  Text,
} from "./styled/styledCopyRight";

const CopyRight = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CopyRightWrapper
      onClick={() => setIsHovered(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ width: isHovered ? 252 : 180 }}
      initial={false}
    >
      <CopySymbol
        transition={{ duration: 0.1, type: "spring", stiffness: 60 }}
        animate={{ rotate: isHovered ? 360 : 0 }}
      >
        &copy;
      </CopySymbol>
      <OverflowHidden>
        <Text
          transition={{ duration: 0.1, type: "spring", stiffness: 50 }}
          animate={{ x: isHovered ? -96 : 0 }}
          initial={{ x: 0 }}
        >
          code by Pelle Adlén
        </Text>
      </OverflowHidden>
    </CopyRightWrapper>
  );
};

export default CopyRight;
