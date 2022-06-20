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
  font-size: clamp(1rem, 2vw, 1.5rem);
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
  width: 100%;
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
  font-size: clamp(2.5rem, 18vw, 8rem);
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

// Section with accordion

export const AccordionSection = styled.section`
  height: 100vh;
  margin-top: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 1.5rem;
  background: #000;
  position: relative;

  @media only screen and (max-width: 768px) {
    align-items: center;
  }
`;
