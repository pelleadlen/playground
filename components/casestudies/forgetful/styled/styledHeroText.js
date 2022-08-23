import styled from "styled-components";
import { motion } from "framer-motion";

export const WordSpan = styled(motion.div)`
  font-size: clamp(2.5rem, 10vw, 8rem);
  line-height: 100%;
  font-weight: 500;
  letter-spacing: -0.02em;

  @media (max-width: 678px) {
    line-height: 120%;
  }
`;

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0;
  height: 340px;
  padding-left: 3rem;
  overflow-y: hidden;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 678px) {
    padding-left: 1rem;
    height: 200px;
  }

  div {
    display: flex;
    gap: 1.5rem;
    @media (max-width: 678px) {
      gap: 1rem;
    }
  }
  h1 {
    text-transform: uppercase;
    color: ${(props) => props.theme.textGray};
    padding: 1rem;
  }
`;
