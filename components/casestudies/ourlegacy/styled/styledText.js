import styled from "styled-components";

export const TextBlock = styled.div`
  font-size: clamp(1rem, 5vw, 1.5rem);
  font-weight: 300;
  width: 100%;

  h3 {
    padding-bottom: 0.5rem;
  }
  p {
    max-width: 50ch;
    color: ${(props) => props.theme.textGray};
  }
`;

export const TextBox = styled.div`
  height: 50vh;
  display: flex;
  align-items: flex-end;
  margin: 0rem 1.5rem 4rem 1.5rem;
  @media (max-width: 480px) {
    margin: 0rem 1rem 4rem 1rem;
  }
`;
