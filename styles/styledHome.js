import styled from "styled-components";
import { motion } from "framer-motion";
export const HomeWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 0 1.5rem;
  @media only screen and (max-width: 640px) {
    padding: 0 1rem;
  }
`;
