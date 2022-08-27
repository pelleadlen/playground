import styled from "styled-components";
import Image from "next/image";
export const Section = styled.section`
  min-height: 100vh;
  margin: 1rem;
  @media (max-width: 850px) {
    display: none;
  }
`;

export const Img = styled(Image)`
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;
`;

export const Grid = styled.div`
  margin: auto;
  display: grid;
  width: 100%;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  & ${ImgWrapper}:nth-child(1) {
    height: 600px;
  }
  & ${ImgWrapper}:nth-child(2) {
    height: 600px;
  }
  & ${ImgWrapper}:nth-child(3) {
    grid-column: 1/-1;
    height: 900px;
  }
  & ${ImgWrapper}:nth-child(4) {
    grid-column: 1/-1;
    height: 600px;
  }
  & ${ImgWrapper}:nth-child(5) {
    grid-column: 1/-1;
    height: 600px;
  }
`;
