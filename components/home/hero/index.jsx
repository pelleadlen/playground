import Div100vh from "react-div-100vh";
import { use100vh } from "react-div-100vh";
import Header from "./header";
import { Heading, HomeWrapper } from "./styled/styledHome";

const Home = () => {
  const height = use100vh();
  return (
    <>
      <HomeWrapper style={{ height: height }} exit={{ opacity: 0 }} id="home">
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
