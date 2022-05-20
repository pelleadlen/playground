import { useState, useEffect } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { span, active, inactive, linkWrapper, menuLinks } from "./styles";

export const NavLinks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const active = links.findIndex((i) => i.url === window.location.hash);
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
        <AnimateSharedLayout>
          <motion.ul style={linkWrapper}>
            {links.map(({ link, url }, index) => {
              const isActive = index === activeIndex;

              return (
                <motion.li key={index} onClick={() => setActiveIndex(index)}>
                  <a style={menuLinks} href={url}>
                    {isActive ? (
                      <motion.span layoutId="active" style={span} />
                    ) : null}
                    <span style={isActive ? active : inactive}>{link}</span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </AnimateSharedLayout>
      </nav>
    </>
  );
};

const links = [
  { link: "Home", url: "#home", id: "home" },
  { link: "Work", url: "#work", id: "work" },
  { link: "About", url: "#about", id: "about" },
  { link: "Contact", url: "#contact", id: "contact" },
];
