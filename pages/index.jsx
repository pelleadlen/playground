import Work from "../components/worka/worka";
import About from "../components/abouta/abouta";
import Contact from "../components/contaca/contacta";
import Home from "../components/homea/indexa";
import { Navigation } from "../components/navigationa";
import { Layout } from "../styles/layout";

function index() {
  return (
    <>
      <Navigation />

      <Layout id="layout" exit={{ opacity: 0 }}>
        <Home />
        <Work />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
export default index;
