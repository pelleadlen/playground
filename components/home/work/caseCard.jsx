import Image from "next/image";

import { useState } from "react";
import Link from "next/link";
import {
  Overlay,
  TextBetween,
  MobileText,
  OverlayText,
  Year,
  MobileTextBlock,
  ImageContainer,
  CenteredTitle,
} from "./styled/styledCaseCard";

import { IoEllipse } from "react-icons/io5";
import { RevealUp } from "../../hooks/animation";
export const CaseCard = ({
  alt,
  className,
  src,
  href,
  title,
  subtitle,
  year,
  id,
  box,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <RevealUp className={className} cascade={true} triggerOnce={true}>
        <Link scroll={false} href={href}>
          <a id={id}>
            <ImageContainer
              exit={{ opacity: 0 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ borderRadius: isHovered ? "0rem" : "1.5rem" }}
              transition={{ ease: "easeInOut", duration: 0.4 }}
            >
              <Overlay
                transition={{ ease: [0.65, 0.05, 0.36, 1], duration: 0.8 }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                exit={{ opactiy: 0 }}
              >
                <TextBetween
                  animate={{
                    y: isHovered ? 10 : 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.4,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  <OverlayText small>
                    {subtitle}
                    <IoEllipse className="w-4 h-4" />
                  </OverlayText>
                  <Year box={box}>{year}</Year>
                </TextBetween>

                <CenteredTitle
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
                </CenteredTitle>
              </Overlay>

              <Image
                priority={true}
                className=" object-cover "
                layout="fill"
                alt={alt}
                src={src}
              />
            </ImageContainer>

            <MobileTextBlock>
              <MobileText large>{title}</MobileText>
              <MobileText small gray>
                {subtitle}
              </MobileText>
            </MobileTextBlock>
          </a>
        </Link>
      </RevealUp>
    </>
  );
};
