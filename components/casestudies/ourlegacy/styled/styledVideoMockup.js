import styled from "styled-components";

export const Video = styled.video`
  object-fit: cover;
  height: 100vh;

  @media (max-width: 800px) {
    height: 40vh;
  }
`;
