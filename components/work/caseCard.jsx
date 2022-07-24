import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MobileText,
  Overlay,
  OverlayText,
  TextBetween,
  Year,
} from "./styledWork";
import { RevealUp } from "../hooks/animation";
import { IoEllipse } from "react-icons/io5";
export const CaseCard = ({
  alt,
  className,
  src,
  href,
  title,
  subtitle,
  year,
  id,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <RevealUp className={className} triggerOnce={true}>
        <Link scroll={false} href={href}>
          <a id={id}>
            <motion.div
              exit={{ opacity: 0 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ borderRadius: isHovered ? "0rem" : "1.5rem" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
              className="relative w-full  h-[80vh] overflow-hidden "
            >
              <Overlay
                transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.8 }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                exit={{ opactiy: 0 }}
              >
                <TextBetween>
                  <OverlayText small>
                    {subtitle}
                    <IoEllipse className="w-4 h-4" />
                  </OverlayText>
                  <Year>{year}</Year>
                </TextBetween>

                <motion.div
                  className="self-center"
                  exit={{ opacity: 0 }}
                  animate={{
                    y: isHovered ? -"10" : 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <OverlayText>{title}</OverlayText>
                </motion.div>
              </Overlay>

              <Image
                priority={true}
                className=" object-cover "
                layout="fill"
                alt={alt}
                src={src}
              />
            </motion.div>

            <div className=" block md:hidden ">
              <MobileText large>{title}</MobileText>
              <MobileText small gray>
                {subtitle}
              </MobileText>
            </div>
          </a>
        </Link>
      </RevealUp>
    </>
  );
};
