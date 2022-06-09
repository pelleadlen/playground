import styled from "styled-components";

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  height: 100%;
  background-color: rgb(242 242 242);
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;
`;

const Wrap = styled.div`
  position: relative;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 3.5rem;
  position: relative;
  font-weight: 500;
`;

const TitleLink = styled.a`
  font-size: 3.5rem;
  line-height: 3.5rem;
  position: relative;
  font-weight: 300;
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

export { Footer, Content, Underline, Title, Wrap, TitleLink };
