import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.h2`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 300;
  line-height: 1.4;
  width: 50%;
  letter-spacing: -0.02em;
  color: ${(props) => (props.title ? "black" : "gray")};
  padding-bottom: ${(props) => (props.title ? "0.5rem" : "0")};
  align-self: flex-start;
  @media (max-width: 1024px) {
    width: 80%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;
