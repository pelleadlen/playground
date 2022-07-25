import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.main)`
  min-height: 100%;
  width: 100%;
  background: ${(props) => props.theme.bgWhite}; ;
`;

export const TopContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 1.5rem;
`;

export const Hero = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Heading = styled(motion.span)`
  font-size: clamp(2.5rem, 18vw, 12rem);
  line-height: 1;
  letter-spacing: -0.009em;
`;

export const FlexRow = styled.div`
  display: flex;
  gap: 3rem;
  width: 100%;
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

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
`;
