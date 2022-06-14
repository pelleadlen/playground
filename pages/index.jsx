import Work from "../Components/Work/work";
import About from "../Components/About/about";
import Contact from "../Components/Contact/contact";
import Home from "../Components/Home/home";
import { Navigation } from "../Components/Navigation/navigation";
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
