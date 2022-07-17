import styled from "styled-components";
import { motion } from "framer-motion";

export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0 1.5rem;
  background: #f2f2f2;
  @media only screen and (max-width: 640px) {
    padding: 0 1rem;
  }
`;

export const Heading = styled(motion.h1)`
  margin: 0 1rem 8rem 0;
  font-size: clamp(3rem, 6vw + 1rem, 11rem);
  line-height: 1;
  letter-spacing: -0.02em;
  font-weight: 400;
  max-width: 12ch;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  span {
    font-size: clamp(1rem, 3vw, 2rem);
    letter-spacing: -0.02em;
    font-weight: 300;
  }
`;
