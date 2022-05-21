import HeroText from "./Components/Home/heroText";
import NavBar from "./Components/Navigation/navBar";
import Header from "./Components/Header/copyRight";
import { Home } from "./Components/Home/homeWrapper";
import { Navigation } from "./Components/Navigation/navigation";
import { Work } from "./Components/Work/workWrapper";
import { CaseCard } from "./Components/Work/caseCard";
import tripCloset from "../public/Assets/Images/tripcloset-banner.png";
import fourTrack from "../public/Assets/Images/fourtrack-banner.png";
import ourLegacy from "../public/Assets/Images/ourlegacy-banner.png";
import { SelectedWorkTitle } from "./Components/Work/selectedWorkTitle";
import { About, AboutWrapper } from "./Components/About/aboutWrapper";
import { Slogan } from "./Components/About/slogan";
import { Profile } from "./Components/About/profile";
import { Contact } from "./Components/Contact/contact";

export default function index() {
  return (
    <>
      <Navigation>
        <NavBar />
      </Navigation>

      <Home id="home">
        <Header />
        <HeroText className="pb-12" />
      </Home>

      <Work id="work">
        <SelectedWorkTitle />
        <CaseCard
          alt="trip closet mockups of all screens"
          src={tripCloset}
          title="Trip Closet"
          subTitle="Product design"
          buttonText="view casestudy"
        />
        <CaseCard
          alt="Fourtrack mockup of macbook pro"
          src={fourTrack}
          title="Fourtrack"
          subTitle="Product design"
          buttonText="view case"
        />
        <CaseCard
          alt="macbook pro with redesigned ourlegacy homepage"
          src={ourLegacy}
          title="Our legacy"
          subTitle="redesign"
          buttonText="view case"
        />
      </Work>

      <About id="about">
        <Slogan />
        <Profile />
      </About>

      <Contact />
    </>
  );
}
