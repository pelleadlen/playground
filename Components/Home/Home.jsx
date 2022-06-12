import HeroText from "./heroText";

import Header from "../header/header";
import { HomeWrapper } from "../../styles/styledHome";

const Home = () => {
  return (
    <>
      <HomeWrapper id="home">
        <Header />
        <HeroText className="pb-12" />
      </HomeWrapper>
    </>
  );
};
export default Home;
