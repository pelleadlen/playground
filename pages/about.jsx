import { AboutWrapper } from "./Components/About/aboutWrapper";
import { motion } from "framer-motion";
import { Profile } from "./Components/About/profile";
import { Slogan } from "./Components/About/slogan";
import Head from "next/head";
import { ScrollerMotion } from "scroller-motion";
import { fadeInUp } from "./Components/Hooks/Animation";

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
        <motion.div
          variants={fadeInUp}
          exit={{ opacity: 0 }}
          initial="initial"
          animate="animate"
        >
          <AboutWrapper>
            <Slogan />

            <Profile />
          </AboutWrapper>
        </motion.div>
      </ScrollerMotion>
    </>
  );
};

export default About;
