import styled from "styled-components";
import { IoArrowForwardOutline } from "react-icons/io5";

export const MoreWork = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  @media (max-width: 1024px) {
    padding: 0 1rem;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  font-size: clamp(1.5rem, 10vw, 4.8rem);
  font-weight: 400;
  letter-spacing: 0.01em;
  padding-bottom: 1rem;
`;

export const CaseText = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom-width: 2px;
  padding: 2rem 0;
  align-items: center;
  justify-content: space-between;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 300;
  h4 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  h6 {
    font-size: 1rem;
    line-height: 1.5rem;
    color: rgb(107 114 128);
  }
`;

export const Arrow = styled(IoArrowForwardOutline)`
  width: 2.5rem;
  height: 2.5rem;
`;
