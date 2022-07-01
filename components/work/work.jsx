import { WorkWrapper, Grid } from "../../styles/styledWork";
import { CaseCard } from "./caseCard";
import { SelectedWorkTitle } from "./selectedWorkTitle";

const Work = () => {
  return (
    <>
      <WorkWrapper name="work" id="work">
        <SelectedWorkTitle />
        <Grid>
          <CaseCard
            title="Trip closet"
            subtitle="Product design"
            layoutId="page"
            alt="trip closet mockups of all screens"
            src="/Assets/Images/tripcloset-banner.png"
            href="/tripCloset"
            cursor="View casestudy"
            id='TripCloset'
          />

          <CaseCard
            alt="Fourtrack mockup of macbook pro"
            src="/Assets/Images/fourtrack-banner.png"
            title="Fourtrack"
            subtitle="Product design"
            buttonText="view case"
            href="/fourtrack"
            cursor="View project"
            id='fourtrack'
          />

          <CaseCard
            alt="macbook pro with redesigned ourlegacy homepage"
            src="/Assets/Images/ourlegacy-banner.png"
            title="Our legacy"
            subtitle="redesign"
            buttonText="view case"
            href="/ourlegacy"
            cursor="View project"
            id='ourlegacy'
          />
        </Grid>
      </WorkWrapper>
    </>
  );
};

export default Work;
