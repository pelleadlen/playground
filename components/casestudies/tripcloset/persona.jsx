import { RevealUp } from "../../hooks/animation";
import {
  Container,
  Grid,
  TopCard,
  RowTwoCard,
  Img,
  Title,
  PersonaInfo,
  PersonaContent,
  BackgroundInfo,
  SmallCardTop,
  SmallCardBottom,
  Introduction,
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
      <RevealUp cascade={true}>
        <Introduction>
          <div>
            <h3>User Persona</h3>
            <p>
              To better understand how to design for users who are constantly
              traveling and are in need of clothing, User Personas were created.
              Below is a brief version of Michael's persona, who is made up by
              combining all of my interviewees. He was used to understand a user
              who would care more about renting clothes instead of buying new
              ones for a short period of time.
            </p>
          </div>
        </Introduction>

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

          <TopCard left>
            <Title>Background</Title>
            <BackgroundInfo>
              Michael is a digital nomad currently working with digital
              marketing at a finance startup fully remote. He loves to surf and
              visiting places with the best waves and coffeshops with lightning
              fast wi-fi.
            </BackgroundInfo>
          </TopCard>

          <RowTwoCard>
            <Img
              alt="digital nomad working with computer on the balcony"
              layout="fill"
              src="/Assets/Images/digital-nomad.jpg"
            />
          </RowTwoCard>
          <SmallCardTop>
            <Title>Core needs</Title>
            <ul>
              <li>Need to find quality products easily.</li>
              <li>Find best offers for products</li>
              <li>Be able to find products suitable for the location. </li>
              <li>Travel without unnecessary items.</li>
            </ul>
          </SmallCardTop>
          <SmallCardBottom>
            <Title>Frustrations</Title>
            <ul>
              <li>Needs to buy new clothes all the time.</li>
              <li>Get’s tired of clothing fast.</li>
              <li>Poor rental services and description of products </li>
              <li>Hard to return products in new countries.</li>
            </ul>
          </SmallCardBottom>
        </Grid>
      </RevealUp>
    </Container>
  );
};

export default Persona;
