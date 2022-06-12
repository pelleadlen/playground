import HeroText from "./heroText";

import Header from "../Header/Header";
import { Parallax } from "react-scroll-parallax";
import { HomeWrapper } from "../../styles/StyledHome";

const Home = () => {
  return (
    <>
      <Parallax speed={-10}>
        <HomeWrapper id="home">
          <Header />
          <HeroText className="pb-12" />
        </HomeWrapper>
      </Parallax>
    </>
  );
};
export default Home;
