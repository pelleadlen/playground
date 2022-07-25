import styled from "styled-components";
import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

export const AccordionWrap = styled(motion.div)`
  padding: 1rem;
  color: #fff;
  width: 100%;
  max-width: 50%;
  border-bottom: 1px solid #fff;
  background-color: inherit;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Title = styled(motion.h3)`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 500;
  color: ${(props) => props.theme.textWhite};
  letter-spacing: 0.02em;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  cursor: pointer;
`;

export const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.25rem);
  font-weight: 300;
  line-height: 1.5;
  overflow: hidden;
  max-width: 85%;
  color: #fff;
  letter-spacing: 0.02em;
  @media only screen and (max-width: 640px) {
    max-width: 100%;
  }
`;

export const Arrow = styled(IoArrowForwardOutline)`
  width: 2.25rem;
  height: 2.25rem;
`;

export const AccordionSection = styled.section`
  height: 100vh;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: flex-end;
  padding: 1.5rem;
  background: #000;
  position: relative;

  @media only screen and (max-width: 768px) {
    align-items: center;
    height: 100%;
  }
`;
