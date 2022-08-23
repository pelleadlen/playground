import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";
import { motion } from "framer-motion";
import { Paragraph } from "./styledForgetful";
import { AiOutlineEnter } from "react-icons/ai";

export const Body = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FabIcon = styled(IoAddCircle)`
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const Fab = styled(motion.div)`
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

export const Backdrop = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0;
  backdrop-filter: blur(2px);
  background-color: #000;
  opacity: 0.4;
`;

export const Form = styled(motion.form)`
  position: absolute;
  z-index: 1;
  display: flex;
  min-width: 200px;
  align-items: center;
`;

export const StyledInput = styled.input`
  box-shadow: ${(props) => props.theme.shadow};
  padding: 1rem 1.5rem;
  position: relative;
  width: 300px;

  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.textGray};
  &:focus {
    outline-color: rgba(82, 24, 250, 0.7);
  }
`;

export const Enter = styled(AiOutlineEnter)`
  width: 2rem;
  height: 1rem;
  right: 0.5rem;
  margin-left: 0.5rem;
  color: ${(props) => props.theme.textGray};
  opacity: 0.5;
  z-index: 2;
  position: absolute;
`;

export const StyledParagraph = styled(Paragraph)``;
