import styled from "styled-components";
import { motion } from "framer-motion";
// Global page

export const Container = styled.main`
  min-height: 100%;
  width: 100%;
  background: #fff;
`;

// TopLevel

export const TopRow = styled.section`
  height: 100vh;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Info = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 500;
  color: ${(props) => (props.Secondary ? "gray" : "black")};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 3rem;
`;

export const Hero = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CaseInfo = (props) => {
  return (
    <>
      <InfoContainer>
        <Info Secondary>{props.title}</Info>
        <Info>{props.subtitle}</Info>
      </InfoContainer>
    </>
  );
};

export const Heading = styled(motion.span)`
  font-size: 8rem;
  line-height: 1;
`;

//Section two

export const StartImage = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 60vh;
`;

export const SecondRow = styled(motion.div)`
  position: absolute;
  inset: 0;
`;
