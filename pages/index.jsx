import Work from "../components/Work/work";
import About from "../components/About/about";
import Contact from "../components/Contact/contact";
import Home from "../components/home";
import { Navigation } from "../components/navigation";
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
