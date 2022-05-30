import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className=" pb-40 md:pb-24"
    >
      <h1 className="flex flex-col text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight leading-none ">
        UX/UI designer <span>& developer</span>
        <span className="text-lg md:text-2xl pt-4 tracking-tight font-normal  ">
          — Pelle Adlén
        </span>
      </h1>
    </motion.div>
  );
};

export default HeroText;
