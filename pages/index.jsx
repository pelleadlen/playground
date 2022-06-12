import Work from "../Components/Work/work";
import About from "../Components/About/about";
import Contact from "../Components/Contact/contact";
import Home from "../Components/Home/Home";
import { Navigation } from "../Components/Navigation/Navigation";

function index() {
  return (
    <>
      <Navigation />
      <Home />
      <Work />
      <About />
      <Contact />
    </>
  );
}
export default index;
