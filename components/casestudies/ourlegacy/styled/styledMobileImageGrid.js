import styled from "styled-components";
import Image from "next/image";

export const ImgWrapperSm = styled.div`
  position: relative;
`;

export const ImgSm = styled(Image)`
  border-radius: 1.5rem;
  object-fit: cover;
`;

export const Section = styled.section`
  height: 100%;
  display: none;

  margin: 1rem;

  & ${ImgWrapperSm}:nth-child(1) {
    @media (max-width: 850px) {
      min-height: 30em;
    }
    @media (max-width: 475px) {
      min-height: 20em;
    }
  }
  & ${ImgWrapperSm}:nth-child(2) {
    @media (max-width: 850px) {
      min-height: 30em;
    }
    @media (max-width: 475px) {
      min-height: 20em;
    }
  }
  & ${ImgWrapperSm}:nth-child(3) {
    @media (max-width: 850px) {
      min-height: 50em;
    }
    @media (max-width: 475px) {
      min-height: 35em;
    }
  }
  & ${ImgWrapperSm}:nth-child(4) {
    @media (max-width: 850px) {
      min-height: 30em;
    }
    @media (max-width: 475px) {
      min-height: 20em;
    }
  }
  & ${ImgWrapperSm}:nth-child(5) {
    @media (max-width: 850px) {
      min-height: 30em;
    }
    @media (max-width: 475px) {
      min-height: 20em;
    }
  }
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
