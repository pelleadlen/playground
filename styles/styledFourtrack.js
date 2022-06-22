import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  @media only screen and (max-width: 600px) {
    height: 60vh;
  }
`;

export const Top = styled.section`
  height: 80vh;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Info = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export const Paragraph = styled.p`
  letter-spacing: -0.02em;
  font-weight: 400;
  line-height: 1.5;
  font-size: 1.5rem;
  max-width: 480px;
`;

export const ParagraphSpan = styled.span`
  letter-spacing: -0.02em;
  font-weight: 300;
  margin-right: 0.2em;
  line-height: 1.5;
  font-size: 1.5rem;
  color: gray;
  font-style: italic;
`;

export const ImageRow = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  padding: 0 1.5rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 600px) {
    padding: 0 1rem;
  }
`;

export const About = styled.div`
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  padding: 1rem;
  margin-top: 1rem;
`;

export const Video = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 1.5rem;
  aspect-ratio: 16 / 9;

  @media (max-width: 600px) {
    padding: 1rem;
    aspect-ratio: 1/1;
    height: 50vh;
  }
`;
