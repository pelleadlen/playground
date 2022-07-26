import styled from "styled-components";
import { motion } from "framer-motion";

//Index Styles

export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 0 1.5rem;
  background: ${(props) => props.theme.bgGray};

  @media only screen and (max-width: 640px) {
    padding: 0 1rem;
  }
`;

// Heading Styles

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
    position: sticky;
    top: 1rem;
  }

  @media only screen and (max-width: 640px) {
    padding-bottom: 3rem;
  }
`;
