import { use100vh } from "react-div-100vh";
import Header from "./header";
import { Heading, HomeWrapper } from "./styled/styledHome";
import { useEffect, useState } from "react";
const Home = () => {
  const [offsetY, setOffsetY] = useState(0);
  const height = use100vh();

  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HomeWrapper
        style={{ height: height, transform: `translateY(${offsetY * 0.2}px)` }}
        exit={{ opacity: 0 }}
        id="home"
      >
        <Header />
        <Heading
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          UX/UI designer & developer
          <span>— Pelle Adlén</span>
        </Heading>
      </HomeWrapper>
    </>
  );
};
export default Home;
