import Work from "../Components/Work/work";
import About from "../Components/About/about";
import Contact from "../Components/Contact/contact";
import Home from "../Components/Home/Home";

function index() {
  return (
    <>
      <Home id="home" />
      <Work id="work" />
      <About id="about" />
      <Contact id="contact" />
    </>
  );
}
export default index;
