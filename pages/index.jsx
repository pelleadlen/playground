import Work from "../components/work/work";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Home from "../components/home";
import { Navigation } from "../components/navigation/navigation";
import { Layout } from "../styles/layout";

function index() {
  return (
    <>
      <Navigation />

      <Layout>
        <Home />
        <Work />
        <About />
        <Contact />
      </Layout>
    </>
  );
}
export default index;
