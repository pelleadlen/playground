import { AboutWrapper } from "./Components/About/aboutWrapper";
import { motion } from "framer-motion";
import { Profile } from "./Components/About/profile";
import { Slogan } from "./Components/About/slogan";
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

const About = () => {
  return (
    <>
      <Head>
        <title>About me</title>
        <meta
          name="description"
          content="What's new and exiting in digital product design?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ScrollerMotion>
        <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
          <motion.div variants={fadeInUp}>
            <AboutWrapper>
              <Slogan />

              <Profile />
            </AboutWrapper>
          </motion.div>
        </motion.div>
      </ScrollerMotion>
    </>
  );
};

export default About;
