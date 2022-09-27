import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./navigation.module.css";
import styled from "styled-components";
const links = [
  { link: "Home", id: "home", offset: -100 },
  { link: "Work", id: "work", offset: 0 },
  { link: "About", id: "about", offset: 30 },
  { link: "Contact", id: "contact", offset: 0 },
];

const NavBar = styled(motion.nav)`
  border: 0.1px solid #003;
  background: #fff;
  padding: 0.5rem 1rem;
  border-radius: 2.5rem;
  width: fit-content;
  position: fixed;
  bottom: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  margin-bottom: 1.5rem;
  display: flex;
  z-index: 4;
  box-shadow: 3.5px 5px 2.2px -39px rgba(0, 0, 0, 0.026),
    6.5px 9.5px 5.3px -39px rgba(0, 0, 0, 0.031),
    9.6px 13.9px 10px -39px rgba(0, 0, 0, 0.036),
    14.2px 20.6px 17.9px -39px rgba(0, 0, 0, 0.043),
    27.5px 39.9px 33.4px -39px rgba(0, 0, 0, 0.054),
    69px 100px 80px -39px rgba(0, 0, 0, 0.07);
`;

export const Navigation = () => {
  return (
    <>
      <NavBar exit={{ opacity: 0 }}>
        {links.map(({ link, id, offset }) => (
          <Link
            offset={offset}
            className={styles.link}
            activeClass={styles.active}
            spy={true}
            smooth={true}
            duration={500}
            key={id}
            to={id}
            href={id}
          >
            {link}
          </Link>
        ))}
      </NavBar>
    </>
  );
};
