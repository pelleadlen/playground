import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin: 4.5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    margin: 1.5rem;
  }
  @media (max-width: 608px) {
    margin: 1rem;
  }
`;
