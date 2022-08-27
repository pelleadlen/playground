import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Arrow, CaseText, FlexCol } from "./styled/styledCaseLinks";

const CaseLinks = ({ title, category, href }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Link href={href}>
      <a>
        <motion.div
          onMouseEnter={() => setIsHovered(!isHovered)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.005 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 50 }}
        >
          <CaseText>
            <FlexCol>
              <h4>{title}</h4>
              <h6>{category}</h6>
            </FlexCol>

            <motion.div animate={{ rotate: isHovered ? 0 : -45 }}>
              <Arrow />
            </motion.div>
          </CaseText>
        </motion.div>
      </a>
    </Link>
  );
};

export default CaseLinks;
