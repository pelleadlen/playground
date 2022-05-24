import HeroText from "../Components/Home/heroText";

import { Home } from "../Components/Home/homeWrapper";
import { fadeInUp } from "../Components/Hooks/Animation";
import { motion } from "framer-motion";
import Header from "../Components/Header/header";

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
