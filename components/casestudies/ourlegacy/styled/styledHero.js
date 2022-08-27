import styled from "styled-components";

export const Video = styled.video`
  object-fit: cover;
  width: 100%;

  @media (max-width: 1164px) {
    height: 100vh;
  }
  @media (max-width: 575px) {
    height: 80vh;
  }
`;
