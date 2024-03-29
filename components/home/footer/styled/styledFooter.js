import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.section`
  height: 100vh;
  display: flex;
  align-items: flex-end;
  width: 100%;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  background-color: ${(props) => props.theme.bgGray};
  @media only screen and (max-width: 640px) {
    height: 90vh;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  gap: 1rem;
  height: 75%;
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
  width: 78%;
  gap: 0.5rem;
  @media (max-width: 500px) {
    gap: 1rem;
    width: 90%;
  }
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
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.2;
  position: relative;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const TitleLink = styled(motion.a)`
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.2;

  font-weight: 300;
  cursor: pointer;
`;

export const Underline = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 4px;
  background-color: ${(props) => props.theme.underLine};
  transform-origin: left;
  @media (max-width: 500px) {
    height: 2px;
  }
`;
