import { WorkWrapper, Grid } from "../../styles/styledWork";
import { CaseCard } from "./caseCard";
import { SelectedWorkTitle } from "./selectedWorkTitle";

const Work = () => {
  return (
    <>
      <WorkWrapper id="work">
        <SelectedWorkTitle />
        <Grid>
          <div className=" col-span-2">
            <CaseCard
              layoutId="page"
              alt="trip closet mockups of all screens"
              src="/Assets/Images/tripcloset-banner.png"
              href="/tripCloset"
            />
          </div>
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
        </Grid>
      </WorkWrapper>
    </>
  );
};

export default Work;
