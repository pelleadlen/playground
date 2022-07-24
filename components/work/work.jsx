import { WorkWrapper, Grid } from "./styledWork";
import { CaseCard } from "./caseCard";
import { SelectedWorkTitle } from "./selectedWorkTitle";

const Work = () => {
  return (
    <>
      <WorkWrapper name="work" id="work">
        <SelectedWorkTitle />
        <Grid>
          <CaseCard
            className=" col-span-1 lg:col-span-2"
            title="Trip closet"
            subtitle="Product design"
            layoutId="page"
            alt="trip closet mockups of all screens"
            src="/Assets/Images/tripcloset-banner.png"
            href="/tripCloset"
            id="TripCloset"
            year="2022"
          />

          <CaseCard
            alt="Fourtrack mockup of safari browser"
            src="/Assets/Images/fourtrack-browser-safari.png"
            title="Fourtrack"
            subtitle="Product design"
            buttonText="view case"
            href="/fourtrack"
            id="fourtrack"
            year="2022"
          />

          <CaseCard
            alt="macbook pro with redesigned ourlegacy homepage"
            src="/Assets/Images/ourlegacy-banner.png"
            title="Our legacy"
            subtitle="redesign"
            buttonText="view case"
            href="/ourlegacy"
            id="ourlegacy"
            year="2022"
          />
          <CaseCard
            className="col-span-1 lg:col-span-2"
            alt="mockup of macbook pro"
            src="/Assets/Images/forgetful-mockup-mac.png"
            title="Forgetful"
            subtitle="Micro interactions"
            buttonText="view case"
            href="/forgetful"
            id="forgetful"
            year="2022"
          />
        </Grid>
      </WorkWrapper>
    </>
  );
};

export default Work;
