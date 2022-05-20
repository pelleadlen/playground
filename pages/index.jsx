import HeroText from "./Components/Home/heroText";
import NavBar from "./Components/Navigation/navBar";
import Header from "./header/copyRight";
import { HomeWrapper } from "./Components/Home/homeWrapper";
import { Navigation } from "./Components/Navigation/navigation";
import { WorkWrapper } from "./Work/workWrapper";
import { CaseCard } from "./Work/caseCard";
import tripCloset from "../public/Assets/Images/tripcloset-banner.png";

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

      <WorkWrapper id="work">
        <CaseCard
          alt="trip closet mockups of all screens"
          src={tripCloset}
          title="Trip Closet"
          subTitle="Product design"
          buttonText="view casestudy"
        />
      </WorkWrapper>
    </>
  );
}
