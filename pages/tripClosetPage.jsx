import { motion } from "framer-motion";
import Image from "next/image";
import tripCloset from "../public/Assets/Images/tripcloset-banner.png";
import Link from "next/link";

const exit = {
  exit: {
    opacity: 0,
    transition: {
      duration: 3,
    },
  },
};

const TripClosetPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3 }}
      exit="exit"
      layoutId="trip"
      className="w-screen h-screen bg-white flex justify-center text-7xl"
    >
      <Image
        blur="true"
        className=" object-cover rounded-3xl w-full h-full "
        src={tripCloset}
        width={500}
        height={500}
      />
      <Link href="/">
        <button>close</button>
      </Link>
    </motion.div>
  );
};

export default TripClosetPage;
