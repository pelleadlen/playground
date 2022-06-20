import Link from "next/link";
import { motion } from "framer-motion";
import { IoArrowForwardOutline } from "react-icons/io5";

const CaseLinks = ({ title, category, href, className }) => {
  return (
    <Link href={href}>
      <a>
        <motion.div whileHover={{ scale: 1.03 }} className={className}>
          <div className="flex flex-row border-b-2 p-8 items-center justify-between">
            <div className="flex lg flex-col gap-4 font-light">
              <h4 className=" text-4xl">{title}</h4>
              <h6 className="text-base text-gray-500">{category}</h6>
            </div>

            <IoArrowForwardOutline className="w-10 h-10 " />
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default CaseLinks;
