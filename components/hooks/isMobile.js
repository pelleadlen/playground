import { useState, useEffect } from "react";

const getIsMobile = () => {
  if (typeof window === "undefined") {
    return true;
  }
  return window.innerWidth < 500;
};

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(getIsMobile());

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    function handleWindowResize() {
      setIsMobile(getIsMobile());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return isMobile;
};
