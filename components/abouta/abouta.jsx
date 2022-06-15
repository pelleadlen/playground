import { AboutWrapper } from "../../styles/StyledAbout";
import { Profile } from "./profilea";
import { Slogan } from "./slogana";

const About = () => {
  return (
    <>
      <AboutWrapper id="about">
        <Slogan />

        <Profile />
      </AboutWrapper>
    </>
  );
};

export default About;
