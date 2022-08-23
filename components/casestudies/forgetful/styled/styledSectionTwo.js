import styled from "styled-components";
import Image from "next/image";

export const Container = styled.section`
  width: 100vw;
  height: auto;
`;

export const Grid = styled.div`
  width: 100%;
  min-height: 80vh;
  padding: 3rem;
  background: ${(props) => props.theme.bgWhite};
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme.textGray};

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1.5fr;
  }
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Paragraph = styled.p`
  font-size: clamp(1.2rem, 4vw, 1.5rem);
  max-width: 55ch;
  font-weight: 300;
  line-height: 160%;

  color: ${(props) => props.theme.textGray};
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 2rem;
  }
`;

export const Img = styled(Image)`
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
