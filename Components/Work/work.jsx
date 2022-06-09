import { CaseCard } from "./caseCard";
import { SelectedWorkTitle } from "./selectedWorkTitle";
import { Parallax } from "react-scroll-parallax";
const Work = () => {
  return (
    <>
      <Parallax speed={5}>
        <div className="bg-white rounded-tl-3xl rounded-tr-3xl pb-12">
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
        </div>
      </Parallax>
    </>
  );
};

export default Work;
