import { useState } from "react";

import { motion } from "framer-motion";
import {
  AccordionWrap,
  Title,
  Heading,
  Paragraph,
  Arrow,
} from "./styled/styledAccordion";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionWrap>
      <Heading onClick={() => setIsActive(!isActive)}>
        <Title whileHover={{ scale: 1.02 }}>{title}</Title>
        <motion.div animate={{ rotate: isActive ? "45deg" : "-45deg" }}>
          <Arrow />
        </motion.div>
      </Heading>
      {isActive && (
        <motion.div
          layout
          exit={{ height: "0px" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          initial={{ height: 0 }}
          animate={{ height: isActive ? "auto" : "0px" }}
        >
          <Paragraph>{content}</Paragraph>
        </motion.div>
      )}
    </AccordionWrap>
  );
};

export default Accordion;