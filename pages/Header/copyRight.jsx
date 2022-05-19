import { motion } from "framer-motion";
import { useState } from "react";

const copyRight = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onClick={() => setIsHovered(true)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{ width: isHovered ? 252 : 180 }}
      className="flex  items-center bg-body pt-6 pb-6 gap-2"
    >
      <motion.div
        transition={{ duration: 0.1, type: "spring", stiffness: 50 }}
        animate={{ rotate: isHovered ? 360 : 0 }}
        className="text-2xl flex  font-light w-6 h-8 bg-body z-50 "
      >
        &copy;
      </motion.div>
      <motion.div
        transition={{ duration: 0.1, type: "spring", stiffness: 50 }}
        animate={{ x: isHovered ? -96 : 0 }}
        className="text-clip  font-light text-2xl whitespace-nowrap  overflow-hidden w-fit"
      >
        code by Pelle Adlén
      </motion.div>
    </motion.div>
  );
};

export default copyRight;