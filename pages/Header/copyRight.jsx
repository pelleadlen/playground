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
      initial={{ width: 0 }}
      className="flex  items-center overflow-hidden pt-6 pb-6 gap-2"
    >
      <motion.div
        transition={{ duration: 0.1, type: "spring", stiffness: 60 }}
        animate={{ rotate: isHovered ? 360 : 0 }}
        className="text-2xl flex  font-light w-6 h-8 bg-body  "
      >
        &copy;
      </motion.div>
      <div className="overflow-hidden">
        <motion.div
          transition={{ duration: 0.1, type: "spring", stiffness: 50 }}
          animate={{ x: isHovered ? -96 : 0 }}
          initial={{ x: 0 }}
          className="text-clip   font-light text-2xl whitespace-nowrap  overflow-hidden w-fit"
        >
          code by Pelle Adlén
        </motion.div>
      </div>
    </motion.div>
  );
};

export default copyRight;
