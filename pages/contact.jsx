import { motion } from "framer-motion";
import Head from "next/head";
import { ContactFooter } from "../Components/Contact/ContactFooter";
import { fadeInUp } from "../Components/Hooks/Animation";

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

      <motion.div
        exit={{ opacity: 0 }}
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <ContactFooter />
      </motion.div>
    </>
  );
};

export default Contact;
