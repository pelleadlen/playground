import { useState } from "react";
import {
  AccordionWrap,
  Title,
  Heading,
  Paragraph,
} from "../../styles/styledTripCloset";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionWrap>
      <Heading onClick={() => setIsActive(!isActive)}>
        <Title whileHover={{ scale: 1.02 }}>{title}</Title>
        <motion.div animate={{ rotate: isActive ? "45deg" : "-45deg" }}>
          <IoArrowForwardOutline className="w-9 h-9" />
        </motion.div>
      </Heading>
      {isActive && (
        <motion.div
          transition={{ duration: 0.6, ease: "easeInOut" }}
          initial={{ height: 0 }}
          animate={{ height: isActive ? "auto" : 0 }}
        >
          <Paragraph>{content}</Paragraph>
        </motion.div>
      )}
    </AccordionWrap>
  );
};

export default Accordion;
