import Image from "next/image";
import useMouse from "@react-hook/mouse-position";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MobileText, Overlay, OverlayText, Cursor } from "./styledWork";
import { RevealUp } from "../hooks/animation";

export const CaseCard = ({ alt, src, href, title, subtitle, cursor, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 60,
  });

  let mouseXPosition = 0;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        duration: 0.01,
      },
    },
  };

  return (
    <>
      <RevealUp triggerOnce={true}>
        <Link scroll={false} href={href}>
          <a id={id}>
            <motion.div
              exit={{ opacity: 0 }}
              ref={ref}
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
                <Cursor
                  exit={{ opactiy: 0 }}
                  variants={variants}
                  animate="default"
                >
                  {cursor}
                </Cursor>

                <motion.div
                  exit={{ opacity: 0 }}
                  animate={{
                    y: isHovered ? -"15" : 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className="flex w-full justify-center pb-6 "
                >
                  <OverlayText>{title}</OverlayText>
                  {/* <OverlayText small>{subtitle}</OverlayText> */}
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
              <MobileText small>{subtitle}</MobileText>
            </div>
          </a>
        </Link>
      </RevealUp>
    </>
  );
};
