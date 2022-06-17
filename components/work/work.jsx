import { WorkWrapper, Grid } from "../../styles/styledWork";
import { CaseCard } from "./caseCard";
import { SelectedWorkTitle } from "./selectedWorkTitle";

const Work = () => {
  return (
    <>
      <WorkWrapper id="work">
        <SelectedWorkTitle />
        <Grid>
          <div className=" col-span-2 row-start-1">
            <CaseCard
              title="Trip closet"
              subtitle="Product design"
              layoutId="page"
              alt="trip closet mockups of all screens"
              src="/Assets/Images/tripcloset-banner.png"
              href="/tripCloset"
              cursor="View casestudy"
            />
          </div>
          <div className="col-span-1 row-start-2">
            <CaseCard
              alt="Fourtrack mockup of macbook pro"
              src="/Assets/Images/fourtrack-banner.png"
              title="Fourtrack"
              subtitle="Product design"
              buttonText="view case"
              href="/"
              cursor="View project"
            />
          </div>
          <div className="col-span-1 row-start-3 md:row-start-2">
            <CaseCard
              alt="macbook pro with redesigned ourlegacy homepage"
              src="/Assets/Images/ourlegacy-banner.png"
              title="Our legacy"
              subtitle="redesign"
              buttonText="view case"
              href="/"
              cursor="View project"
            />
          </div>
        </Grid>
      </WorkWrapper>
    </>
  );
};

export default Work;
