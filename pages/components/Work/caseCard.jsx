import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export const CaseCard = ({
  alt,
  src,
  title,
  subTitle,
  buttonText,
  onClick,
  layoutId,
  href,
}) => {
  return (
    <motion.div onClick={onClick} className="flex flex-col pl-6 pr-6 pt-6  ">
      <Link href={href}>
        <a>
          <div className="relative w-full h-[60vh] ">
            <Image
              blur="true"
              className=" object-cover rounded-3xl w-full h-full "
              layout="fill"
              alt={alt}
              src={src}
            />

            <button
              className="absolute bottom-4 right-4 pb-2 pt-2 pl-4 pr-4 rounded-3xl text-black bg-white text-lg font-medium  border-2 border-black 
        transition ease-in-out duration-300 hover:bg-black hover:text-white "
            >
              {buttonText}
            </button>
          </div>

          <div className="flex flex-col pl-[2px] pt-4">
            <p className=" text-2xl font-light tracking-tight">{title}</p>
            <p className=" text-gray-500 text-2xl font-light tracking-tight">
              {subTitle}
            </p>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};
