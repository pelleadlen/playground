import styled from "styled-components";
import { IoAddCircle } from "react-icons/io5";
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
  color: black;
  background-image: radial-gradient(#efefef 1px, transparent 0);
  background-size: 30px 30px;
  background-position: -19px -19px;
  border-radius: 1.5rem;
  box-shadow: ${(props) => props.theme.shadow}; ;
`;

export const ButtonWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 568px) {
    transform: ${(props) => (props.rotate ? "rotate(180deg)" : "")};
  }
`;

export const FabIcon = styled(IoAddCircle)`
  width: 4rem;
  height: 4rem;
  cursor: pointer;
`;

export const Fab = styled(motion.div)``;

export const Button = styled(motion.div)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  border-radius: 9999px;
  height: 1.5rem;
  width: 1.5rem;
`;
