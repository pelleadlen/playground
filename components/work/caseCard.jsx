import Image from "next/image";
import useMouse from "@react-hook/mouse-position";
import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MobileText,
  Overlay,
  OverlayText,
  Cursor,
} from "../../styles/styledWork";
import { RevealUp } from "../hooks/animation";

export const CaseCard = ({ alt, src, href, title, subtitle, cursor, id }) => {
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
              initial={{ borderRadius: "1.5rem" }}
              transition={{ ease: [0.65, 0.05, 0.36, 1] }}
              className="relative w-full cursor-none h-[80vh] overflow-hidden "
            >
              <Overlay
                transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.3 }}
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

                <motion.div exit={{ opacity: 0 }} className="flex flex-col p-4">
                  <OverlayText>{title}</OverlayText>
                  <OverlayText small>{subtitle}</OverlayText>
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
