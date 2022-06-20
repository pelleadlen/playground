import styled, { css } from "styled-components";

const Footer = styled.footer`
  background-color: white;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
  height: 100%;
  width: 100%;
  padding: 0 1.5rem 0 1.5rem;
  background-color: rgb(242 242 242);
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
  @media only screen and (max-width: 640px) {
    padding: 0 1rem;
    align-items: center;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const Wrap = styled.div`
  position: relative;
  pointer-events: auto;
  max-width: fit-content;

  ${(props) =>
    props.margin &&
    css`
      margin-bottom: 1rem;
    `};
`;

const Socials = styled.div``;

const Title = styled.h1`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  line-height: 1.2;
  position: relative;
  font-weight: 500;
`;

const TitleLink = styled.a`
  font-size: clamp(1.8rem, 4vw, 3.5rem);
  line-height: 1.2;
  position: relative;
  font-weight: 300;
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  gap: 0.5rem;
`;

const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: #000;
  transform-origin: left;
`;

export {
  Footer,
  Content,
  Underline,
  Title,
  Wrap,
  TitleLink,
  LinkWrapper,
  Socials,
  Flex,
};
