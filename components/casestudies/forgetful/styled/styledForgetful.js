import styled from "styled-components";
import { motion } from "framer-motion";

export const Main = styled(motion.main)`
  min-height: 100vh;
  min-width: 100vw;
  overflow-x: hidden;
`;
export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  margin: 3rem 3rem 8rem 3rem;
  min-height: 80vh;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    grid-auto-rows: 1fr;
    margin: 3rem 1rem 8rem 1rem;
  }

  @media (max-width: 700px) {
    margin: 3rem 1rem 8rem 1rem;
  }
`;

export const TextBlock = styled.div`
  align-self: ${(props) => (props.notCentered ? "start" : "center")};
  justify-self: ${(props) => (props.centered ? "center" : "flex-start")};

  @media (max-width: 1024px) {
    justify-self: center;
  }
`;

export const Heading = styled.h3`
  font-size: clamp(2rem, 1.9rem + 0.5vw, 2.5rem);
  line-height: 100%;
  margin-bottom: 2rem;
`;

export const Paragraph = styled(motion.p)`
  font-size: clamp(1.125rem, 1.05rem + 0.375vw, 1.5rem);
  max-width: 50ch;
  font-weight: 300;
  line-height: 160%;
  color: ${(props) => props.theme.textGray};
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Wrapper = styled(motion.div)`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgWhite};
  background-image: radial-gradient(#efefef 1px, transparent 0);
  background-size: 30px 30px;
  background-position: -19px -19px;
  border-radius: 1.5rem;
  box-shadow: ${(props) => props.theme.shadow}; ;
`;

export const AppWrapper = styled(Wrapper)`
  display: flex;
  height: 90vh;
  width: 50%;
  margin-top: 2rem;

  position: relative;

  @media (max-width: 1220px) {
    width: 100%;
  }
`;

export const App = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem;
`;

export const AppParagraph = styled(Paragraph)`
  position: absolute;
  z-index: 5;
`;

export const Button = styled(motion.div)`
  position: absolute;
  top: 4rem;
  left: 2rem;
`;

export const Forgetful = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
