import { Link } from "react-scroll";
import { motion } from "framer-motion";
const links = [
  { link: "Home", id: "home", offset: -100 },
  { link: "Work", id: "work", offset: -30 },
  { link: "About", id: "about" },
  { link: "Contact", id: "contact", offset: 0 },
];

export const Navigation = () => {
  return (
    <>
      <motion.nav exit={{ opacity: 0 }}>
        {links.map(({ link, id, offset }) => (
          <Link
            offset={offset}
            className="link"
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
