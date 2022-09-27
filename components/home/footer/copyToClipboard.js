import { Tooltip } from "@mui/material";
import copy from "copy-to-clipboard";
import { useState } from "react";
import SocialLinks from "./socialLink";

export const CopyToClipboard = ({ mail }) => {
  const [title, setTitle] = useState("Copy to clipboard  🧑‍💻");

  const handleCopy = () => {
    copy(mail);
    setTitle("Copied! ⚡");

    setTimeout(() => {
      setTitle(title);
    }, 2000);
  };

  return (
    <>
      <Tooltip
        enterDelay={100}
        followCursor={true}
        title={title}
        arrow
        enterTouchDelay={0}
        placement="bottom"
      >
        <div onClick={handleCopy}>
          <SocialLinks LinkName={mail} />
        </div>
      </Tooltip>
    </>
  );
};
