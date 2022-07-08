import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.main`
  width: 100vw;
  min-height: 100vh;
  padding: 0 1.5em;
  background: #fff;
`;

export const Hero = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Heading = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 10rem);
  line-height: 1;
  width: 80%;
  letter-spacing: -0.02em;
`;

export const ImageContainer = styled.div`
  grid-column: 2;
  position: relative;
  max-width: 100%;
`;

export const Paragraph = styled.p`
  letter-spacing: -0.02em;
  font-weight: 400;
  line-height: 1.5;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  max-width: 48ch;
`;

export const ParagraphSpan = styled.span`
  letter-spacing: -0.02em;
  font-weight: 300;
  margin-right: 0.2em;
  line-height: 1.5;
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  color: gray;
  font-style: italic;
`;

export const SectionTwo = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 2rem 0;
`;

export const Text = styled.h2`
  font-size: clamp(1.1rem, 4vw, 2rem);
  font-weight: 300;
  line-height: 1.5;
  width: 50%;
  margin: 0;
  letter-spacing: -0.02em;
  color: black;

  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SplashSection = styled.section`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: hidden;
  padding: 1rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

export const SplashFlex = styled.div`
  display: flex;
  min-height: 80vh;
  max-width: 100vw;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;
