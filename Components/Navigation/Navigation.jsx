import { Link } from "react-scroll";

const links = [
  { link: "Home", id: "home", offset: -100 },
  { link: "Work", id: "work" },
  { link: "About", id: "about" },
  { link: "Contact", id: "contact", offset: 45 },
];

export const Navigation = () => {
  return (
    <>
      <nav>
        {links.map(({ link, id, offset }) => (
          <Link
            offset={offset}
            className="link"
            spy={true}
            smooth={true}
            duration={500}
            key={id}
            to={id}
          >
            {link}
          </Link>
        ))}
      </nav>
    </>
  );
};
