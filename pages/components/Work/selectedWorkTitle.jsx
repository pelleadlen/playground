import { motion } from "framer-motion";

export const SelectedWorkTitle = () => {
  return (
    <motion.div
      initial={{ y: 10 }}
      animate={{ y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
      className="flex flex-col items-center justify-center text-5xl lg:text-8xl leading-[80%] w-screen h-[80vh] font-medium tracking-tight "
    >
      <h2>Selected</h2>
      <h2>work</h2>
      <p className=" text-base lg:text-lg font-light tracking-normal pt-2 text-gray-500">
        below is a few of my most recent projects
      </p>
    </motion.div>
  );
};
