import styled from "styled-components";

export const Container = styled.section`
  min-height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.bgWhite};
`;
export const Introduction = styled.div`
  height: 80vh;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: clamp(1rem, 4vw, 1.5rem);
    line-height: 1.6;
    max-width: 55ch;

    font-weight: 300;
  }
`;
