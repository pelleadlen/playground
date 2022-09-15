import { Tooltip } from "@mui/material";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";
import { useIsMobile } from "../../hooks/isMobile";
import SocialLinks from "./socialLink";

export const CopyToClipboard = ({ mail }) => {
  const isMobile = useIsMobile();
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
        placement="bottom"
      >
        <div onClick={handleCopy}>
          <SocialLinks
            LinkName={mail}
            href={
              isMobile ? "mailto: pelleadlen@gmail.com?subject= 👨‍💻🍺?" : null
            }
          />
        </div>
      </Tooltip>
    </>
  );
};
