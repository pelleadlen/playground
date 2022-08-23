import Head from "next/head";
import AppSection from "../components/casestudies/forgetful/appSection";
import Hero from "../components/casestudies/forgetful/hero";
import ReorderSection from "../components/casestudies/forgetful/reorderSection";
import SectionTwo from "../components/casestudies/forgetful/sectionTwo";
import SplashSection from "../components/casestudies/forgetful/splashSection";
import StaggerSection from "../components/casestudies/forgetful/staggerSection";
import { Main } from "../components/casestudies/forgetful/styled/styledForgetful";
import Arrow from "../components/casestudies/shared/arrow";
import { RevealUp } from "../components/hooks/animation";
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
      <Arrow href="/" />
      <RevealUp>
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
        </Main>
      </RevealUp>
    </>
  );
};
forgetful.displayName = "forgetful";
export default forgetful;
