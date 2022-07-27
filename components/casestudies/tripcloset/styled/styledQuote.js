import styled from "styled-components";

export const Quotes = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 0 1.5rem;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.bgWhite}; ;
`;

export const QuoteLarge = styled.h2`
  font-size: clamp(2.8rem, 6vw, 5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  letter-spacing: -00.02em;
  line-height: 1.1;
  padding: 0 1rem;
  width: 18ch;
  font-weight: 460;
  span {
    font-size: clamp(0.8rem, 0.6vw + 0.5rem, 1rem);
    font-weight: 300;
    color: ${(props) => props.theme.textGray};
    width: 100%;
    letter-spacing: 0.03em;
    line-height: 1.4;
    padding: 1rem 0;
  }
`;
