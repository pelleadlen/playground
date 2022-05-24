import { ContactFooter } from "./Components/Contact/contact";
import { motion } from "framer-motion";
import Head from "next/head";

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
      duration: 1,
      ease: easing,
    },
  },
};

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta
          name="description"
          content="Let's work together! Available for freelancing and fulltime employment"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.div exit={{ opacity: 0 }} initial="initial" animate="animate">
        <motion.div variants={fadeInUp}>
          <ContactFooter />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Contact;
