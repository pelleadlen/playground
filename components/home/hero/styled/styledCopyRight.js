import styled from "styled-components";
import { motion } from "framer-motion";

export const CopyRightWrapper = styled(motion.div)`
  display: flex;
  z-index: 100;
  align-items: center;
  overflow: hidden;
  padding: 1.5rem 0;
  gap: 0.5rem;
`;

export const CopySymbol = styled(motion.div)`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 300;
  width: 1.5rem;
  height: 2rem;
`;

export const OverflowHidden = styled.div`
  overflow: hidden;
`;
export const Text = styled(motion.div)`
  text-overflow: clip;
  font-weight: 300;
  font-size: 1.5rem;
  line-height: 2rem;
  white-space: nowrap;
  width: fit-content;
  overflow: hidden;
`;
