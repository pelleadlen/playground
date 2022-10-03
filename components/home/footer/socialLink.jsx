import { motion } from "framer-motion";
import { Wrap, TitleLink } from "./styled/styledFooter";

const SocialLinks = ({ LinkName, href }) => {
  return (
    <Wrap>
      <motion.div whileHover={{ scale: 1.01, y: 2 }}>
        <TitleLink href={href}>{LinkName}</TitleLink>
      </motion.div>
    </Wrap>
  );
};
export default SocialLinks;
