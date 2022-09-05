import styled from "styled-components";
import { ProblemTextBox } from "./styledTripCloset";

export const ProcessSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 6rem;
  margin: 1rem;
`;

export const TextBox = styled(ProblemTextBox)`
  justify-content: flex-start;
`;
