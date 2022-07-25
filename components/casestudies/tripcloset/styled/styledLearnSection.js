import styled from "styled-components";

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
  font-size: clamp(1.5rem, 10vw, 4.8rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  padding-bottom: 1rem;
`;

export const LearnParagraph = styled.p`
  line-height: 1.5;
  letter-spacing: 0.04em;
  font-weight: 300;
  font-size: clamp(1rem, 4.4vw, 1.5rem);
`;

export const TextWrapper = styled.div`
  max-width: 700px;

  @media (max-width: 600px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;
