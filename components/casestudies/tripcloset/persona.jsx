import styled from "styled-components";
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
  border-radius: 1.5rem;
  background-color: ${(props) => props.theme.bgWhite};
  box-shadow: ${(props) => props.theme.shadow}; ;
`;

const TopCard = styled(Card)`
  grid-column: span 6 / span 6;
`;

const RowTwoCard = styled(Card)`
  grid-row-start: 2;
  grid-column: span 6 / span 6;
`;

const SmallCards = styled.div`
  grid-column: span 6 / span 6;
  grid-template-rows: repeat(2, minmax(0, 1fr));
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
`;

const Persona = () => {
  return (
    <Container>
      <Grid>
        <TopCard />
        <TopCard />
        <RowTwoCard />
        <SmallCards>
          <Card />
          <Card />
        </SmallCards>
      </Grid>
    </Container>
  );
};

export default Persona;
