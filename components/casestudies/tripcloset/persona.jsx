import {
  Container,
  Grid,
  Card,
  TopCard,
  RowTwoCard,
  SmallCards,
  Img,
  Title,
  PersonaInfo,
  PersonaContent,
  BackgroundInfo,
} from "./styled/styledPersona";

const NameAge = () => {
  return <Title>Michael Swift,32</Title>;
};

const PersonaInformation = (props) => {
  return (
    <>
      <PersonaInfo>
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <p>{props.subTitle}</p>
        </div>
      </PersonaInfo>
    </>
  );
};

const Persona = () => {
  return (
    <Container>
      <Grid>
        <TopCard>
          <PersonaContent>
            <NameAge />
            <PersonaInformation
              title="Occupation"
              subTitle="Digital marketing"
            />
            <PersonaInformation title="Status" subTitle="Single" />
            <PersonaInformation title="Location" subTitle="Traveling" />
            <PersonaInformation title="Tech Literte" subTitle="Good" />
          </PersonaContent>
        </TopCard>
        <TopCard>
          <Title>Background</Title>
          <BackgroundInfo>
            Michael is a digital nomad currently working with digital marketing
            at a finance startup fully remote. He loves to surf and visiting
            places with the best waves and coffeshops with lightning fast wi-fi.
          </BackgroundInfo>
        </TopCard>
        <RowTwoCard>
          <Img layout="fill" src="/Assets/Images/digital-nomad.jpg" />
        </RowTwoCard>

        <SmallCards>
          <Card>
            <Title>Core needs</Title>
            <ul>
              <li>Need to find quality products easily.</li>
              <li>Find best offers for products</li>
              <li>Be able to find products suitable for the location. </li>
              <li>Travel without unnecessary items.</li>
            </ul>
          </Card>
          <Card>
            <Title>Core needs</Title>
            <ul>
              <li>Need to find quality products easily.</li>
              <li>Find best offers for products</li>
              <li>Be able to find products suitable for the location. </li>
              <li>Travel without unnecessary items.</li>
            </ul>
          </Card>
        </SmallCards>
      </Grid>
    </Container>
  );
};

export default Persona;
