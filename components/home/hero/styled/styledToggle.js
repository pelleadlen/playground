import styled from "styled-components";
import { motion } from "framer-motion";

export const ToggleSwitch = styled.div`
  width: 4em;
  height: 2em;
  border: 1px solid blue;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 4px;
`;

export const ToggleBtn = styled(motion.div)`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid black;
  border-radius: 50%;
`;
