import { RevealUp } from "../../hooks/animation";
import { ImgLarge } from "./imgLarge";
import {
  About,
  Card,
  Grid,
  Li,
  Name,
  Qa,
  Row,
  SpaceBetween,
  Status,
} from "./styled/styledPersona";
import { TextBox } from "./styled/styledProcess";
import { Paragraph, Title } from "./styled/styledTripCloset";

const personaData = [
  { name: "Michael Swift, ", age: "32", id: 1 },
  { status: "Occupation", about: "Digital marketing", id: 2 },
  { status: "Status", about: "Single", id: 3 },
  { status: "Location", about: "Traveling", id: 4 },
  { status: "Tech literte", about: "Good", id: 5 },
];

export const CardNameInfo = () => {
  return (
    <>
      <Card>
        <Qa>
          <About>
            {personaData.map(({ name, age, id }) => (
              <Name key={id}>
                {name}
                {age}
              </Name>
            ))}
            {personaData.map(({ status, id }) => (
              <Status key={id}>{status}</Status>
            ))}
          </About>
          <div className="self-end">
            {personaData.map(({ id, about }) => (
              <Status key={id}>{about}</Status>
            ))}
          </div>
        </Qa>
      </Card>
    </>
  );
};

export const Persona = () => {
  return (
    <RevealUp cascade={true} triggerOnce={true}>
      <Grid>
        <CardNameInfo />
        <Card flexStart>
          <TextBox>
            <Name>Background</Name>
            <Status>
              Michael is a digital nomad currently working with digital
              marketing at a finance startup fully remote. He loves to surf and
              visiting places with the best waves and coffeshops with lightning
              fast wi-fi.{" "}
            </Status>
          </TextBox>
        </Card>
        <Card noPadding>
          <ImgLarge
            halfHeight
            noMargin
            src={"/Assets/Images/digital-nomad.jpg"}
          />
        </Card>
        <Card>
          <SpaceBetween>
            <div>
              <Name>Core needs</Name>
              <ul>
                <Li as="li">Need to find quality products easily.</Li>
                <Li as="li">Find best offers for products.</Li>
                <Li as="li">
                  Be able to find products suitable for the location.{" "}
                </Li>
                <Li as="li">Travel without unnecessary items.</Li>
              </ul>
            </div>
            <div>
              <Name>Frustrations</Name>
              <ul>
                <Li as="li">Needs to buy clothes all the time.</Li>
                <Li as="li">Get’s tired of clothing fast.</Li>
                <Li as="li">
                  Poor rental services and description of products
                </Li>
                <Li as="li">Hard to return products in new countries.</Li>
              </ul>
            </div>
          </SpaceBetween>
        </Card>
      </Grid>
    </RevealUp>
  );
};
