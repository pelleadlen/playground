import { keyframes } from "@emotion/react";
import Reveal from "react-awesome-reveal";

export const transition = { duration: 2.4, ease: [0.43, 0.13, 0.23, 0.96] };

const customFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const RevealUp = ({ children, cascade, triggerOnce }) => {
  return (
    <>
      <Reveal
        keyframes={customFade}
        duration="700"
        cascade={cascade}
        triggerOnce={triggerOnce}
      >
        {children}
      </Reveal>
    </>
  );
};
