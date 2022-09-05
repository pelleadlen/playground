import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Arrow,
  CaseText,
  ContentWrapper,
  FlexCol,
  Info,
  Item,
} from "./styled/styledCaseLinks";

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
          <ContentWrapper>
            <Item>
              <Info>
                <h3>{title}</h3>
                <p>{category}</p>
              </Info>

              <motion.div animate={{ rotate: isHovered ? 0 : -45 }}>
                <Arrow />
              </motion.div>
            </Item>
          </ContentWrapper>
        </motion.div>
      </a>
    </Link>
  );
};

export default CaseLinks;
