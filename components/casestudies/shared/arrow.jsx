import Link from "next/link";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";

const Back = styled(IoArrowBackCircleSharp)`
  width: 2.25rem;
  height: 2.25rem;
  position: fixed;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  z-index: 50;
  mix-blend-mode: difference;
  color: ${(props) => props.theme.textWhite};
  @media (min-width: 768px) {
    top: 1.5rem;
    right: 1.5rem;
  }
`;

const Arrow = ({ href }) => {
  return (
    <Link scroll={false} href={href} as="/">
      <a>
        <Back />
      </a>
    </Link>
  );
};

export default Arrow;
