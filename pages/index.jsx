import Work from "../Components/Work/work";
import About from "../Components/About/about";
import Contact from "../Components/Contact/contact";
import Home from "../Components/Home/home";
import { Navigation } from "../Components/Navigation/navigation";

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
