import styled from "styled-components";
import { motion, Reorder } from "framer-motion";
import { AiOutlineEnter } from "react-icons/ai";

export const Buttons = styled(motion.div)`
  position: absolute;
  left: 2rem;
  top: 3rem;
  @media (max-width: 569px) {
  }
`;

export const Input = styled.input`
  box-shadow: ${(props) => props.theme.shadow};

  padding: 1rem 1.5rem;
  width: 300px;
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.textGray};
  &:focus {
    outline-color: rgba(82, 24, 250, 0.7);
  }
`;

export const FormWrapper = styled(motion.div)`
  height: 100%;
  width: 100%;
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  position: relative;
`;

export const Button = styled.button``;

export const Enter = styled(AiOutlineEnter)`
  width: 2rem;
  height: 1.5rem;
  position: absolute;
  right: 0.5rem;
  bottom: 1rem;

  margin-left: 0.5rem;
  color: ${(props) => props.theme.textGray};
  opacity: 0.5;
  z-index: 5;
  position: absolute;
`;

export const Backdrop = styled(motion.div)`
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  backdrop-filter: blur(2px);
  background-color: #000;
  opacity: 0.4;
`;

export const Todos = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  width: clamp(250px, 40vw, 400px);

  padding: 1rem;
  gap: 0.5rem;
  border: 1px solid ${(props) => props.theme.textGray};

  li {
    font-size: 1rem;
    font-weight: 400;
  }
  input[type="checkbox"] {
    width: 1rem;
    height: 1rem;
    accent-color: black;
    &:checked {
      background-color: black;
      color: white;
    }
  }
`;

export const Ul = styled(motion.ul)`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: absolute;
  bottom: 50%;
  left: 50%;
  top: 10rem;
  transform: translate(-50%, -50%);
`;
