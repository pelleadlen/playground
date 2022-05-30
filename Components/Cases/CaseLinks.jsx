import Link from "next/link";
import { motion } from "framer-motion";

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

            <svg
              className=" w-8 h-8 -rotate-45 "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 101 57"
            >
              <path
                d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                fill="#000"
                fillRule="evenodd"
              ></path>
            </svg>
          </div>
        </motion.div>
      </a>
    </Link>
  );
};

export default CaseLinks;
