import Image from "next/image";
import { FadeIn } from "../hook/fadeIn";
import Link from "next/link";
export const CaseCard = ({ alt, src, title, subTitle, buttonText, href }) => {
  return (
    <FadeIn className="flex flex-col pt-6 pl-6 pr-6 pb-12">
      <Link scroll={false} href={href}>
        <a>
          <div className="relative w-full h-[60vh] overflow-hidden rounded-3xl  ">
            <Image
              blur="true"
              className=" transition duration-500 ease-in-out hover:scale-105 object-cover  w-full h-full "
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
    </FadeIn>
  );
};
