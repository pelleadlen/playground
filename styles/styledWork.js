import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkWrapper = styled(motion.section)`
  background: #fff;
  width: 100vw;

  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

export const Word = styled(motion.span)`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
`;

export const Title = styled.h2`
  font-size: clamp(3rem, 6vw + 1rem, 6rem);
  font-weight: 500;
  line-height: 0.8;
`;

export const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

export const Paragraph = styled(motion.p)`
  font-weight: 300;
  color: rgb(107 114 128);
  padding-top: 0.5rem;
  font-size: 1rem;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

export const SelectedWork = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1em;
  width: 100%;
  height: 90vh;
`;

export const Grid = styled.section`
  height: 100%;
  width: 100%;
  padding: 0 1.5rem 4rem 1.5rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

export const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  align-items: flex-end;
  inset: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  z-index: 1;
`;

export const OverlayText = styled.h3`
  font-size: 2rem;
  color: white;
  padding: 1rem;
`;
