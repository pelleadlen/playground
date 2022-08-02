import styled from "styled-components";
import Image from "next/image";

export const Section = styled.section`
  background: ${(props) => props.theme.bgWhite};
  min-height: 100vh;
  width: 100vw;
  display: flex;
  padding: 0 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
`;

export const Introduction = styled.div`
  height: 80vh;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: clamp(1rem, 4vw, 1.5rem);
    line-height: 1.6;
    max-width: 55ch;

    font-weight: 300;
  }
`;

export const Img = styled.div`
  position: relative;
  max-width: 1440px;
  width: 80%;
  height: 80vh;
  margin-bottom: ${(props) => (props.marginbottom ? "2rem" : "0rem")};

  @media (max-width: 768px) {
    width: 100%;
    height: 70vh;
  }
`;

export const ImgSrc = styled(Image)`
  object-fit: cover;
  border-radius: 1.5rem;
`;
