import styled from "styled-components";
import { motion } from "framer-motion";
export const AccordionWrap = styled.div`
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
  color: #fff;
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
