import HeroText from "./Components/Home/heroText";
import NavBar from "./Components/Navigation/navBar";
import Header from "./header/copyRight";
import { HomeWrapper } from "./Components/Home/homeWrapper";
import { Navigation } from "./Components/Navigation/navigation";
import { WorkWrapper } from "./Work/workWrapper";

export default function index() {
  return (
    <>
      <Navigation>
        <NavBar />
      </Navigation>

      <HomeWrapper id="home">
        <Header />
        <HeroText className="pb-12" />
      </HomeWrapper>

      <WorkWrapper></WorkWrapper>
    </>
  );
}
