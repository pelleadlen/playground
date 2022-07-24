import styled from "styled-components";
import Clock from "react-live-clock";

export const Wrapper = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 0.75rem;
    padding-bottom: 1.5rem;
  }
`;

export const Heading = styled.h3`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;

export const StyledClock = styled(Clock)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  text-decoration-line: underline;
`;
