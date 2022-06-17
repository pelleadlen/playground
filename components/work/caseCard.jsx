import Image from "next/image";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  MobileText,
  Overlay,
  OverlayText,
  Cursor,
} from "../../styles/styledWork";

export const CaseCard = ({ alt, src, href, title, subtitle, cursor }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 1,
    },
    initial: {
      x: mousePosition.x,
      y: mousePosition.y,
      opacity: 0,
    },
  };

  return (
    <Link scroll={false} href={href}>
      <a>
        <motion.div
          transition={{ ease: [0.65, 0.05, 0.36, 1] }}
          initial={{ borderRadius: "1.5rem" }}
          whileHover={{ borderRadius: 0 }}
          className="relative w-full cursor-none  h-[80vh] lg:h-screen overflow-hidden"
        >
          <Overlay
            transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.3 }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            exit={{ opactiy: 0 }}
          >
            <Cursor
              exit={{ opactiy: 0 }}
              initial="initial"
              variants={variants}
              animate="default"
            >
              {cursor}
            </Cursor>
            <div className="flex flex-col p-4">
              <OverlayText>{title}</OverlayText>
              <OverlayText small>{subtitle}</OverlayText>
            </div>
          </Overlay>

          <Image className=" object-cover" layout="fill" alt={alt} src={src} />
        </motion.div>

        <div className=" block md:hidden ">
          <MobileText large>{title}</MobileText>
          <MobileText small>{subtitle}</MobileText>
        </div>
      </a>
    </Link>
  );
};
