import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.section)`
  position: relative;
  min-width: 100vw;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid ${(props) => props.theme.textGray};

  span {
    font-size: clamp(0.8rem, 2vw, 1rem);
    line-height: 100%;
    padding: 1rem 0;
    text-transform: uppercase;
    color: ${(props) => props.theme.textGray};
  }
`;

export const BottomText = styled.p`
  font-size: clamp(0.8rem, 2vw, 1rem);
  position: absolute;
  bottom: 0.5rem;
  left: 3rem;
  text-transform: uppercase;
  color: ${(props) => props.theme.textGray};
  @media (max-width: 768px) {
    left: 1rem;
  }
`;

export const TextBox = styled(motion.div)`
  padding-left: 3rem;
`;
