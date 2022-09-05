import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4.5rem;

  gap: 1rem;
  @media (max-width: 800px) {
    margin: 1.5rem;
    flex-direction: column;
  }
  @media (max-width: 608px) {
    margin: 1rem;
  }
`;
