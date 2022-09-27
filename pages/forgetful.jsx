import Head from "next/head";
import AppSection from "../components/casestudies/forgetful/appSection";
import Hero from "../components/casestudies/forgetful/hero";
import ReorderSection from "../components/casestudies/forgetful/reorderSection";
import SectionTwo from "../components/casestudies/forgetful/sectionTwo";
import SplashSection from "../components/casestudies/forgetful/splashSection";
import StaggerSection from "../components/casestudies/forgetful/staggerSection";
import { Main } from "../components/casestudies/forgetful/styled/styledForgetful";
import { RevealUp } from "../components/hooks/animation";
import {
  Wrapper,
  Title,
} from "../components/casestudies/shared/styled/styledCaseLinks";
import { forgetfulCases } from "../components/casestudies/shared/caseLinksData";
import CaseLinks from "../components/casestudies/shared/caseLinks";
import { MoreWork } from "../components/casestudies/shared/moreWork";
import Arrow from "../components/casestudies/shared/arrow";
const forgetful = () => {
  const mainIntro = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Forgetful</title>
        <meta
          name="description"
          content="Should designers code? A casestudy about micro interactions by designer Pelle Adlén"
        />
      </Head>
      <Arrow />
      <RevealUp triggerOnce={true}>
        <Main
          variants={mainIntro}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <Hero text="Should designers code?" />

          <SectionTwo />
          <SplashSection />
          <StaggerSection />
          <ReorderSection />
          <AppSection />
          <MoreWork filterOutID={3} />
        </Main>
      </RevealUp>
    </>
  );
};
forgetful.displayName = "forgetful";
export default forgetful;
