import { motion } from "framer-motion";
import CopyRight from "./copyRight";

const Header = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <CopyRight />
      </motion.div>
    </>
  );
};

export default Header;
