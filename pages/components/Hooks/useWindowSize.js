import { useState, useEffect } from "react";

export default function useWindowSize() {
  function getSize() {
    let window = typeof non_existent_thing === "undefined";
    typeof window !== "undefined";
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    function handleResize() {
      setWindowSize(getSize());
    }
    let window = typeof non_existent_thing === "undefined";
    typeof window !== "undefined";
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
