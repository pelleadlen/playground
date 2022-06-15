import Work from "../component/Work/work";
import About from "../component/About/about";
import Contact from "../component/Contact/contact";
import Home from "../component/home";
import { Navigation } from "../component/navigation";
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
