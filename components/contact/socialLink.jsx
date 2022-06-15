import { TitleLink, Underline, Wrap } from "../../styles/styledFootera";
import { motion } from "framer-motion";
import { useState } from "react";
const SocialLinks = ({ LinkName, href, layoutId }) => {
  const [isHovered, setIsHovered] = useState(0);
  return (
    <Wrap>
      <TitleLink
        as={motion.a}
        onMouseEnter={() => setIsHovered(1)}
        onMouseLeave={() => setIsHovered(0)}
        href={href}
      >
        {LinkName}
      </TitleLink>

      <Underline
        initial={{ scaleX: 0 }}
        transition={{ duration: 1 }}
        as={motion.div}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        layoutId={layoutId}
      />
    </Wrap>
  );
};

export default SocialLinks;
