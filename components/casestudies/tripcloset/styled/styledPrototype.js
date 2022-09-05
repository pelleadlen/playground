import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  margin: 1rem;
`;

export const Video = styled.video`
  object-fit: cover;
  border-radius: 1.5rem;
  margin: 2rem 0;

  @media (max-width: 600px) {
    height: 60vh;
  }
`;
