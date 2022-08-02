import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  padding: 0 1.5rem 8rem 1.5rem;
  background: ${(props) => props.theme.bgWhite}; ;
`;

const Introduction = styled.div`
  height: 80vh;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
  }
  h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  p {
    font-size: clamp(1rem, 4vw, 1.5rem);
    line-height: 1.6;
    max-width: 52ch;

    font-weight: 300;
  }
`;

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-rows: auto;
  max-width: 1440px;
  gap: 1.5rem;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Card = styled.div`
  padding: 2.5rem 2.5rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.bgWhite};
  box-shadow: ${(props) => props.theme.shadow};
  ul {
    list-style-type: disc;
  }
  li {
    font-size: clamp(1rem, 4vw, 1.5rem);
    color: ${(props) => props.theme.textGray};
    margin: 0.5rem 0;
    font-weight: 300;
  }
`;

const TopCard = styled(Card)`
  display: flex;
  flex-direction: column;
`;

const PersonaContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 1rem;
`;

const Title = styled.h3`
  font-size: clamp(1.5rem, 8vw, 2.5rem);
  line-height: 133%;
  font-weight: 340;
  padding-bottom: 1.5rem;
`;

const PersonaInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: clamp(1rem, 4vw, 1.5rem);
  color: ${(props) => props.theme.textGray};
  font-weight: 300;

  div {
    width: 100%;
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
  position: relative;
  grid-row: 2 / 4;
  min-height: 400px;
`;

const SmallCardTop = styled(Card)``;

const SmallCardBottom = styled(Card)``;

const Img = styled(Image)`
  border-radius: 1.5rem;
  object-fit: cover;
  min-width: 800px;
  height: 700px;
`;

export {
  SmallCardBottom,
  SmallCardTop,
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
  Introduction,
};
