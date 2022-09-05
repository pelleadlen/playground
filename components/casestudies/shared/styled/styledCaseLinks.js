import styled from "styled-components";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const Arrow = styled(IoArrowForwardOutline)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const ContentWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

export const Container = styled(motion.section)`
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4.5rem;
  @media (max-width: 800px) {
    margin: 1.5rem;
  }
  @media (max-width: 665px) {
    margin: 1rem;
    justify-content: space-evenly;
    flex-direction: column;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1rem 0;
  border-bottom: 1px solid #000;
  width: 50vw;
  @media (max-width: 665px) {
    width: 100vw;
  }

  justify-content: space-between;
`;

export const H1 = styled.h1`
  font-size: 3.125rem;
  align-self: flex-start;
`;

export const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  gap: 0.75rem;
  cursor: pointer;

  h3 {
    font-size: clamp(1.5rem, 1.352rem + 0.74vw, 2.24rem);
  }
  p {
    line-height: 1;
    font-size: 0.75rem;
    color: ${(props) => props.theme.textGray};
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;

  @media (max-width: 665px) {
    align-self: center;
    width: 100%;
  }
`;
