import { Wrap, TitleLink } from "./styled/styledFooter";
import { motion } from "framer-motion";

const SocialLinks = ({ LinkName, href, layoutId }) => {
  return (
    <Wrap>
      <TitleLink as={motion.a} href={href}>
        {LinkName}
      </TitleLink>
    </Wrap>
  );
};
export default SocialLinks;
