import styled from "styled-components";

<section className="flex flex-col  bg-[#f4f0f0] rounded-tl-3xl rounded-tr-3xl h-screen w-full items-center  justify-center text-5xl md:text-7xl lg:text-9xl leading-[88%] font-medium"></section>;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.off};
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const TextXL = styled.h1`
  font-size: clamp(3rem, 9vw, 7.2rem);
  line-height: 88%;
  font-weight: 450;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  cursor: pointer;
`;
