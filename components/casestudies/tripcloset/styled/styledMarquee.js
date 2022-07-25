import styled from "styled-components";
import { motion } from "framer-motion";

export const Track = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
`;

export const Marquees = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem;
  overflow: hidden;
`;

export const MarqueeText = styled.h1`
  font-size: clamp(8rem, 20vw, 12.5rem);
  font-weight: 500;
`;
