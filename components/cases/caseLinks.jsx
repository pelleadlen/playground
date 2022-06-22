import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useState } from "react";
import Image from "next/image";

const CaseLinks = ({ title, category, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href}>
      <a>
        <motion.div
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 50 }}
        >
          <div className="flex flex-row border-b-2  pb-8 pt-8 items-center justify-between">
            <div className="flex lg flex-col gap-4 font-light">
              <h4 className=" text-4xl">{title}</h4>
              <h6 className="text-base text-gray-500">{category}</h6>
            </div>

            <motion.div animate={{ rotate: isHovered ? 20 : 0 }}>
              <IoArrowForwardOutline className="w-10 h-10 -rotate-45 " />
            </motion.div>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default CaseLinks;
