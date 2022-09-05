import styled from "styled-components";
import { motion } from "framer-motion";

export const Marquees = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Track = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
  font-size: clamp(3.25rem, 2.65rem + 3vw, 6.25rem);
  font-weight: 300;
  letter-spacing: -0.02em;
  text-transform: uppercase;
`;
