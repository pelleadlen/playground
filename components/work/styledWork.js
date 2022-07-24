import styled from "styled-components";
import { motion } from "framer-motion";

export const WorkWrapper = styled(motion.section)`
  background: #fff;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1.5rem;
  transform: translateY(-3rem);
`;

export const Word = styled(motion.span)`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
`;

export const Title = styled.h2`
  font-size: clamp(3rem, 6vw + 2rem, 12rem);
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
  height: 72vh;
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

export const Overlay = styled(motion.div)`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.3);

  z-index: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const TextBetween = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  color: white;
  align-items: center;
`;

export const OverlayText = styled.h3`
  justify-content: start;
  display: flex;
  flex-direction: row-reverse;
  gap: 0.5rem;
  align-items: center;
  letter-spacing: 0.01em;
  font-size: ${(props) => (props.small ? "1.2rem" : "4rem")};
  color: white;
`;

export const Year = styled.h3`
  font-size: 1.2rem;
  color: white;
`;

export const MobileText = styled.h3`
  font-size: ${(props) => (props.small ? "1rem" : "1.5rem")};
  padding-top: ${(props) => (props.large ? "0.5rem" : "0")};
  color: ${(props) => (props.gray ? "gray" : "black")}; ;
`;

export const Cursor = styled(motion.div)`
  padding: 0.5rem 1rem;
  border: 1px solid #000000;
  border-radius: 2rem;
  font-size: 1.5rem;
  position: fixed;
  top: 0;
  left: 0;
  width: fit-content;
  max-height: fit-content;
  background: rgba(255, 255, 255, 0.54);
  opacity: 95%;
  pointer-events: none;
`;
