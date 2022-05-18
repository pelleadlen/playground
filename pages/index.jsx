import Header from "./components/Header";
import HeroText from "./components/HeroText";
import Nav from "./components/Nav";

const index = () => {
  return (
    <>
      <div className="z-50 w-full h-fit fixed bottom-8 left-0 right-0 flex justify-center">
        <Nav className="  " />
      </div>

      <section className="h-screen w-full flex flex-col justify-between overflow-hidden">
        <Header />
        <HeroText className="pb-12" />
      </section>
      <div className="h-screen bg-white rounded-t-3xl rounded-r-3xl -ml-6 -mr-6 z-10 shadow-xl "></div>
    </>
  );
};
export default index;
