import { motion } from "framer-motion";
import { Link } from "react-scroll";
import styles from "./navigation.module.css";

const links = [
  { link: "Home", id: "home", offset: -100 },
  { link: "Work", id: "work", offset: 0 },
  { link: "About", id: "about", offset: 30 },
  { link: "Contact", id: "contact", offset: 0 },
];

export const Navigation = () => {
  return (
    <>
      <motion.nav className={styles.navbar} exit={{ opacity: 0 }}>
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
      </motion.nav>
    </>
  );
};
