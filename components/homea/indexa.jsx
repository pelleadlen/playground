import HeroText from "./heroTexta";
import Header from "../headera/headera";
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
