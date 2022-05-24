import HeroText from "./Components/Home/heroText";

import Header from "./Components/Header/copyRight";
import { Home } from "./Components/Home/homeWrapper";

import { motion } from "framer-motion";

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

export default function index() {
  return (
    <>
      <motion.main
        className="h-fit overflow-hidden"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <motion.div variants={fadeInUp}>
          <Home id="home" className="scroll-section">
            <Header />
            <HeroText className="pb-12" />
          </Home>
        </motion.div>
      </motion.main>
    </>
  );
}
