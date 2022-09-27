import Link from "next/link";
import { IoArrowBackSharp } from "react-icons/io5";
import styled from "styled-components";
import { motion } from "framer-motion";

const ArrowIcon = styled(IoArrowBackSharp)`
  height: 1rem;
  width: 1rem;
`;

const ArrowWrapper = styled.div`
  padding: 0.5rem;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  transition: background-color 200ms;
  border-radius: 0.5rem;
  &:hover {
    background-color: hsl(210 98.8% 14.4% / 0.055);
  }
  color: ${(props) => props.theme.fontColor};
  @media only screen and (max-width: 640px) {
    left: 1rem;
  }
`;

const Arrow = () => {
  return (
    <Link scroll={false} href="/" as="/">
      <ArrowWrapper>
        <motion.div whileTap={{ x: -4 }}>
          <ArrowIcon />
        </motion.div>
      </ArrowWrapper>
    </Link>
  );
};

export default Arrow;
