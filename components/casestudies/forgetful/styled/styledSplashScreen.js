import styled from "styled-components";
import { MdOutlineReplay } from "react-icons/md";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #000;
  background-image: radial-gradient(#efefef 1px, transparent 0);
  background-size: 30px 30px;
  background-position: -19px -19px;
  border-radius: 1.5rem;
  box-shadow: ${(props) => props.theme.shadow}; ;
`;

export const LetterBox = styled(motion.div)`
  padding: 2rem 0.5rem;
  width: 6rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #000;
  border-radius: 0.5rem;
  font-size: 4rem;

  @media (max-width: 608px) {
    font-size: 2rem;
    padding: 1.5rem 0.5rem;
    height: 4.5rem;
    width: 4rem;
  }
`;

export const LetterGrid = styled(motion.div)`
  width: fit-content;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, minmax(0, 100%));
  z-index: 100;

  @media (max-width: 608px) {
    gap: 0.4rem;
  }
`;

export const WhiteBackground = styled(motion.div)`
  overflow: hidden;
  position: absolute;
  inset: 0;
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
  background: ${(props) => props.theme.bgWhite};
`;

export const ReplayButton = styled(motion.div)`
  position: absolute;

  bottom: 1rem;
  color: ${(props) => props.theme.textGray};
  display: flex;
  flex-direction: row-reverse;
  font-size: 0.75rem;
  align-items: center;
  gap: 0.25rem;
  cursor: pointer;
  z-index: 0;
`;

export const ReplayIcon = styled(MdOutlineReplay)`
  width: 0.75rem;
  height: 0.75rem;
`;

export const MessageText = styled(motion.div)`
  width: auto;
  height: auto;
  font-size: clamp(1rem, 4vw, 1.25rem);
  color: ${(props) => props.theme.textGray};
`;
