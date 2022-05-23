import HeroText from "./Components/Home/heroText";
import NavBar from "./Components/Navigation/navBar";
import Header from "./Components/Header/copyRight";
import { Home } from "./Components/Home/homeWrapper";
import { Navigation } from "./Components/Navigation/navigation";
import { Work } from "./Components/Work/workWrapper";
import { CaseCard } from "./Components/Work/caseCard";
import { SelectedWorkTitle } from "./Components/Work/selectedWorkTitle";
import { About } from "./Components/About/aboutWrapper";
import { Slogan } from "./Components/About/slogan";
import { Profile } from "./Components/About/profile";
import { Contact } from "./Components/Contact/contact";
import Link from "next/link";

export default function index() {
  return (
    <>
      <main className="ml-6 mr-6">
        <Navigation>
          <NavBar />
        </Navigation>

        <Home id="home">
          <Header />
          <HeroText className="pb-12" />
        </Home>

        <Work id="work">
          <SelectedWorkTitle />

          <Link href="/tripCloset">
            <a>
              <CaseCard
                alt="trip closet mockups of all screens"
                src="/Assets/Images/tripcloset-banner.png"
                title="Trip Closet"
                subTitle="Product design"
                buttonText="view casestudy"
              />
            </a>
          </Link>

          <CaseCard
            alt="Fourtrack mockup of macbook pro"
            src="/Assets/Images/fourtrack-banner.png"
            title="Fourtrack"
            subTitle="Product design"
            buttonText="view case"
          />
          <CaseCard
            alt="macbook pro with redesigned ourlegacy homepage"
            src="/Assets/Images/ourlegacy-banner.png"
            title="Our legacy"
            subTitle="redesign"
            buttonText="view case"
          />
        </Work>

        <About id="about">
          <Slogan />
          <Profile />
        </About>

        <Contact id="contact" />
      </main>
    </>
  );
}
