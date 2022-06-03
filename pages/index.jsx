import HeroText from "../Components/Home/heroText";
import { Home } from "../Components/Home/homeWrapper";
import { fadeInUp } from "../Components/Hooks/Animation";
import { motion } from "framer-motion";
import Header from "../Components/Header/header";
import Work from "../Components/Work/work";
import About from "../Components/About/about";
import Contact from "../Components/Contact/contact";

function index() {
  return (
    <>
      <motion.main
        className="h-fit overflow-hidden"
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
      >
        <motion.div variants={fadeInUp}>
          <Home id="home">
            <Header />
            <HeroText className="pb-12" />
          </Home>
          <Work id="work" />
          <About id="about" />
          <Contact id="contact" />
        </motion.div>
      </motion.main>
    </>
  );
}
export default index;
