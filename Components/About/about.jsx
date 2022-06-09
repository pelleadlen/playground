import { AboutWrapper } from "../../styles/StyledAbout";
import { Profile } from "./profile";
import { Slogan } from "./Slogan";

const About = () => {
  return (
    <>
      <AboutWrapper>
        <Slogan />
        <Profile />
      </AboutWrapper>
    </>
  );
};

export default About;
