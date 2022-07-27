import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 1.5rem;
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  max-width: 1440px;
  gap: 1.5rem;
  width: 100%;
  height: 100%;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  height: 100%;
  overflow: hidden;
  padding: 0 2.5rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.bgWhite};
  box-shadow: ${(props) => props.theme.shadow};
  ul {
    list-style-type: disc;
  }
  li {
    font-size: 1.5rem;
  }
`;

const TopCard = styled(Card)`
  grid-column: span 6 / span 6;
  display: flex;
  flex-direction: column;

  padding: 2.5rem 2.5rem 0 2.5rem;
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 9vw, 2.5rem);
  line-height: 133%;
  font-weight: 340;
  padding-bottom: 1.5rem;
`;

const PersonaContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
`;

const PersonaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: ${(props) => props.theme.textGray};
  font-weight: 300;

  div {
    width: 100%;
    display: flex;
  }
`;

const BackgroundInfo = styled.div`
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: ${(props) => props.theme.textGray};
  font-weight: 300;
  max-width: 40ch;
  line-height: 1.8;
`;

const RowTwoCard = styled(Card)`
  grid-row-start: 2;
  position: relative;
  grid-column: span 6 / span 6;
`;

const SmallCards = styled.div`
  grid-column: span 6 / span 6;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
`;

const Img = styled(Image)`
  border-radius: 1.5rem;
  object-fit: cover;
`;

export {
  SmallCards,
  RowTwoCard,
  TopCard,
  Card,
  Grid,
  Container,
  Img,
  Title,
  PersonaInfo,
  PersonaContent,
  BackgroundInfo,
};
