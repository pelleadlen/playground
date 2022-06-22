import styled from "styled-components";

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

export const Top = styled.section`
  height: 80vh;
  width: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Info = styled.div``;

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
