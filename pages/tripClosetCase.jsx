import { motion, AnimatePresence } from "framer-motion";

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const TripClosetCase = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        variants={backdrop}
        animate="visible"
        initial="hidden"
        className="backdrop"
      >
        <h1> hey </h1>
      </motion.div>
    </AnimatePresence>
  );
};

export default TripClosetCase;
