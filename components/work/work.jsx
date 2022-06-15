import { WorkWrapper } from "../../styles/styledWork";
import { CaseCard } from "./caseCard";
import { SelectedWorkTitle } from "./selectedWorkTitle";

const Work = () => {
  return (
    <>
      <WorkWrapper id="work">
        <SelectedWorkTitle />

        <CaseCard
          layoutId="page"
          alt="trip closet mockups of all screens"
          src="/Assets/Images/tripcloset-banner.png"
          title="Trip Closet"
          subTitle="Product design"
          buttonText="view casestudy"
          href="/tripCloset"
        />

        <CaseCard
          alt="Fourtrack mockup of macbook pro"
          src="/Assets/Images/fourtrack-banner.png"
          title="Fourtrack"
          subTitle="Product design"
          buttonText="view case"
          href="/"
        />
        <CaseCard
          alt="macbook pro with redesigned ourlegacy homepage"
          src="/Assets/Images/ourlegacy-banner.png"
          title="Our legacy"
          subTitle="redesign"
          buttonText="view case"
          href="/"
        />
      </WorkWrapper>
    </>
  );
};

export default Work;
