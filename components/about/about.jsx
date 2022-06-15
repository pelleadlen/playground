import { AboutWrapper } from "../../styles/styledAbouta";
import { Profile } from "./profile";
import { Slogan } from "./slogan";

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
