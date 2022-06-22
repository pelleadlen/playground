import styled from "styled-components";
import { motion } from "framer-motion";
// Global page

export const Container = styled(motion.main)`
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
  font-size: clamp(1rem, 2vw, 1.2rem);
  line-height: 1.5;
  font-weight: 500;
  letter-spacing: -0.02em;
  font-style: ${(props) => (props.italic ? "italic" : "regular")};
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
        <Info italic Secondary>
          {props.title}
        </Info>
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

//Divider image

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
`;

// Marquee

export const Track = styled(motion.div)`
  position: absolute;
  white-space: nowrap;
  will-change: transform;
`;

export const Marquees = styled(motion.div)`
  position: relative;
  width: 100vw;
  max-width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem;
  overflow: hidden;
`;

export const MarqueeText = styled.h1`
  font-size: clamp(8rem, 20vw, 12.5rem);
  font-weight: 500;
`;

//ProcessInformation

export const ProcessTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  padding-bottom: 0.25em;
  letter-spacing: -0.02em;
`;

export const ProcessParagraph = styled.p`
  line-height: 130%;
  letter-spacing: -0.02em;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const ProcessInformation = ({ method, methodInformation }) => {
  return (
    <>
      <div>
        <ProcessTitle>{method}</ProcessTitle>
        <ProcessParagraph>{methodInformation}</ProcessParagraph>
      </div>
    </>
  );
};

//Process section

export const Process = styled.section`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ProcessText = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 2.75rem 0 4rem 0;
  @media (max-width: 768px) {
    max-width: 75%;
    padding: 2.75rem 1rem;
  }
  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const LearnSection = styled.section`
  width: 100vw;
  height: 100vh;
  background: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LearnTitle = styled.h2`
  font-size: clamp(1.5rem, 10vw, 4.5rem);
  font-weight: 400;
  letter-spacing: 0.01em;
`;

export const LearnParagraph = styled.p`
  line-height: 130%;
  letter-spacing: 0.02em;
  font-weight: 300;
  font-size: 1.5rem;
`;

export const TextWrapper = styled.div`
  max-width: 560px;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export const MoreWork = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;
