import { motion } from "framer-motion";
import { CaseCard } from "./Components/Work/caseCard";
import { SelectedWorkTitle } from "./Components/Work/selectedWorkTitle";
import { WorkWrapper } from "./Components/Work/workWrapper";
import Head from "next/head";
import { ScrollerMotion } from "scroller-motion";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Work = () => {
  return (
    <>
      <Head>
        <title>Work</title>
        <meta
          name="description"
          content="some of my recent UX/UI and development work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <ScrollerMotion>
          <WorkWrapper>
            <motion.div variants={fadeInUp}>
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
            </motion.div>
          </WorkWrapper>
        </ScrollerMotion>
      </motion.div>
    </>
  );
};

export default Work;
