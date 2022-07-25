import styled from "styled-components";
import Image from "next/image";

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.bgWhite};
  align-items: center;
  justify-content: center;
  padding: 3rem 1rem;
  width: 100vw;
  border-top-right-radius: 1.5rem;
  border-top-left-radius: 1.5rem;

  @media (min-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Paragraph = styled.p`
  font-size: clamp(1.25rem, 5vw, 2rem);
  line-height: 1.75rem;
  font-weight: 460;
  max-width: 56rem;
  line-height: 1.5;
  padding: 3rem 0;

  span {
    text-decoration-line: line-through;
    text-decoration-thickness: 4px;
    padding: 0 0.5rem;
  }
`;

export const ProfilePicture = styled.div`
  position: relative;
  max-width: 56rem;
  height: 80vh;
`;

export const Images = styled(Image)`
  object-fit: cover;
  border-radius: 1.5rem;
  width: 100%;
  height: 100%;
`;
