import styled, { css } from "styled-components";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: ${(props) => props.theme.bgGray};
  z-index: 1000;
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  height: 80%;
  width: 100%;
  padding: 0 1.5rem 0 1.5rem;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  @media only screen and (max-width: 640px) {
    padding: 0 1rem;
    align-items: center;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Socials = styled.div``;

export const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  gap: 0.5rem;
`;

export const Wrap = styled.div`
  position: relative;
  pointer-events: auto;
  max-width: fit-content;

  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 1rem;
    `};
`;

export const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  line-height: 1.2;
  position: relative;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const TitleLink = styled.a`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  line-height: 1.2;
  position: relative;
  font-weight: 300;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #000;
  transform-origin: left;
`;
