import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { span, active, inactive, linkWrapper, menuLinks } from "./styles";
import Link from "next/link";

export const NavLinks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const active = links.findIndex((i) => i.url === window.location.pathname);
      if (active !== -1) {
        setActiveIndex(active);
      } else {
        setActiveIndex(0);
      }
    }
  });

  return (
    <>
      <nav className="flex w-fit bg-white p-4 rounded-full shadow-sm">
        <motion.ul style={linkWrapper}>
          {links.map(({ link, url }, index) => {
            const isActive = index === activeIndex;
            return (
              <motion.li key={index}>
                <Link href={url}>
                  <a style={menuLinks}>
                    {isActive ? (
                      <motion.span
                        initial="false"
                        layoutId="active"
                        style={span}
                      />
                    ) : null}
                    <motion.span style={isActive ? active : inactive}>
                      {link}
                    </motion.span>
                  </a>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </>
  );
};

const links = [
  { link: "Home", url: "/" },
  { link: "Work", url: "/work" },
  { link: "About", url: "/about" },
  { link: "Contact", url: "/contact" },
];
