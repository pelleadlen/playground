import styled from "styled-components";
import { motion } from "framer-motion";

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

export const TextBetween = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.textWhite};
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
  color: #fff;
`;

export const Year = styled.h3`
  font-size: 1.2rem;
  color: ${(props) => (props.box ? "#000" : "#fff")};
  padding: ${(props) => (props.box ? "0.5rem 1rem" : "0")};
  border-radius: 1.5rem;
  border: ${(props) => (props.box ? "1px solid #000" : "")};
  opacity: ${(props) => (props.box ? "0.8" : "")};
  background-color: ${(props) => (props.box ? "white" : "")}; ;
`;

export const MobileText = styled.h3`
  font-size: ${(props) => (props.small ? "1rem" : "1.5rem")};
  padding-top: ${(props) => (props.large ? "0.5rem" : "0")};
  color: ${(props) => props.theme.fontColor};
`;

export const MobileTextBlock = styled.div`
  display: block;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const ImageContainer = styled(motion.div)`
  position: relative;
  height: 80vh;
  overflow: hidden;
  box-shadow: ${(props) => props.theme.shadow}; ;
`;

export const CenteredTitle = styled(motion.div)`
  align-self: center;
`;
