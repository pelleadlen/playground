import styled from "styled-components";

export const TextBlock = styled.div`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  font-weight: 300;
  width: 100%;

  height: 80vh;
  padding: 4rem 1rem 1.5rem 1rem;

  h3 {
    padding-bottom: 1rem;
  }
  p {
    max-width: 48ch;
    color: ${(props) => props.theme.textGray};
  }
`;
