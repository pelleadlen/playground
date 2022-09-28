import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  height: 70vh;
  margin: 4.5rem;
  display: flex;
  align-items: flex-end;

  @media (max-width: 800px) {
    margin: 1.5rem;
  }
  @media (max-width: 608px) {
    margin: 1rem;
    height: 80vh;
  }
  @media (max-width: 400px) {
    margin: 1rem;
    height: 90vh;
  }
`;

export const TwoColumns = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 608px) {
    flex-direction: column;
  }
`;

export const Heading = styled.h1`
  font-size: 3.125rem;
  line-height: 1;
  @media (max-width: 608px) {
    margin-bottom: 4rem;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 4.5em;
  padding: 1rem;
  @media (max-width: 608px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: clamp(1rem, 2vw, 1.5rem);
  line-height: 1.5;
  max-width: 50ch;
`;

export const Title = styled(motion.h3)`
  text-transform: uppercase;
  font-size: 0.75rem;
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width: 608px) {
    gap: 0;
    flex-direction: column-reverse;
  }
`;

export const Img = styled(Image)`
  object-fit: cover;
  border-radius: ${(props) => (props.noBorderRadius ? "0rem" : "1.5rem")};
`;

export const Imgs = styled.div`
  position: relative;
  width: ${(props) => (props.fullWidth ? "100%" : "")};
  height: ${(props) => (props.normal ? "100%" : 0)};
  height: ${(props) => (props.halfHeight ? "50vh" : "100vh")};
  margin: ${(props) => (props.noMargin ? "0" : "4.5rem")};
  @media (max-width: 800px) {
    margin: 1.5rem;
  }
  @media (max-width: 608px) {
    height: 60vh;
    margin: 1rem;
  }
`;

export const ProblemSection = styled.section`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;
`;

export const ProblemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1rem;
`;
