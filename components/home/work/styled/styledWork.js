import styled from "styled-components";

import { motion } from "framer-motion";

export const WorkWrapper = styled(motion.section)`
  background: ${(props) => props.theme.off};
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5rem;
  transform: translateY(-3rem);
`;

export const Grid = styled.section`
  height: 100%;
  width: 100%;
  min-width: 100%;
  padding: 1.5rem 1.5rem 4rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  min-height: 100vh;
  gap: 1.5rem;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 1.5rem 0rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem 1rem 4rem 1rem;
  }
`;
