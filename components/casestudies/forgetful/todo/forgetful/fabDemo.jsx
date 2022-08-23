import * as s from "../../styled/styledFab";

import { useState } from "react";

const buttons = [
  {
    key: "orange",
    color: "rgb(251 146 60)",
    text: "#000",
    marginTop: "0rem",
  },
  {
    key: "green",
    color: " rgb(74 222 128)",
    text: "#000",
    marginTop: "0.5rem",
  },
  {
    key: "purple",
    color: "rgb(192 132 252)",
    text: "#fff",
    marginTop: "0.5rem",
  },
  { key: "pink", color: "rgb(244 114 182)", text: "#000", marginTop: "0.5rem" },
  { key: "blue", color: "rgb(82 24 250)", text: "#fff", marginTop: "0.5rem" },
];

const containerVariants = {
  open: {
    height: `240px`,
    transition: {
      duration: 0.1,
      staggerChildren: 0.09,
    },
  },
  closed: {
    height: `240px`,
    transition: {
      staggerChildren: 0.02,
      when: "afterChildren",
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  open: {
    opacity: 1,
    translateY: `0.5rem`,
    transition: {
      duration: 0.1,
      type: "spring",
      stiffness: 60,
    },
  },
  closed: {
    opacity: 0,
    translateY: `-1rem`,
    transition: {
      type: "spring",
      stiffness: 60,
    },
  },
};

export const FabDemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <s.ButtonWrapper
        initial={`closed`}
        animate={isOpen ? `open` : `closed`}
        variants={containerVariants}
      >
        <s.Fab
          transition={{ duration: 0.4 }}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: isOpen ? 90 + 45 : 0 }}
          onClick={() => setIsOpen(!isOpen)}
        >
          <s.FabIcon />
        </s.Fab>
        {buttons.map(({ key, text, color, marginTop }) => (
          <s.Button
            style={{
              backgroundColor: `${color}`,
              marginTop: `${marginTop}`,
              color: `${text}`,
            }}
            whileHover={{ scale: 1.08 }}
            initial={{ opacity: 0, scale: 1 }}
            variants={childVariants}
            key={key}
          />
        ))}
      </s.ButtonWrapper>
    </>
  );
};
