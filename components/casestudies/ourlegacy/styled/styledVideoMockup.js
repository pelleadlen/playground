import styled from "styled-components";

export const Video = styled.video`
  object-fit: cover;

  @media (max-width: 600px) {
    height: 60vh;
  }
`;
