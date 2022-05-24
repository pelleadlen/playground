import { Footer } from "./footer";
import { motion } from "framer-motion";

export const ContactFooter = () => {
  return (
    <motion.div className=" flex flex-col justify-between overflow-hidden w-screen h-screen ">
      <div className=" flex flex-col gap-4 w-full h-full items-center justify-center  ">
        <h3 className=" font-medium text-5xl lg:text-9xl">Say hi!</h3>
        <a
          href="mailto:pelleadlen@gmail.com"
          className=" text-xl lg:text-3xl tracking-wide text-gray-500 font-light  "
        >
          pelleadlen@gmail.com
        </a>
      </div>
      <Footer className={` mb-8`} />
    </motion.div>
  );
};
